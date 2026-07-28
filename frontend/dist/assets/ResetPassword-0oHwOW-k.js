import { t as ArrowLeft } from "./arrow-left-DcXstDzT.js";
import { n as KeyRound, t as RefreshCw } from "./refresh-cw-BLIfc1ff.js";
import { t as Lock } from "./lock-DsrMiXGW.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, T as useLocation, i as useToast, j as __toESM, w as Link } from "./index-gvqOpvu8.js";
import { t as authAPI } from "./services-CBL1BtHA.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
//#region src/pages/auth/ResetPassword.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ResetPassword = () => {
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const toast = useToast();
	const navigate = useNavigate();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		if (location.state?.gmail) setGmail(location.state.gmail);
	}, [location]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!gmail || !otp || !newPassword) {
			toast.warning("Please complete all credential reset inputs.");
			return;
		}
		if (otp.length !== 6) {
			toast.warning("Verification code must contain exactly 6 digits.");
			return;
		}
		if (newPassword.length < 6) {
			toast.warning("New password must contain at least 6 characters.");
			return;
		}
		setLoading(true);
		try {
			const response = await authAPI.resetPassword(gmail, otp, newPassword);
			toast.success(response.data.message || "Password reset successfully.", "Credentials Restored");
			navigate("/login");
		} catch (err) {
			const errorMsg = err.response?.data?.detail || "Invalid reset code. Check credentials or request another code.";
			toast.error(errorMsg, "Reset Failed");
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
					children: "Reset Credentials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 font-semibold",
					children: "Submit the 6-digit recovery code to authenticate password reset."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Verification Gmail",
						id: "gmail",
						type: "email",
						placeholder: "your.name@gmail.com",
						value: gmail,
						onChange: (e) => setGmail(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "6-Digit Reset Code",
						id: "otp",
						type: "text",
						maxLength: 6,
						placeholder: "123456",
						icon: KeyRound,
						value: otp,
						onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "New Access Password",
						id: "newPassword",
						type: "password",
						placeholder: "••••••••",
						icon: Lock,
						value: newPassword,
						onChange: (e) => setNewPassword(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "primary",
						loading,
						className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 14 }), " Establish New Credentials"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center border-t border-white/5 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					className: "text-[10px] font-extrabold text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 self-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 12 }), " Return to login"]
				})
			})
		]
	});
};
//#endregion
export { ResetPassword as default };
