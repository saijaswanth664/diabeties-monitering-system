import { t as ArrowLeft } from "./arrow-left-DcXstDzT.js";
import { t as Mail } from "./mail-CPFIbHsL.js";
import { t as Send } from "./send-CGPGU9Z0.js";
import { C as require_jsx_runtime, E as useNavigate, O as require_react, i as useToast, j as __toESM, w as Link } from "./index-gvqOpvu8.js";
import { t as authAPI } from "./services-CBL1BtHA.js";
import { t as Button } from "./Button-C9o8X9QU.js";
import { t as FormField } from "./FormField-DEQowidk.js";
//#region src/pages/auth/ForgotPassword.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ForgotPassword = () => {
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const toast = useToast();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!gmail) {
			toast.warning("Please specify your registered Gmail address.");
			return;
		}
		setLoading(true);
		try {
			const response = await authAPI.forgotPassword(gmail);
			toast.success(response.data.message || "Recovery reset OTP code sent.", "Email Verified");
			navigate("/reset-password", { state: { gmail } });
		} catch (err) {
			const errorMsg = err.response?.data?.detail || "No account corresponds to the registered email.";
			toast.error(errorMsg, "Recovery Failed");
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
					children: "Recover Password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 font-semibold",
					children: "Enter email to receive your secure recovery OTP reset code."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Registered Gmail",
					id: "gmail",
					type: "email",
					placeholder: "your.name@gmail.com",
					icon: Mail,
					value: gmail,
					onChange: (e) => setGmail(e.target.value),
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					variant: "primary",
					loading,
					className: "w-full py-3 flex items-center justify-center gap-2 text-xs font-bold mt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 14 }), " Send Recovery Code"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center border-t border-white/5 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					className: "text-[10px] font-extrabold text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 self-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 12 }), " Back to Sign In"]
				})
			})
		]
	});
};
//#endregion
export { ForgotPassword as default };
