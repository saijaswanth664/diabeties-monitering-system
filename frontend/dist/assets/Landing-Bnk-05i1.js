import { C as require_jsx_runtime, E as useNavigate, O as require_react, _ as Activity, h as ChevronRight, l as staggerContainer, n as AnimatedBackground, o as fadeInUp, t as ParticleField, u as staggerItem, v as createLucideIcon, y as motion } from "./index-gvqOpvu8.js";
import { t as GlassCard } from "./GlassCard-BsDuDwxd.js";
import { t as Button } from "./Button-C9o8X9QU.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartColumn = createLucideIcon("chart-column", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cpu = createLucideIcon("cpu", [
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M17 20v2",
		key: "1rnc9c"
	}],
	["path", {
		d: "M17 2v2",
		key: "11trls"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M2 17h2",
		key: "7oei6x"
	}],
	["path", {
		d: "M2 7h2",
		key: "asdhe0"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "M20 17h2",
		key: "1fpfkl"
	}],
	["path", {
		d: "M20 7h2",
		key: "1o8tra"
	}],
	["path", {
		d: "M7 20v2",
		key: "4gnj0m"
	}],
	["path", {
		d: "M7 2v2",
		key: "1i4yhu"
	}],
	["rect", {
		x: "4",
		y: "4",
		width: "16",
		height: "16",
		rx: "2",
		key: "1vbyd7"
	}],
	["rect", {
		x: "8",
		y: "8",
		width: "8",
		height: "8",
		rx: "1",
		key: "z9xiuo"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
require_react();
var import_jsx_runtime = require_jsx_runtime();
var LandingPage = () => {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden text-slate-100 p-4 md:p-6 lg:p-8 select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { count: 25 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "w-full max-w-6xl mx-auto flex items-center justify-between py-4 border-b border-white/5 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shrink-0 glow-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							size: 18,
							className: "text-white animate-pulse"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-sm tracking-wide bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent",
						children: "GLUCOSE AI"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "glass",
					onClick: () => navigate("/login"),
					className: "text-xs font-extrabold px-5 py-2 border-white/10 hover:border-white/20",
					children: "Portal Login"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-24 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerContainer,
					initial: "initial",
					animate: "animate",
					className: "flex-1 flex flex-col gap-6 text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: staggerItem,
							className: "flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 w-max mx-auto lg:mx-0 select-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 14,
								className: "text-cyan-400"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest",
								children: "HIPAA Compliant Security"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							variants: staggerItem,
							className: "text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400",
							children: [
								"Autonomous Clinical ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent heading-glow",
									children: "Diabetes Diagnostics"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: staggerItem,
							className: "text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium",
							children: "A high-fidelity patient monitoring framework leveraging serialized ensemble classifiers, rule recommendation matrices, and mathematical SHAP contribution vectors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: staggerItem,
							className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "primary",
								onClick: () => navigate("/signup"),
								className: "w-full sm:w-auto px-7 py-3 flex items-center justify-center gap-2 text-xs font-bold",
								children: ["Get Started Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "glass",
								onClick: () => navigate("/login"),
								className: "w-full sm:w-auto px-7 py-3 border-white/5 hover:border-white/10 text-xs font-bold",
								children: "Access Demo Portal"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeInUp,
					initial: "initial",
					animate: "animate",
					className: "flex-1 w-full max-w-md relative flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/15 rounded-3xl filter blur-xl -z-10 animate-pulse-glow" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
							className: "p-6 relative overflow-hidden",
							glow: "cyan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
										size: 18,
										className: "animate-spin-slow"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-slate-100 text-sm",
										children: "Ensemble ML Predictor"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-slate-400 text-xs leading-relaxed mt-0.5",
										children: "Dynamically evaluates patients across 4 optimized ML models (Random Forest, SVM, MLP Neural Nets, Logistic Regression) select-syncing optimal weights."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
							className: "p-6 relative overflow-hidden",
							glow: "violet",
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-slate-100 text-sm",
										children: "Explainable XAI Local Modeling"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-slate-400 text-xs leading-relaxed mt-0.5",
										children: "Translates risk scores into absolute mathematical feature impact vectors (SHAP values) and transparent LIME local thresholds."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
							className: "p-6 relative overflow-hidden",
							glow: "emerald",
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-slate-100 text-sm",
										children: "SQL Database Integration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-slate-400 text-xs leading-relaxed mt-0.5",
										children: "Stores historical patient records, comparison matrices, and auto-generated ReportLab visual medical PDFs for clinical dispatch."
									})]
								})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between py-6 border-t border-white/5 z-10 text-[10px] text-slate-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Glucose AI Personal Diabetes Monitoring System. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mt-2 sm:mt-0 font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-slate-400 transition-colors",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-slate-400 transition-colors",
							children: "Terms of Use"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-slate-400 transition-colors",
							children: "Contact Support"
						})
					]
				})]
			})
		]
	});
};
//#endregion
export { LandingPage as default };
