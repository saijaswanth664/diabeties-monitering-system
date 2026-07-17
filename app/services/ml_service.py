import os
import joblib
import numpy as np
import pandas as pd
import shap
import lime
import lime.lime_tabular
from typing import Dict, Any, Tuple

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TRAINED_MODELS_DIR = os.path.join(BASE_DIR, "trained_models")

class MLService:
    def __init__(self):
        self.model = None
        self.scaler = None
        self.X_train = None
        self.feature_names = ['Glucose', 'Insulin', 'BMI', 'Age']
        self.shap_explainer = None
        self.lime_explainer = None

    def _lazy_load(self):
        """Loads serialized assets only when first needed to save runtime resources."""
        if self.model is None:
            model_path = os.path.join(TRAINED_MODELS_DIR, "best_model.pkl")
            scaler_path = os.path.join(TRAINED_MODELS_DIR, "scaler.pkl")
            xtrain_path = os.path.join(TRAINED_MODELS_DIR, "X_train.pkl")
            
            if not os.path.exists(model_path) or not os.path.exists(scaler_path) or not os.path.exists(xtrain_path):
                raise FileNotFoundError(
                    "Model files not found. Please run the training pipeline first: `python app/ml/train.py`"
                )
                
            self.model = joblib.load(model_path)
            self.scaler = joblib.load(scaler_path)
            self.X_train = joblib.load(xtrain_path)

    def predict_diabetes_risk(self, glucose: float, insulin: float, bmi: float, age: int) -> Tuple[int, float]:
        """
        Accepts patient readings, preprocesses them, and predicts:
        - Outcome: 1 (Diabetic Risk) or 0 (Healthy)
        - Probability: Risk percentage (e.g. 0.87 -> 87%)
        """
        self._lazy_load()
        
        # Prepare and scale the input vector
        input_data = pd.DataFrame([[glucose, insulin, bmi, age]], columns=self.feature_names)
        input_scaled = self.scaler.transform(input_data)
        
        # Perform inference
        prediction = int(self.model.predict(input_scaled)[0])
        probabilities = self.model.predict_proba(input_scaled)[0]
        risk_probability = float(probabilities[1])  # Class 1 probability
        
        return prediction, risk_probability

    def generate_shap_explanation(self, glucose: float, insulin: float, bmi: float, age: int) -> Dict[str, float]:
        """
        Calculates the SHAP contribution values for each feature on the specific input.
        Positive values drive risk higher, negative values lower.
        """
        self._lazy_load()
        
        input_data = pd.DataFrame([[glucose, insulin, bmi, age]], columns=self.feature_names)
        input_scaled = self.scaler.transform(input_data)
        
        # Lazy initialize SHAP Explainer
        if self.shap_explainer is None:
            # We scale the background dataset to match model expectations
            X_train_scaled = self.scaler.transform(self.X_train)
            
            # Use Explainer (TreeExplainer for RF/Tree, LinearExplainer for LR, KernelExplainer for others)
            # Standard shap.Explainer dynamically checks model type
            self.shap_explainer = shap.Explainer(self.model, X_train_scaled)
            
        shap_values = self.shap_explainer(input_scaled)
        
        # Extract features and their respective SHAP values
        # If output is multidimensional (like classifiers), shap_values can have .values[0, :, 1]
        raw_vals = shap_values.values[0]
        if len(raw_vals.shape) > 1 and raw_vals.shape[-1] == 2:
            # Classification has values for [Healthy, Diabetic], we take the Diabetic class contribution
            raw_vals = raw_vals[:, 1]
            
        contributions = {}
        for idx, feat in enumerate(self.feature_names):
            contributions[feat] = float(raw_vals[idx])
            
        return contributions

    def generate_lime_explanation(self, glucose: float, insulin: float, bmi: float, age: int) -> Dict[str, Any]:
        """
        Calculates the LIME feature contributions for local interpretability.
        """
        self._lazy_load()
        
        input_data = pd.DataFrame([[glucose, insulin, bmi, age]], columns=self.feature_names)
        input_scaled = self.scaler.transform(input_data)[0]
        
        # Lazy initialize LIME Tabular Explainer
        if self.lime_explainer is None:
            X_train_scaled = self.scaler.transform(self.X_train)
            self.lime_explainer = lime.lime_tabular.LimeTabularExplainer(
                training_data=X_train_scaled,
                feature_names=self.feature_names,
                class_names=['Healthy', 'Diabetic'],
                mode='classification',
                random_state=42
            )
            
        # Explain the scaled instance
        exp = self.lime_explainer.explain_instance(
            data_row=input_scaled,
            predict_fn=self.model.predict_proba,
            num_features=4
        )
        
        # LIME returns explanations as list of tuples (feature_idx, weight)
        raw_list = exp.as_list()
        
        # Match LIME rules to human-readable feature keys
        result = {}
        for rule, weight in raw_list:
            for feat in self.feature_names:
                if feat in rule:
                    result[feat] = {
                        "rule": rule,
                        "weight": float(weight)
                    }
                    
        return result

ml_service = MLService()
