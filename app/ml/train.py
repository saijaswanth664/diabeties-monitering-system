import os
import json
import urllib.request
import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# Define paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATASETS_DIR = os.path.join(BASE_DIR, "datasets")
TRAINED_MODELS_DIR = os.path.join(BASE_DIR, "trained_models")

DATASET_URL = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.data.csv"
DATASET_PATH = os.path.join(DATASETS_DIR, "pima-indians-diabetes.csv")

def download_dataset():
    """Ensure datasets directory exists and download the Pima Indians dataset."""
    os.makedirs(DATASETS_DIR, exist_ok=True)
    os.makedirs(TRAINED_MODELS_DIR, exist_ok=True)
    
    if not os.path.exists(DATASET_PATH):
        print(f"[*] Downloading dataset from {DATASET_URL}...")
        urllib.request.urlretrieve(DATASET_URL, DATASET_PATH)
        print("[+] Dataset downloaded successfully!")
    else:
        print("[*] Dataset already exists locally.")

def preprocess_and_train():
    """Preprocess data, scale features, train 4 models, compare, and serialize the best."""
    download_dataset()
    
    # Load dataset
    column_names = [
        'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 
        'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome'
    ]
    df = pd.read_csv(DATASET_PATH, names=column_names)
    
    print(f"[*] Loaded dataset with shape: {df.shape}")
    
    # In Pima Indians dataset, 0 is used for missing entries in biological columns
    # We replace 0 with NaN for these columns, then impute with the median
    impute_cols = ['Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI']
    for col in impute_cols:
        df[col] = df[col].replace(0, np.nan)
        df[col] = df[col].fillna(df[col].median())
        
    # We subset features to [Glucose, Insulin, BMI, Age] to align with Health Record inputs
    feature_cols = ['Glucose', 'Insulin', 'BMI', 'Age']
    X = df[feature_cols]
    y = df['Outcome']
    
    # Split dataset (80% train, 20% test)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    
    # Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Save the scaler
    scaler_path = os.path.join(TRAINED_MODELS_DIR, "scaler.pkl")
    joblib.dump(scaler, scaler_path)
    print(f"[+] Scaler saved to {scaler_path}")

    # Save X_train for SHAP and LIME explainer initialization
    x_train_path = os.path.join(TRAINED_MODELS_DIR, "X_train.pkl")
    joblib.dump(X_train, x_train_path)
    print(f"[+] X_train background dataset saved to {x_train_path}")
    
    # Define models
    models = {
        "Logistic Regression": LogisticRegression(random_state=42, max_iter=1000),
        "Random Forest": RandomForestClassifier(random_state=42, n_estimators=100, max_depth=6),
        "Support Vector Machine": SVC(random_state=42, probability=True, kernel='rbf'),
        "Neural Network (MLP)": MLPClassifier(random_state=42, hidden_layer_sizes=(64, 32), max_iter=1000, early_stopping=True)
    }
    
    comparison_results = {}
    best_model_name = None
    best_f1 = -1
    best_model_obj = None
    
    print("\n[*] Starting model training & evaluation...")
    print("=" * 80)
    print(f"{'Model Name':<25} | {'Accuracy':<10} | {'Precision':<10} | {'Recall':<10} | {'F1-Score':<10}")
    print("=" * 80)
    
    for name, model in models.items():
        # Train model
        model.fit(X_train_scaled, y_train)
        
        # Predict
        y_pred = model.predict(X_test_scaled)
        
        # Calculate metrics
        acc = accuracy_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred, zero_division=0)
        rec = recall_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)
        
        print(f"{name:<25} | {acc:.4f}     | {prec:.4f}     | {rec:.4f}     | {f1:.4f}")
        
        comparison_results[name] = {
            "accuracy": round(acc, 4),
            "precision": round(prec, 4),
            "recall": round(rec, 4),
            "f1_score": round(f1, 4)
        }
        
        # We select the best model based on F1-Score (since diabetes prediction is imbalanced/critical)
        if f1 > best_f1:
            best_f1 = f1
            best_model_name = name
            best_model_obj = model
            
    print("=" * 80)
    print(f"[+] Best Model Selected: {best_model_name} (F1-Score: {best_f1:.4f})")
    
    # Save the best model
    best_model_path = os.path.join(TRAINED_MODELS_DIR, "best_model.pkl")
    joblib.dump(best_model_obj, best_model_path)
    print(f"[+] Best model ({best_model_name}) serialized to {best_model_path}")
    
    # Save comparison logs as JSON
    comparison_path = os.path.join(TRAINED_MODELS_DIR, "model_comparison.json")
    with open(comparison_path, "w") as f:
        json.dump({
            "best_model": best_model_name,
            "metrics": comparison_results
        }, f, indent=4)
    print(f"[+] Model comparison metrics written to {comparison_path}")

if __name__ == "__main__":
    preprocess_and_train()
