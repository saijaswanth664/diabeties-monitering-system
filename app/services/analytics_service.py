from typing import Dict, Any, List, Optional
from sqlalchemy.orm import Session
from app.models.health_record import HealthRecord

class AnalyticsService:
    def compare_records(self, current: HealthRecord, previous: Optional[HealthRecord]) -> Dict[str, Any]:
        """
        Compares two monthly readings and evaluates clinical progress.
        """
        metrics = ["glucose", "bmi", "insulin"]
        comparison = {}
        
        for metric in metrics:
            curr_val = getattr(current, metric)
            if previous:
                prev_val = getattr(previous, metric)
                diff = curr_val - prev_val
                
                # Check performance relative to clinical health
                # A reduction in Glucose/BMI is generally an improvement, an increase is a deterioration
                if metric in ["glucose", "bmi"]:
                    if diff < -0.01:
                        status = "Improved"
                    elif diff > 0.01:
                        status = "Increased (Risk)"
                    else:
                        status = "Stable"
                else:  # Insulin levels can be complex, but standard reduction/stabilization is evaluated
                    if abs(diff) <= 0.01:
                        status = "Stable"
                    elif diff < 0:
                        status = "Reduced"
                    else:
                        status = "Increased"
                        
                comparison[metric] = {
                    "current": curr_val,
                    "previous": prev_val,
                    "difference": round(diff, 2),
                    "status": status
                }
            else:
                comparison[metric] = {
                    "current": curr_val,
                    "previous": None,
                    "difference": 0.0,
                    "status": "Baseline (First Entry)"
                }
                
        return comparison

    def generate_recommendations(self, current: HealthRecord) -> Dict[str, Any]:
        """
        Clinical expert rules engine. Evaluates thresholds and compiles:
        - Warnings: Immediate biological hazards
        - Lifestyle Recommendations: Physical, nutritional, and clinical steps
        """
        warnings = []
        recommendations = []
        
        # 1. Glucose assessment
        if current.glucose > 200:
            warnings.append("CRITICAL: Severe Hyperglycemia (Glucose > 200 mg/dL). Immediate medical consultation is strongly advised.")
            recommendations.append("Limit all refined carbohydrates and sugars immediately. Check urine ketones if advised by your physician.")
        elif current.glucose > 140:
            warnings.append("WARNING: Elevated Blood Glucose (Glucose > 140 mg/dL). Indicates potential prediabetes or uncontrolled glycemic response.")
            recommendations.append("Incorporate low-glycemic index foods (whole grains, leafy greens, lean proteins) into your diet.")
            recommendations.append("Perform 30 minutes of moderate aerobic exercise (e.g. brisk walking) daily to improve insulin sensitivity.")
        elif current.glucose < 70:
            warnings.append("WARNING: Hypoglycemia (Glucose < 70 mg/dL). Blood sugar is abnormally low.")
            recommendations.append("Consume 15g of fast-acting glucose immediately (e.g., fruit juice, candy) and retest in 15 minutes.")
        else:
            recommendations.append("Glucose is in the optimal target range. Keep maintaining your current diet and active lifestyle.")

        # 2. BMI assessment
        if current.bmi >= 30:
            warnings.append("WARNING: Clinical Obesity (BMI >= 30). Increases cardiovascular risk, insulin resistance, and overall morbidity.")
            recommendations.append("Initiate a structured calorie-deficit meal plan focused on high-fiber foods and lean proteins.")
            recommendations.append("Establish a weekly routine of 150 minutes of moderate-intensity exercise combined with light strength training.")
        elif current.bmi >= 25:
            warnings.append("Note: Overweight (BMI 25 - 29.9). Elevates metabolic strain.")
            recommendations.append("Monitor portion sizes and reduce intake of saturated fats and high-calorie processed foods.")
            recommendations.append("Increase daily step count and minimize sedentary time during work hours.")
        elif current.bmi < 18.5:
            warnings.append("WARNING: Underweight (BMI < 18.5). May indicate nutritional deficiencies or muscle wasting.")
            recommendations.append("Consult a dietitian to establish a high-calorie, nutrient-dense diet rich in healthy fats and proteins.")
        else:
            recommendations.append("Body Mass Index is in the healthy range (18.5 - 24.9).")

        # 3. Insulin assessment
        # Fasting insulin levels are typically healthy below 25 mIU/L, but 2-hour post load in Pima dataset varies.
        if current.insulin > 166:
            warnings.append("WARNING: Marked Hyperinsulinemia (Insulin > 166 μU/mL). Suggestive of severe cellular insulin resistance.")
            recommendations.append("Consult an endocrinologist to evaluate pancreatic function and insulin sensitivity.")
            recommendations.append("Focus heavily on resistance training to naturally stimulate insulin-independent glucose uptake in muscles.")
        elif current.insulin < 15:
            # Low insulin can sometimes be healthy in athletes, or signal impaired beta-cell capacity in diabetic contexts
            if current.glucose > 140:
                warnings.append("WARNING: High glucose combined with low insulin indicates potential beta-cell secretory insufficiency.")
                recommendations.append("Seek immediate endocrine consultation to run diagnostic tests (e.g. C-peptide test).")

        # 4. Overall Outcome Prediction
        if current.outcome == 1:
            warnings.append("IMPORTANT: Overall AI risk prediction indicates a HIGH probability of diabetic progression.")
            recommendations.append("Schedule a comprehensive screening including HbA1c and lipid panel tests at a certified laboratory.")
            recommendations.append("Discuss preventative therapeutic options (e.g. Metformin or intensive lifestyle interventions) with your primary physician.")

        return {
            "warnings": warnings,
            "recommendations": recommendations
        }

analytics_service = AnalyticsService()
