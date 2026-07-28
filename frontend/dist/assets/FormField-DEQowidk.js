import { C as require_jsx_runtime, O as require_react, j as __toESM, y as motion } from "./index-gvqOpvu8.js";
//#region src/components/FormField.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var FormField = ({ label, id, type = "text", placeholder = "", icon: Icon, error = "", required = false, value, onChange, ...props }) => {
	const [focused, setFocused] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 flex flex-col relative w-full",
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: `text-xs font-semibold mb-1.5 transition-all duration-300 ${focused ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" : "text-slate-400"}`,
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-500",
						children: "*"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center w-full",
				children: [
					Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `absolute left-3.5 pointer-events-none transition-colors duration-300 ${focused ? "text-cyan-400" : "text-slate-500"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id,
						type,
						value,
						onChange,
						placeholder,
						onFocus: () => setFocused(true),
						onBlur: () => setFocused(false),
						className: `w-full bg-slate-900/60 dark:bg-slate-950/40 text-slate-100 rounded-xl py-2.5 transition-all duration-300 outline-none border text-sm ${Icon ? "pl-11 pr-4" : "px-4"} ${error ? "border-rose-500/50 focus:border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.15)]" : focused ? "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.25)] bg-slate-900/80" : "border-white/10 dark:border-slate-800/80 hover:border-white/20"}`,
						...props
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scaleX: 0 },
						animate: { scaleX: focused ? 1 : 0 },
						transition: { duration: .3 },
						className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 origin-center rounded-b-xl"
					})
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-rose-400 font-semibold mt-1 pl-1",
				children: error
			})
		]
	});
};
//#endregion
export { FormField as t };
