import os
from datetime import datetime, timezone
from typing import List, Dict, Any, Optional
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

from app.models.user import User
from app.models.health_record import HealthRecord

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
REPORTS_DIR = os.path.join(BASE_DIR, "reports_generated")

class ReportService:
    def __init__(self):
        os.makedirs(REPORTS_DIR, exist_ok=True)

    def generate_pdf_report(
        self,
        user: User,
        current_record: HealthRecord,
        comparison: Dict[str, Any],
        analysis: Dict[str, List[str]],
        trend_graph_path: Optional[str],
        shap_graph_path: str
    ) -> str:
        """
        Creates a premium clinical monitoring and analytics PDF report.
        """
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        pdf_filename = f"report_user_{user.user_id}_{timestamp}.pdf"
        pdf_path = os.path.join(REPORTS_DIR, pdf_filename)

        # Set up document
        doc = SimpleDocTemplate(
            pdf_path,
            pagesize=letter,
            rightMargin=36,
            leftMargin=36,
            topMargin=36,
            bottomMargin=36
        )

        styles = getSampleStyleSheet()
        
        # Define modern clinical styling guidelines
        primary_color = colors.HexColor("#0f172a")    # Deep Slate
        secondary_color = colors.HexColor("#0d9488")  # Teal Accent
        text_color = colors.HexColor("#334155")       # Charcoal Body
        warning_color = colors.HexColor("#be123c")    # Rose Red
        card_bg = colors.HexColor("#f8fafc")          # Slate Light

        # Custom paragraph styles
        styles.add(ParagraphStyle(
            name='ClinicalTitle',
            fontName='Helvetica-Bold',
            fontSize=22,
            leading=26,
            textColor=primary_color,
            alignment=0,
            spaceAfter=5
        ))
        
        styles.add(ParagraphStyle(
            name='ClinicalSubtitle',
            fontName='Helvetica',
            fontSize=11,
            leading=14,
            textColor=secondary_color,
            alignment=0,
            spaceAfter=15
        ))

        styles.add(ParagraphStyle(
            name='SectionHeader',
            fontName='Helvetica-Bold',
            fontSize=14,
            leading=18,
            textColor=primary_color,
            spaceBefore=10,
            spaceAfter=8,
            keepWithNext=True
        ))

        styles.add(ParagraphStyle(
            name='BodyCharcoal',
            fontName='Helvetica',
            fontSize=9.5,
            leading=13,
            textColor=text_color
        ))

        styles.add(ParagraphStyle(
            name='BodyCharcoalBold',
            fontName='Helvetica-Bold',
            fontSize=9.5,
            leading=13,
            textColor=primary_color
        ))

        styles.add(ParagraphStyle(
            name='WarningText',
            fontName='Helvetica-Bold',
            fontSize=9,
            leading=12,
            textColor=warning_color
        ))

        styles.add(ParagraphStyle(
            name='RecText',
            fontName='Helvetica',
            fontSize=9,
            leading=12,
            textColor=text_color
        ))

        story = []

        # 1. HEADER SECTION (Modern Band)
        header_text = [
            Paragraph("DIABETES CLINICAL ANALYTICS SYSTEM", styles['ClinicalTitle']),
            Paragraph(f"Personalized Health Monitoring & AI Diagnostics  |  Generated on {datetime.now().strftime('%B %d, %Y at %I:%M %p')}", styles['ClinicalSubtitle'])
        ]
        story.extend(header_text)
        story.append(Spacer(1, 10))

        # 2. PATIENT PROFILE CARD (Styled Table)
        profile_data = [
            [
                Paragraph("<b>Patient Name:</b>", styles['BodyCharcoal']),
                Paragraph(user.full_name, styles['BodyCharcoalBold']),
                Paragraph("<b>Patient Gmail:</b>", styles['BodyCharcoal']),
                Paragraph(user.gmail, styles['BodyCharcoalBold'])
            ],
            [
                Paragraph("<b>Age:</b>", styles['BodyCharcoal']),
                Paragraph(f"{current_record.age} Years", styles['BodyCharcoalBold']),
                Paragraph("<b>Reporting Period:</b>", styles['BodyCharcoal']),
                Paragraph(current_record.month, styles['BodyCharcoalBold'])
            ],
            [
                Paragraph("<b>Diagnostic Status:</b>", styles['BodyCharcoal']),
                Paragraph(
                    "<font color='#be123c'><b>Diabetic Risk (HIGH)</b></font>" if current_record.outcome == 1 else "<font color='#0d9488'><b>Normal (HEALTHY)</b></font>",
                    styles['BodyCharcoalBold']
                ),
                Paragraph("<b>Risk Probability:</b>", styles['BodyCharcoal']),
                Paragraph(f"<b>{current_record.outcome * 100 or 100 * (comparison['glucose']['current'] / 300.0):.1f}%</b> (AI Prediction)", styles['BodyCharcoalBold'])
            ]
        ]
        
        # If risk probability is computed, use real values
        if 'risk_probability' in comparison:
            prob_pct = comparison['risk_probability'] * 100
            profile_data[2][3] = Paragraph(f"<b>{prob_pct:.1f}%</b> (AI Classifier)", styles['BodyCharcoalBold'])
            profile_data[2][1] = Paragraph(
                "<font color='#be123c'><b>Diabetic Risk (HIGH)</b></font>" if current_record.outcome == 1 else "<font color='#0d9488'><b>Normal (HEALTHY)</b></font>",
                styles['BodyCharcoalBold']
            )

        profile_table = Table(profile_data, colWidths=[1.2*inch, 2.3*inch, 1.3*inch, 2.7*inch])
        profile_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), card_bg),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('PADDING', (0, 0), (-1, -1), 8),
            ('LINEBELOW', (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
            ('BOX', (0, 0), (-1, -1), 1, colors.HexColor("#cbd5e1")),
        ]))
        story.append(profile_table)
        story.append(Spacer(1, 15))

        # 3. CLINICAL DATA & MONTHLY COMPARISON TABLE
        story.append(Paragraph("Biomarker Comparison Matrix", styles['SectionHeader']))
        
        comp_headers = [
            Paragraph("<b>Biomarker</b>", styles['BodyCharcoalBold']),
            Paragraph("<b>Current Value</b>", styles['BodyCharcoalBold']),
            Paragraph("<b>Previous Value</b>", styles['BodyCharcoalBold']),
            Paragraph("<b>Difference</b>", styles['BodyCharcoalBold']),
            Paragraph("<b>Trend Status</b>", styles['BodyCharcoalBold'])
        ]
        
        comp_rows = [comp_headers]
        
        # Display Glucose, BMI, and Insulin comparison
        display_names = {
            "glucose": "Plasma Glucose Concentration (mg/dL)",
            "bmi": "Body Mass Index (BMI)",
            "insulin": "2-Hour Serum Insulin (μU/mL)"
        }
        
        for key, details in comparison.items():
            if key not in display_names:
                continue
            
            curr_str = f"{details['current']:.1f}"
            prev_str = f"{details['previous']:.1f}" if details['previous'] is not None else "N/A"
            diff_str = f"{'+' if details['difference'] > 0 else ''}{details['difference']:.1f}" if details['previous'] is not None else "Baseline"
            
            status_text = details['status']
            if "Improved" in status_text or "Reduced" in status_text:
                status_formatted = f"<font color='#0d9488'><b>{status_text}</b></font>"
            elif "Increased (Risk)" in status_text or "Increased" in status_text:
                status_formatted = f"<font color='#be123c'><b>{status_text}</b></font>"
            else:
                status_formatted = f"<b>{status_text}</b>"

            comp_rows.append([
                Paragraph(display_names[key], styles['BodyCharcoal']),
                Paragraph(curr_str, styles['BodyCharcoalBold']),
                Paragraph(prev_str, styles['BodyCharcoal']),
                Paragraph(diff_str, styles['BodyCharcoal']),
                Paragraph(status_formatted, styles['BodyCharcoal'])
            ])

        comp_table = Table(comp_rows, colWidths=[2.8*inch, 1.1*inch, 1.1*inch, 1.1*inch, 1.4*inch])
        comp_table.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('PADDING', (0, 0), (-1, -1), 6),
            ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor("#e2e8f0")),
        ]))
        story.append(comp_table)
        story.append(Spacer(1, 15))

        # 4. CLINICAL WARNINGS & RECOMMENDATIONS CARD
        rec_elements = []
        rec_elements.append(Paragraph("Clinical Analysis & Health Guidelines", styles['SectionHeader']))
        
        card_contents = []
        
        # Process Warnings
        if analysis["warnings"]:
            card_contents.append(Paragraph("<b>ALERT WARNINGS:</b>", styles['WarningText']))
            for warning in analysis["warnings"]:
                card_contents.append(Paragraph(f"• {warning}", styles['WarningText']))
            card_contents.append(Spacer(1, 6))
            
        # Process Recommendations
        if analysis["recommendations"]:
            card_contents.append(Paragraph("<b>LIFESTYLE RECOMMENDATIONS:</b>", styles['BodyCharcoalBold']))
            for rec in analysis["recommendations"]:
                card_contents.append(Paragraph(f"• {rec}", styles['RecText']))
                
        if card_contents:
            # Wrap warnings/recommendations inside a beautiful, unified box
            rec_box_table = Table([[card_contents]], colWidths=[7.5*inch])
            
            box_border_color = warning_color if analysis["warnings"] else secondary_color
            box_bg = colors.HexColor("#fff1f2") if analysis["warnings"] else colors.HexColor("#f0fdfa")
            
            rec_box_table.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, -1), box_bg),
                ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                ('PADDING', (0, 0), (-1, -1), 10),
                ('BOX', (0, 0), (-1, -1), 1.5, box_border_color),
            ]))
            rec_elements.append(rec_box_table)
            story.append(KeepTogether(rec_elements))
            
        story.append(Spacer(1, 15))

        # 5. CHARTS AND GRAPHS SECTION
        graph_elements = []
        graph_elements.append(Paragraph("Visual Healthcare Analytics", styles['SectionHeader']))
        
        # Build side-by-side or stacked charts table
        chart_tables_rows = []
        
        # Matplotlib images (must restrict dimensions to avoid layout page overflowing)
        width_px = 3.65 * inch
        height_px = 2.0 * inch
        
        shap_img = Image(shap_graph_path, width=width_px, height=height_px)
        
        if trend_graph_path and os.path.exists(trend_graph_path):
            trend_img = Image(trend_graph_path, width=width_px, height=height_px)
            # Side-by-side layout
            chart_tables_rows.append([trend_img, shap_img])
            chart_table = Table(chart_tables_rows, colWidths=[3.75*inch, 3.75*inch])
        else:
            # Only SHAP graph is available
            chart_tables_rows.append([shap_img])
            chart_table = Table(chart_tables_rows, colWidths=[7.5*inch])
            
        chart_table.setStyle(TableStyle([
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('PADDING', (0, 0), (-1, -1), 0),
        ]))
        
        graph_elements.append(chart_table)
        
        # XAI Explanatory note
        graph_elements.append(Spacer(1, 6))
        graph_elements.append(Paragraph(
            "<i>Note on SHAP Explanation: SHAP values represent individual biomarker contributions to the AI outcome. "
            "Red bars (positive) represent factors pushing risk HIGHER, while Teal bars (negative) show protective factors.</i>",
            styles['BodyCharcoal']
        ))
        
        story.append(KeepTogether(graph_elements))

        # Build document
        doc.build(story)
        
        return pdf_path

report_service = ReportService()
