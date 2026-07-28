import { n as KeyRound, t as RefreshCw } from "./refresh-cw-BLIfc1ff.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, T as useLocation, i as useToast, j as __toESM, v as createLucideIcon, w as Link } from "./index-gvqOpvu8.js";
import { t as authAPI } from "./services-CBL1BtHA.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region src/pages/auth/OTPVerify.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var OTPVerify = () => {
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [otp, setOtp] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [resending, setResending] = (0, import_react.useState)(false);
	const toast = useToast();
	const navigate = useNavigate();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		if (location.state?.gmail) setGmail(location.state.gmail);
	}, [location]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!gmail || !otp) {
			toast.warning("Please enter your email and the 6-digit verification code.");
			return;
		}
		if (otp.length !== 6) {
			toast.warning("The verification code must be exactly 6 digits.");
			return;
		}
		setLoading(true);
		try {
			const response = await authAPI.verifyOtp(gmail, otp);
			toast.success(response.data.message || "Gmail verified successfully. Please login.", "Account Verified");
			navigate("/login");
		} catch (err) {
			const errorMsg = err.response?.data?.detail || "Invalid or expired OTP code. Please request a fresh code.";
			toast.error(errorMsg, "Verification Failed");
		} finally {
			setLoading(false);
		}
	};
	const handleResend = async () => {
		if (!gmail) {
			toast.warning("Please specify your registered email first.");
			return;
		}
		setResending(true);
		try {
			const response = await authAPI.sendOtp(gmail);
			toast.success(response.data.message || "A fresh 6-digit OTP has been issued.", "OTP Code Dispatched");
		} catch (err) {
			const errorMsg = err.response?.data?.detail || "Failed to dispatch verification code. Check email format.";
			toast.error(errorMsg, "Resend Failed");
		} finally {
			setResending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight",
					children: "Verify Your Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 font-semibold",
					children: "Enter the 6-digit OTP code sent to your Gmail."
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
						placeholder: "yourname@gmail.com",
						value: gmail,
						onChange: (e) => setGmail(e.target.value),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "6-Digit OTP Code",
						id: "otp",
						type: "text",
						maxLength: 6,
						placeholder: "123456",
						icon: KeyRound,
						value: otp,
						onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						variant: "primary",
						loading,
						className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 14 }), " Verify & Activate Account"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 text-center border-t border-white/5 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleResend,
					disabled: resending,
					className: "text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1.5 self-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						size: 12,
						className: resending ? "animate-spin" : ""
					}), resending ? "Re-issuing Code..." : "Resend Verification Code"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] text-slate-500",
					children: ["Already verified? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-cyan-400 font-extrabold hover:text-cyan-300",
						children: "Sign In"
					})]
				})]
			})
		]
	});
};
//#endregion
export { OTPVerify as default };
