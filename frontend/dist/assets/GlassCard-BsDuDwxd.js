import { C as require_jsx_runtime, O as require_react, y as motion } from "./index-gvqOpvu8.js";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var GlassCard = ({ children, className = "", hover = true, glow = "", delay = 0, ...props }) => {
	const selectedGlow = glow ? {
		cyan: "glow-cyan border-cyan-500/20",
		violet: "glow-violet border-violet-500/20",
		emerald: "glow-emerald border-emerald-500/20",
		rose: "glow-rose border-rose-500/20"
	}[glow] || "" : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 15,
			filter: "blur(4px)"
		},
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		transition: {
			duration: .5,
			delay,
			ease: [
				.25,
				1,
				.5,
				1
			]
		},
		whileHover: hover ? {
			scale: 1.01,
			backgroundColor: "rgba(255, 255, 255, 0.08)",
			borderColor: "rgba(255, 255, 255, 0.25)"
		} : void 0,
		className: `glass-panel ${selectedGlow} ${className}`,
		...props,
		children
	});
};
//#endregion
export { GlassCard as t };
