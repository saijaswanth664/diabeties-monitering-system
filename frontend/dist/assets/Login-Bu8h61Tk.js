import { t as Lock } from "./lock-DsrMiXGW.js";
import { t as Mail } from "./mail-CPFIbHsL.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, S as useAuth, i as useToast, j as __toESM, v as createLucideIcon, w as Link } from "./index-gvqOpvu8.js";
import { t as authAPI } from "./services-CBL1BtHA.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogIn = createLucideIcon("log-in", [
	["path", {
		d: "m10 17 5-5-5-5",
		key: "1bsop3"
	}],
	["path", {
		d: "M15 12H3",
		key: "6jk70r"
	}],
	["path", {
		d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
		key: "u53s6r"
	}]
]);
//#endregion
//#region src/pages/auth/Login.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Login = () => {
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { login } = useAuth();
	const toast = useToast();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!gmail || !password) {
			toast.warning("Please enter both your registered email and password.");
			return;
		}
		setLoading(true);
		try {
			const response = await authAPI.login(gmail, password);
			login(response.data.access_token, {
				full_name: response.data.full_name,
				gmail: response.data.gmail
			});
			toast.success(`Welcome back, ${response.data.full_name}!`, "Authorization Succeeded");
			navigate("/dashboard");
		} catch (err) {
			if (!err.response || err.code === "ERR_NETWORK") toast.error("Backend server is waking up. Please wait 30-60 seconds and try again.", "Server Starting");
			else if (err.response?.status === 403) {
				toast.error("Account unverified. Redirecting to OTP verification...", "Verification Required");
				navigate("/verify-otp", { state: { gmail } });
			} else {
				const errorMsg = err.response?.data?.detail || "Incorrect password or unverified account. Please try again.";
				toast.error(errorMsg, "Login Failed");
			}
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
					children: "Secure Portal Access"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 font-semibold",
					children: "Authenticate credentials to synchronize patient metrics."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Registered Gmail Address",
						id: "gmail",
						type: "email",
						placeholder: "your.name@gmail.com",
						icon: Mail,
						value: gmail,
						onChange: (e) => setGmail(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Password",
							id: "password",
							type: "password",
							placeholder: "••••••••",
							icon: Lock,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end -mt-3.5 mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/forgot-password",
								className: "text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors",
								children: "Forgot Password?"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "primary",
						loading,
						className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { size: 14 }), " Synchronize Access"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center text-[10px] text-slate-500 border-t border-white/5 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New practitioner? " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					className: "text-cyan-400 font-extrabold hover:text-cyan-300 transition-colors",
					children: "Enroll Account Now"
				})]
			})
		]
	});
};
//#endregion
export { Login as default };
