import { C as require_jsx_runtime, O as require_react, a as buttonTap, y as motion } from "./index-gvqOpvu8.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Button = ({ children, variant = "primary", loading = false, className = "", onClick, type = "button", disabled = false, ...props }) => {
	const baseClasses = {
		primary: "btn-primary",
		glass: "btn-glass",
		danger: "btn-danger",
		secondary: "btn-glass bg-white/5 hover:bg-white/10 text-slate-300 border-white/5"
	};
	const selectedClass = baseClasses[variant] || baseClasses.primary;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		variants: buttonTap,
		whileHover: disabled || loading ? void 0 : "whileHover",
		whileTap: disabled || loading ? void 0 : "whileTap",
		type,
		onClick,
		disabled: disabled || loading,
		className: `${selectedClass} disabled:opacity-50 disabled:pointer-events-none ${className}`,
		...props,
		children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Syncing..." })]
		}) : children
	});
};
//#endregion
export { Button as t };
