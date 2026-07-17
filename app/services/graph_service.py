import os
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend for server environments
import matplotlib.pyplot as plt
import numpy as np
from typing import List, Dict, Optional
from app.models.health_record import HealthRecord

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
GRAPHS_DIR = os.path.join(BASE_DIR, "reports_generated", "graphs")

class GraphService:
    def __init__(self):
        os.makedirs(GRAPHS_DIR, exist_ok=True)

    def generate_patient_trend_graph(self, user_id: int, records: List[HealthRecord]) -> Optional[str]:
        """
        Generates a premium dual-axis line graph tracking Glucose and BMI trends over time.
        """
        if not records or len(records) < 2:
            return None  # Trend lines require at least two data points

        # Sort records chronologically by creation time
        sorted_records = sorted(records, key=lambda r: r.created_at)
        
        months = [r.month for r in sorted_records]
        glucose = [r.glucose for r in sorted_records]
        bmi = [r.bmi for r in sorted_records]

        # Reset plot state
        plt.clf()
        plt.close('all')
        
        # Premium dark slate / clean modern theme
        fig, ax1 = plt.subplots(figsize=(7, 3.5), dpi=300)
        
        # Primary axis: Glucose (Teal color scheme)
        color_glucose = '#0d9488'
        ax1.set_xlabel('Timeline (Month)', fontweight='bold', labelpad=10, color='#334155')
        ax1.set_ylabel('Glucose (mg/dL)', color=color_glucose, fontweight='bold')
        line1 = ax1.plot(months, glucose, color=color_glucose, marker='o', linewidth=2.5, label='Glucose Trend')
        ax1.tick_params(axis='y', labelcolor=color_glucose)
        ax1.grid(True, linestyle='--', alpha=0.3)

        # Secondary axis: BMI (Slate Blue color scheme)
        ax2 = ax1.twinx()
        color_bmi = '#4f46e5'
        ax2.set_ylabel('Body Mass Index (BMI)', color=color_bmi, fontweight='bold')
        line2 = ax2.plot(months, bmi, color=color_bmi, marker='s', linewidth=2, linestyle='--', label='BMI Trend')
        ax2.tick_params(axis='y', labelcolor=color_bmi)

        # Combine legends
        lines = line1 + line2
        labels = [l.get_label() for l in lines]
        ax1.legend(lines, labels, loc='upper left', frameon=True, facecolor='#f8fafc', edgecolor='none')
        
        plt.title('Patient Clinical Trends (Glucose vs. BMI)', fontsize=12, fontweight='bold', pad=15, color='#1e293b')
        fig.tight_layout()

        # Save graph
        graph_path = os.path.join(GRAPHS_DIR, f"user_{user_id}_trends.png")
        plt.savefig(graph_path, bbox_inches='tight', transparent=False, facecolor='#ffffff')
        plt.close()
        
        return graph_path

    def generate_shap_bar_chart(self, user_id: int, shap_contributions: Dict[str, float]) -> str:
        """
        Generates a stunning horizontal bar chart representing local SHAP values.
        Features that increase risk are colored crimson, features that decrease risk are colored teal.
        """
        plt.clf()
        plt.close('all')
        
        features = list(shap_contributions.keys())
        values = list(shap_contributions.values())
        
        # Standard sort: largest positive contribution on top
        sorted_indices = np.argsort(values)
        sorted_features = [features[i] for i in sorted_indices]
        sorted_values = [values[i] for i in sorted_indices]

        # Determine colors dynamically
        # Crimson (#e11d48) for positive values (increases diabetes risk)
        # Teal (#0d9488) for negative values (decreases diabetes risk)
        colors = ['#0d9488' if val < 0 else '#e11d48' for val in sorted_values]

        fig, ax = plt.subplots(figsize=(7, 3), dpi=300)
        bars = ax.barh(sorted_features, sorted_values, color=colors, height=0.55, edgecolor='#cbd5e1', linewidth=0.5)
        
        # Customize ticks and borders
        ax.axvline(0, color='#64748b', linewidth=1, linestyle='-')
        ax.set_xlabel('AI Risk Driver Influence (SHAP Value)', fontweight='bold', color='#334155', labelpad=8)
        ax.tick_params(axis='both', colors='#475569')
        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False)
        ax.spines['left'].set_color('#cbd5e1')
        ax.spines['bottom'].set_color('#cbd5e1')
        ax.grid(axis='x', linestyle=':', alpha=0.5)

        # Annotate bars with precise percentages or signs
        for bar in bars:
            width = bar.get_width()
            align = 'left' if width < 0 else 'right'
            offset = -8 if width < 0 else 8
            # Display text value
            ax.annotate(
                f"{'+' if width > 0 else ''}{width:.3f}",
                xy=(width, bar.get_y() + bar.get_height() / 2),
                xytext=(offset, 0),
                textcoords="offset points",
                ha=align, va='center',
                fontsize=8, fontweight='bold',
                color='#1e293b'
            )

        plt.title('Explainable AI (XAI) - Clinical Biomarker Influence', fontsize=11, fontweight='bold', pad=15, color='#1e293b')
        fig.tight_layout()

        graph_path = os.path.join(GRAPHS_DIR, f"user_{user_id}_shap.png")
        plt.savefig(graph_path, bbox_inches='tight', transparent=False, facecolor='#ffffff')
        plt.close()
        
        return graph_path

graph_service = GraphService()
