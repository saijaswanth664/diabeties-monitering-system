import { n as Calendar, t as Sparkles } from "./sparkles-CeGwG3do.js";
import { n as Flame, t as Heart } from "./heart-DOMDi-fT.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, _ as Activity, i as useToast, j as __toESM, m as CircleAlert } from "./index-gvqOpvu8.js";
import { n as healthAPI } from "./services-CBL1BtHA.js";
import { t as GlassCard } from "./GlassCard-BsDuDwxd.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
//#region src/pages/Health/HealthUpload.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var HealthUpload = () => {
	const [glucose, setGlucose] = (0, import_react.useState)(140);
	const [insulin, setInsulin] = (0, import_react.useState)(80);
	const [bmi, setBmi] = (0, import_react.useState)(28);
	const [age, setAge] = (0, import_react.useState)(30);
	const [month, setMonth] = (0, import_react.useState)(() => {
		const d = /* @__PURE__ */ new Date();
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
	});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const toast = useToast();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!month || !glucose || !insulin || !bmi || !age) {
			toast.warning("Please input all necessary patient biometrics.");
			return;
		}
		setLoading(true);
		try {
			const response = await healthAPI.uploadHealthData({
				glucose: parseFloat(glucose),
				insulin: parseFloat(insulin),
				bmi: parseFloat(bmi),
				age: parseInt(age),
				month
			});
			toast.success("Patient metrics processed successfully.", "Metrics Analysed");
			navigate("/predict", { state: { predictionData: response.data } });
		} catch (err) {
			const errMsg = err.response?.data?.detail || "Failed to submit clinical parameters to prediction engine.";
			toast.error(errMsg, "Processing Failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent",
				children: "Biometric Diagnostic Upload"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider",
				children: "Feed clinical biometric inputs to the ensemble network"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "p-6 relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Reporting Month Period",
									id: "month",
									type: "text",
									placeholder: "YYYY-MM (e.g. 2026-05)",
									icon: Calendar,
									value: month,
									onChange: (e) => setMonth(e.target.value),
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Patient Age (Years)",
									id: "age",
									type: "number",
									placeholder: "e.g. 34",
									icon: Calendar,
									min: 1,
									max: 120,
									value: age,
									onChange: (e) => setAge(e.target.value),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-slate-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
												size: 16,
												className: "text-cyan-400"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: "Plasma Glucose Concentration"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-black text-cyan-400",
											children: [
												glucose,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-500 font-bold",
													children: "mg/dL"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 40,
										max: 400,
										step: .5,
										value: glucose,
										onChange: (e) => setGlucose(parseFloat(e.target.value)),
										className: "w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] text-slate-500 font-semibold",
										children: "Typical healthy fasting level should read below 100 mg/dL. Levels above 140 indicate potential prediabetes."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-slate-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
												size: 16,
												className: "text-violet-400"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: "Body Mass Index (BMI)"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-black text-violet-400",
											children: [
												bmi,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-500 font-bold",
													children: "kg/m²"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 10,
										max: 60,
										step: .1,
										value: bmi,
										onChange: (e) => setBmi(parseFloat(e.target.value)),
										className: "w-full accent-violet-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] text-slate-500 font-semibold",
										children: "Typical target values range between 18.5 and 24.9. Values over 30 represent clinical obesity."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-slate-950/20",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-slate-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
												size: 16,
												className: "text-emerald-400"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: "2-Hour Serum Insulin"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-black text-emerald-400",
											children: [
												insulin,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-slate-500 font-bold",
													children: "μU/mL"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 5,
										max: 500,
										step: 1,
										value: insulin,
										onChange: (e) => setInsulin(parseFloat(e.target.value)),
										className: "w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] text-slate-500 font-semibold",
										children: "Insulin values above 166 suggest cellular insulin resistance in clinical contexts."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "primary",
								loading,
								className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 14,
									className: "animate-pulse"
								}), " Launch Diagnostic Analysis"]
							})
						]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5",
					glow: "cyan",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-bold text-slate-200 mb-2 border-b border-white/5 pb-2",
						children: "Biometric Specifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col gap-3 text-[11px] text-slate-400 leading-relaxed font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/5 pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Plasma Glucose:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan-400 font-bold",
									children: "40 - 400 mg/dL"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/5 pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Body Mass Index:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-violet-400 font-bold",
									children: "10 - 60 kg/m²"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between border-b border-white/5 pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Serum Insulin:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-400 font-bold",
									children: "5 - 500 μU/mL"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Target Age:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-200 font-bold",
									children: "1 - 120 Years"
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "p-5 bg-cyan-500/5 border-cyan-500/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 text-[11px] text-slate-400 leading-relaxed font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "font-bold text-slate-200 text-xs",
								children: "Model Pipeline Execution"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Upon submission, the scaled vectors trigger a multi-classifier pipeline. The best model makes predictions, compared to baseline, triggering explainability SHAP models." })]
						})]
					})
				})]
			})]
		})]
	});
};
//#endregion
export { HealthUpload as default };
