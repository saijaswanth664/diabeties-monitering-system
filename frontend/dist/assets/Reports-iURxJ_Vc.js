import { n as Calendar, t as Sparkles } from "./sparkles-CeGwG3do.js";
import { t as FileText } from "./file-text-CsYh7lW9.js";
import { t as Lock } from "./lock-DsrMiXGW.js";
import { t as Mail } from "./mail-CPFIbHsL.js";
import { t as Send } from "./send-CGPGU9Z0.js";
import { C as require_jsx_runtime, O as require_react, S as useAuth, b as AnimatePresence, c as overlayVariants, d as X, i as useToast, j as __toESM, p as CircleCheckBig, r as Spinner, s as modalVariants, v as createLucideIcon, y as motion } from "./index-gvqOpvu8.js";
import { n as healthAPI, r as reportsAPI } from "./services-CBL1BtHA.js";
import { t as GlassCard } from "./GlassCard-BsDuDwxd.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
//#endregion
//#region src/components/ui/Modal.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Modal = ({ isOpen, onClose, title, children, maxWidth = "max-w-lg", showClose = true }) => {
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[1000] flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: overlayVariants,
			initial: "initial",
			animate: "animate",
			exit: "exit",
			onClick: onClose,
			className: "absolute inset-0 bg-slate-950/60 backdrop-blur-md"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			variants: modalVariants,
			initial: "initial",
			animate: "animate",
			exit: "exit",
			className: `w-full ${maxWidth} glass border-white/10 dark:border-slate-800/80 shadow-2xl rounded-3xl overflow-hidden z-50 text-slate-100 flex flex-col`,
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 py-5 border-b border-white/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-bold text-sm bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent",
					children: title
				}), showClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-1.5 rounded-lg border border-white/5 hover:border-white/10 text-slate-400 hover:text-slate-100 transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6 overflow-y-auto max-h-[75vh]",
				children
			})]
		})]
	}) });
};
//#endregion
//#region src/pages/Reports/Reports.jsx
var Reports = () => {
	const [history, setHistory] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [compiling, setCompiling] = (0, import_react.useState)(false);
	const [emailing, setEmailing] = (0, import_react.useState)(false);
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const [recipientEmail, setRecipientEmail] = (0, import_react.useState)("");
	const [selectedReportId, setSelectedReportId] = (0, import_react.useState)(42);
	const { user } = useAuth();
	const toast = useToast();
	const fetchRecords = async () => {
		try {
			setHistory((await healthAPI.getHistory()).data);
		} catch (err) {
			toast.error("Failed to sync generated report archives.", "Sync Failed");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchRecords();
		if (user?.gmail) setRecipientEmail(user.gmail);
	}, [user]);
	const handleCompile = async () => {
		setCompiling(true);
		try {
			const response = await reportsAPI.generateReport();
			toast.success(response.data.message || "Clinical PDF compiled successfully.", "Report Saved");
			fetchRecords();
		} catch (err) {
			toast.error("Failed to compile clinical analytics report.", "Compile Failed");
		} finally {
			setCompiling(false);
		}
	};
	const handleDownload = async (id = 42) => {
		try {
			const response = await reportsAPI.downloadReport(id);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", `Glucose_AI_Report_${id}.pdf`);
			document.body.appendChild(link);
			link.click();
			link.remove();
			toast.success("Clinical PDF download initialized.", "PDF Downloaded");
		} catch (err) {
			toast.error("Failed to fetch report binary stream.", "Download Failed");
		}
	};
	const handleEmailDispatch = async (e) => {
		e.preventDefault();
		if (!recipientEmail) {
			toast.warning("Please input a valid recipient email address.");
			return;
		}
		setEmailing(true);
		try {
			const response = await reportsAPI.sendReport(selectedReportId);
			toast.success(response.data.message || `Clinical PDF emailed to ${recipientEmail}.`, "Email Dispatched");
			setModalOpen(false);
		} catch (err) {
			toast.error("SMTP server dispatch failed. Validate credentials in settings.", "Dispatch Failed");
		} finally {
			setEmailing(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[50vh] flex flex-col items-center justify-center gap-3 select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500 font-bold tracking-wider uppercase",
			children: "Fetching Report Drawer..."
		})]
	});
	const records = [...history].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none text-slate-100 pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent",
						children: "Clinical PDF Drawer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider",
						children: "Export visual reports and dispatch clinical summaries via SMTP"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "primary",
					onClick: handleCompile,
					loading: compiling,
					disabled: records.length === 0,
					className: "w-full sm:w-auto text-xs font-bold py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						size: 14,
						className: "animate-pulse"
					}), " Compile Fresh Report"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-2 flex flex-col gap-4",
					children: records.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-8 text-center flex flex-col items-center justify-center gap-3 border-dashed border-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 20 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold text-slate-200 text-sm",
								children: "No Compiled Reports Available"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-400 text-xs leading-relaxed max-w-sm",
								children: "No health logs are registered. Upload biomarker metrics to compile high-fidelity ReportLab medical PDFs."
							})
						]
					}) : records.map((rec, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "font-bold text-slate-200 text-sm",
										children: [
											"Glucose_AI_Report_",
											rec.record_id || 100 + index,
											".pdf"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `px-2 py-0.5 rounded-full text-[9px] font-bold border ${rec.outcome === 1 ? "bg-rose-500/10 border-rose-500/20 text-rose-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"}`,
										children: rec.outcome === 1 ? "High Risk" : "Low Risk"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-[10px] text-slate-500 font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 12 }),
											" ",
											rec.month
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 12 }),
											" Outcome Logged: ",
											rec.glucose,
											" mg/dL"
										]
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 w-full sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleDownload(rec.record_id || 42),
								className: "flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-300 hover:text-slate-100 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Download"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setSelectedReportId(rec.record_id || 42);
									setModalOpen(true);
								},
								className: "flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-cyan-500/10 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/20 flex items-center justify-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }), " Dispatch"]
							})]
						})]
					}, rec.record_id || index))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5",
						glow: "cyan",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold text-slate-200 mb-2 border-b border-white/5 pb-2",
								children: "Medical PDF Guidelines"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-400 leading-relaxed font-medium",
								children: "Exported medical portfolios compile:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "flex flex-col gap-2 text-[10px] text-slate-400 leading-relaxed font-semibold mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 12,
											className: "text-cyan-400 shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Patient biometric progress matrices" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 12,
											className: "text-cyan-400 shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHAP local quantitative diagnostics" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 12,
											className: "text-cyan-400 shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIME local surrogate criteria rules" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											size: 12,
											className: "text-cyan-400 shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Endocrinologist rules-engine warnings" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						className: "p-5 bg-cyan-500/5 border-cyan-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { size: 16 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 text-[11px] text-slate-400 leading-relaxed font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "font-bold text-slate-200 text-xs",
									children: "Encryption & Compliance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All generated clinical assets use encrypted local paths. PDF dispatch pipelines route summaries securely matching standard security requirements." })]
							})]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				isOpen: modalOpen,
				onClose: () => setModalOpen(false),
				title: "Secure SMTP Dispatch Portal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleEmailDispatch,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-slate-400 leading-relaxed font-medium",
								children: "Confirm recipient email address to route the compiled medical report. PDF will attach as an encrypted file."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Recipient Email Address",
							id: "recipientEmail",
							type: "email",
							placeholder: "name@clinical.com",
							icon: Mail,
							value: recipientEmail,
							onChange: (e) => setRecipientEmail(e.target.value),
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "primary",
							loading: emailing,
							className: "w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 14 }), " Send Clinical Portfolio"]
						})
					]
				})
			})
		]
	});
};
//#endregion
export { Reports as default };
