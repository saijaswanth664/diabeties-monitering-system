import { t as Lock } from "./lock-DsrMiXGW.js";
import { t as Mail } from "./mail-CPFIbHsL.js";
import { t as User } from "./user-BCs7QL8y.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, i as useToast, j as __toESM, v as createLucideIcon, w as Link } from "./index-gvqOpvu8.js";
import { t as authAPI } from "./services-CBL1BtHA.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserPlus = createLucideIcon("user-plus", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["line", {
		x1: "19",
		x2: "19",
		y1: "8",
		y2: "14",
		key: "1bvyxn"
	}],
	["line", {
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11",
		key: "1shjgl"
	}]
]);
//#endregion
//#region src/pages/auth/Signup.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Signup = () => {
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [smtpFallbackOtp, setSmtpFallbackOtp] = (0, import_react.useState)(null);
	const toast = useToast();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!fullName || !gmail || !password) {
			toast.warning("Please fill in all clinical registration fields.");
			return;
		}
		if (password.length < 6) {
			toast.warning("Password must contain at least 6 characters.");
			return;
		}
		setLoading(true);
		try {
			const response = await authAPI.signup({
				full_name: fullName,
				gmail,
				password
			});
			if (response.data.smtp_warning && response.data.otp_fallback) {
				setSmtpFallbackOtp(response.data.otp_fallback);
				toast.warning("Email delivery failed. Your OTP code is shown below — copy it before proceeding.", "SMTP Not Configured");
			} else toast.success(response.data.message || "OTP issued for Gmail verification.", "Account Enrolled");
			if (!response.data.smtp_warning) navigate("/verify-otp", { state: { gmail } });
		} catch (err) {
			const errorMsg = err.response?.data?.detail || err.code === "ERR_NETWORK" ? "Backend server is starting up. Please wait 30 seconds and try again." : "Account enrollment failed. This email may already be verified.";
			toast.error(errorMsg, "Signup Failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight",
					children: "Practitioner Enrollment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 font-semibold",
					children: "Create an encrypted account to manage diagnostics."
				})]
			}),
			smtpFallbackOtp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-amber-400 font-bold mb-2",
						children: "⚠️ EMAIL NOT SENT — COPY THIS OTP:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-black text-amber-300 tracking-[6px] font-mono",
						children: smtpFallbackOtp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							navigate("/verify-otp", { state: { gmail } });
						},
						className: "mt-3 text-[10px] font-bold text-cyan-400 hover:text-cyan-300 underline transition-colors",
						children: "I copied it → Go to Verification"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Full Clinical Name",
						id: "fullName",
						type: "text",
						placeholder: "Dr. Sarah Jenkins",
						icon: User,
						value: fullName,
						onChange: (e) => setFullName(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Gmail Address",
						id: "gmail",
						type: "email",
						placeholder: "sarah.jenkins@gmail.com",
						icon: Mail,
						value: gmail,
						onChange: (e) => setGmail(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Access Passphrase",
						id: "password",
						type: "password",
						placeholder: "••••••••",
						icon: Lock,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "primary",
						loading,
						className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { size: 14 }), " Register & Generate OTP"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center text-[10px] text-slate-500 border-t border-white/5 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Already enrolled? " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "text-cyan-400 font-extrabold hover:text-cyan-300 transition-colors",
					children: "Portal Sign In"
				})]
			})
		]
	});
};
//#endregion
export { Signup as default };
