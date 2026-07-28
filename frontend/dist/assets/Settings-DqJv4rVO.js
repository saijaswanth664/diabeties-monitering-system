import { t as Mail } from "./mail-CPFIbHsL.js";
import { t as User } from "./user-BCs7QL8y.js";
import { C as require_jsx_runtime, O as require_react, S as useAuth, i as useToast, j as __toESM, v as createLucideIcon, x as useTheme } from "./index-gvqOpvu8.js";
import { t as MOCK_MODE } from "./axios-DwDgploX.js";
import { t as GlassCard } from "./GlassCard-BsDuDwxd.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MailCheck = createLucideIcon("mail-check", [
	["path", {
		d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
		key: "12jkf8"
	}],
	["path", {
		d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
		key: "1ocrg3"
	}],
	["path", {
		d: "m16 19 2 2 4-4",
		key: "1b14m6"
	}]
]);
//#endregion
//#region src/pages/Settings/Settings.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Settings = () => {
	const { user } = useAuth();
	const { isDark, toggle } = useTheme();
	const toast = useToast();
	const [fullName, setFullName] = (0, import_react.useState)(user?.full_name || "Dr. Sarah Jenkins");
	const [gmail, setGmail] = (0, import_react.useState)(user?.gmail || "sarah.jenkins@gmail.com");
	const [smtpServer, setSmtpServer] = (0, import_react.useState)("smtp.gmail.com");
	const [smtpPort, setSmtpPort] = (0, import_react.useState)("587");
	const [smtpUser, setSmtpUser] = (0, import_react.useState)(user?.gmail || "sarah.jenkins@gmail.com");
	const [mockActive, setMockActive] = (0, import_react.useState)(MOCK_MODE.active);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const handleSaveProfile = (e) => {
		e.preventDefault();
		setSaving(true);
		setTimeout(() => {
			setSaving(false);
			toast.success("Clinical settings updated successfully.", "Profile Updated");
		}, 800);
	};
	const handleToggleMock = () => {
		const nextVal = !mockActive;
		MOCK_MODE.active = nextVal;
		setMockActive(nextVal);
		toast.success(nextVal ? "Axios interceptors utilizing local clinical mocks." : "Axios client connecting strictly to FastAPI backend.", nextVal ? "Mock Mode Enabled" : "Live Mode Enabled");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none text-slate-100 pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent",
				children: "System Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider",
				children: "Manage practitioner profiles, visual parameters and server configurations"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-3 gap-6 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 pb-2 border-b border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							size: 16,
							className: "text-cyan-400"
						}), " Practitioner Profile"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveProfile,
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Practitioner Full Name",
								id: "fullName",
								type: "text",
								placeholder: "e.g. Dr. Sarah Jenkins",
								icon: User,
								value: fullName,
								onChange: (e) => setFullName(e.target.value),
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Registered Gmail",
								id: "gmail",
								type: "email",
								placeholder: "yourname@gmail.com",
								icon: Mail,
								value: gmail,
								onChange: (e) => setGmail(e.target.value),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "primary",
							loading: saving,
							className: "w-max text-xs font-bold py-2 px-6 self-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }), " Update Profile"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2 pb-2 border-b border-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, {
							size: 16,
							className: "text-violet-400"
						}), " SMTP Dispatch Configuration"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveProfile,
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "SMTP Server Host",
									id: "smtpServer",
									type: "text",
									placeholder: "smtp.gmail.com",
									value: smtpServer,
									onChange: (e) => setSmtpServer(e.target.value),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "SMTP SSL Port",
									id: "smtpPort",
									type: "text",
									placeholder: "587",
									value: smtpPort,
									onChange: (e) => setSmtpPort(e.target.value),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "SMTP User Account",
									id: "smtpUser",
									type: "text",
									placeholder: "user@gmail.com",
									value: smtpUser,
									onChange: (e) => setSmtpUser(e.target.value),
									required: true
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "primary",
							loading: saving,
							className: "w-max text-xs font-bold py-2 px-6 self-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }), " Save SMTP Credentials"]
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5",
					glow: "cyan",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3 border-b border-white/5 pb-2",
							children: "Visual Preferences"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold border-b border-white/5 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Adaptive Theme Mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-slate-500 font-medium",
									children: "Switch dark / light backgrounds"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								className: "px-3 py-1 rounded-full text-[9px] font-extrabold uppercase border border-cyan-500/10 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95",
								children: isDark ? "Dark Mode" : "Light Mode"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Floating Particles Overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-slate-500 font-medium",
									children: "Toggle background animation count"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-cyan-400 font-black",
								children: "25 Dynamic Blobs"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5",
					glow: "violet",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3 border-b border-white/5 pb-2",
							children: "Server Synchronization"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold border-b border-white/5 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Integrated DB Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-slate-500 font-medium",
									children: "Self-contained SQLite engine"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
								children: "Connected"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 text-[11px] text-slate-300 font-semibold mt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Diagnostic Mock Fallback" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-slate-500 font-medium",
									children: "Permit mock response interception"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleToggleMock,
								className: `px-3 py-1 rounded-full text-[9px] font-extrabold uppercase border transition-all active:scale-95 ${mockActive ? "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500/20" : "bg-slate-800 border-white/5 text-slate-400"}`,
								children: mockActive ? "Active (Mock)" : "Disabled (Live)"
							})]
						})
					]
				})]
			})]
		})]
	});
};
//#endregion
export { Settings as default };
