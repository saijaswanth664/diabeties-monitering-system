import { n as Calendar, t as Sparkles } from "./sparkles-CeGwG3do.js";
import { t as FileText } from "./file-text-CsYh7lW9.js";
import { n as Flame, t as Heart } from "./heart-DOMDi-fT.js";
import { C as require_jsx_runtime, D as require_react_dom, E as useNavigate, O as require_react, S as useAuth, _ as Activity, i as useToast, j as __toESM, k as __commonJSMin, m as CircleAlert, r as Spinner, v as createLucideIcon } from "./index-gvqOpvu8.js";
import { n as healthAPI, r as reportsAPI } from "./services-CBL1BtHA.js";
import { t as GlassCard } from "./GlassCard-BsDuDwxd.js";
import { $ as combineCategoricalDomain, $t as selectChartLayout, A as isClipDot, At as selectPolarViewBox, B as Text, Bn as isNullish, C as SetPolarGraphicalItem, Ct as rechartsScaleFactory, D as SetTooltipEntrySettings, Dn as useAppDispatch, Dt as pickAxisType, E as SetPolarLegendPayload, En as createSelector, Et as pickAxisId, F as removeRadiusAxis, Fn as adaptEventsOfChild, Ft as defaultPolarAngleAxisProps, G as selectActiveTooltipIndex, Gn as useLegendPortal, Gt as selectChartDataWithIndexesIfNotInPanoramaPosition4, H as arrayTooltipSearcher, Ht as selectChartDataAndAlwaysIgnoreIndexes, I as CartesianLabelListContextProvider, In as Symbols, It as DefaultZIndexes, Jn as svgPropertiesAndEvents, Jt as useAnimationId, Kn as Layer, Kt as degreeToRadian, L as LabelListFromLabelProp, M as addAngleAxis, Mt as selectRadiusAxisRangeWithReversed, N as addRadiusAxis, Nn as resolveDefaultProps, Nt as getAxisTypeBasedOnLayout, O as Shape, On as useAppSelector, Ot as selectAngleAxis, P as removeAngleAxis, Pn as adaptEventHandlers, Pt as defaultPolarRadiusAxisProps, Q as combineAxisTicks, Qn as clsx, Qt as setLegendSize, R as PolarLabelContextProvider, Rn as interpolate, S as SetCartesianGraphicalItem, Sn as isPositiveNumber, St as combineCheckedDomain, T as SetLegendPayload, Tn as selectLegendPayload, U as ZIndexLayer, Un as noop, Ut as selectChartDataSliceIgnoringIndexes, V as Tooltip, Vn as isNumber, Vt as selectStackOffsetType, Wn as roundTemplateLiteral, X as combineAxisDomain, Xn as svgPropertiesNoEvents, Xt as propsAreEqual, Y as combineAppliedValues, Yn as svgPropertiesAndEventsFromUnknown, Yt as JavascriptAnimate, Z as combineAxisDomainWithNiceTicks, Zn as svgPropertiesNoEventsFromUnknown, Zt as setLegendSettings, _ as defaultCartesianAxisProps, _n as getTicksOfAxis, _t as selectRenderableAxisSettings, a as CategoricalChart, an as usePolarChartLayout, at as combineNiceTicks, b as useActiveTooltipDataPoints, bn as isCategoricalAxis, bt as selectUnfilteredCartesianItems, c as ReportMainChartProps, cn as useIsPanorama, ct as selectAllErrorBarSettings, d as updatePolarOptions, dn as getBandSizeOfAxis, dt as selectBaseAxis, en as useChartHeight, et as combineDisplayedData, f as YAxis, g as SetErrorBarContext, gt as selectRealScaleType, h as useNeedsClip, hn as getCoordinatesOfGrid, ht as selectDuplicateDomain, i as CartesianChart, in as useOffsetInternal, it as combineGraphicalItemsSettings, j as getClassNameFromUnknown, jt as selectRadiusAxis, kn as getUniqPayload, kt as selectAngleAxisRangeWithReversed, l as RechartsStoreProvider, lt as selectAxisPropsNeededForCartesianGridTicksGenerator, m as GraphicalItemClipPath, mn as getCateCoordinateOfLine, mt as selectDomainFromUserPreference, n as NORMAL_RANGES, nn as useChartWidth, nt as combineGraphicalItemTicks, o as ReportEventSettings, on as ResponsiveContainer, ot as combineNumericalDomain, p as XAxis, pt as selectDomainDefinition, qn as Surface, qt as polarToCartesian, rn as useMargin, rt as combineGraphicalItemsData, s as ReportChartProps, sn as warn, st as itemAxisPredicate, tn as useChartLayout, tt as combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, u as initialEventSettingsState, ut as selectAxisWithScale, v as getTicks, vn as getTooltipNameProp, w as RegisterGraphicalItemId, wn as useElementOffset, x as usePlotArea, xt as combineConfiguredScale, y as ChartDataContextProvider, yn as getValueByDataKey, yt as selectTicksOfGraphicalItem, z as PolarLabelFromLabelProp } from "./formatters-BJ9-yjC0.js";
import { t as Button } from "./Button-C9o8X9QU.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CirclePlus = createLucideIcon("circle-plus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Minus = createLucideIcon("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingDown = createLucideIcon("trending-down", [["path", {
	d: "M16 17h6v-6",
	key: "t6n2it"
}], ["path", {
	d: "m22 17-8.5-8.5-5 5L2 7",
	key: "x473p"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
//#endregion
//#region src/components/common/StatCard.jsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var StatCard = ({ label, value, unit = "", difference = null, status = "", icon: Icon, glow = "cyan", delay = 0 }) => {
	const isIncrease = difference > 0;
	const isDecrease = difference < 0;
	const getTrendIcon = () => {
		if (isIncrease) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
			size: 14,
			className: "text-rose-400 shrink-0"
		});
		if (isDecrease) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, {
			size: 14,
			className: "text-emerald-400 shrink-0"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
			size: 14,
			className: "text-slate-400 shrink-0"
		});
	};
	const getTrendClass = () => {
		if (status.includes("Risk") || isIncrease && label !== "Fasting Insulin") return "text-rose-400 bg-rose-500/10 border-rose-500/20";
		if (status.includes("Improved") || status.includes("Reduced") || isDecrease) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
		return "text-slate-400 bg-white/5 border-white/5";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		glow,
		delay,
		className: "p-5 flex flex-col justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-bold text-slate-500 tracking-wider uppercase select-none",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-1 mt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-black tracking-tight text-slate-100",
						children: value
					}), unit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-slate-400 font-medium",
						children: unit
					})]
				})]
			}), Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
			})]
		}), status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${getTrendClass()}`,
				children: [getTrendIcon(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: difference !== null && difference !== 0 ? `${difference > 0 ? "+" : ""}${difference}` : status })]
			}), difference !== null && difference !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-slate-500 font-medium truncate",
				children: status
			})]
		})]
	});
};
//#endregion
//#region node_modules/recharts/es6/component/DefaultLegendContent.js
function _extends$11() {
	return _extends$11 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$11.apply(null, arguments);
}
function ownKeys$12(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$12(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$12(Object(t), !0).forEach(function(r) {
			_defineProperty$12(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$12(e, r, t) {
	return (r = _toPropertyKey$12(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$12(t) {
	var i = _toPrimitive$12(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$12(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var SIZE = 32;
var defaultLegendContentDefaultProps = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	layout: "horizontal",
	verticalAlign: "middle",
	labelStyle: {}
};
function getStrokeDasharray$1(input) {
	if (typeof input === "object" && input !== null && "strokeDasharray" in input) return String(input.strokeDasharray);
}
function Icon(_ref) {
	var { data, iconType, inactiveColor } = _ref;
	var halfSize = SIZE / 2;
	var sixthSize = SIZE / 6;
	var thirdSize = SIZE / 3;
	var color = data.inactive ? inactiveColor : data.color;
	var preferredIcon = iconType !== null && iconType !== void 0 ? iconType : data.type;
	if (preferredIcon === "none") return null;
	if (preferredIcon === "plainline") return /* @__PURE__ */ import_react.createElement("line", {
		strokeWidth: 4,
		fill: "none",
		stroke: color,
		strokeDasharray: getStrokeDasharray$1(data.payload),
		x1: 0,
		y1: halfSize,
		x2: SIZE,
		y2: halfSize,
		className: "recharts-legend-icon"
	});
	if (preferredIcon === "line") return /* @__PURE__ */ import_react.createElement("path", {
		strokeWidth: 4,
		fill: "none",
		stroke: color,
		d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
		className: "recharts-legend-icon"
	});
	if (preferredIcon === "rect") return /* @__PURE__ */ import_react.createElement("path", {
		stroke: "none",
		fill: color,
		d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
		className: "recharts-legend-icon"
	});
	if (/* @__PURE__ */ import_react.isValidElement(data.legendIcon)) {
		var iconProps = _objectSpread$12({}, data);
		delete iconProps.legendIcon;
		return /* @__PURE__ */ import_react.cloneElement(data.legendIcon, iconProps);
	}
	return /* @__PURE__ */ import_react.createElement(Symbols, {
		fill: color,
		cx: halfSize,
		cy: halfSize,
		size: SIZE,
		sizeType: "diameter",
		type: preferredIcon
	});
}
function Items(props) {
	var { payload, iconSize, layout, formatter, inactiveColor, iconType, labelStyle } = props;
	var viewBox = {
		x: 0,
		y: 0,
		width: SIZE,
		height: SIZE
	};
	var itemStyle = {
		display: layout === "horizontal" ? "inline-block" : "block",
		marginRight: 10
	};
	var svgStyle = {
		display: "inline-block",
		verticalAlign: "middle",
		marginRight: 4
	};
	return payload.map((entry, i) => {
		var finalFormatter = entry.formatter || formatter;
		var className = clsx({
			"recharts-legend-item": true,
			["legend-item-".concat(i)]: true,
			inactive: entry.inactive
		});
		if (entry.type === "none") return null;
		var finalLabelStyle = typeof labelStyle === "object" ? _objectSpread$12({}, labelStyle) : {};
		finalLabelStyle.color = entry.inactive ? inactiveColor : finalLabelStyle.color || entry.color;
		var finalValue = finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value;
		return /* @__PURE__ */ import_react.createElement("li", _extends$11({
			className,
			style: itemStyle,
			key: "legend-item-".concat(i)
		}, adaptEventsOfChild(props, entry, i)), /* @__PURE__ */ import_react.createElement(Surface, {
			width: iconSize,
			height: iconSize,
			viewBox,
			style: svgStyle,
			"aria-label": "".concat(entry.value, " legend icon")
		}, /* @__PURE__ */ import_react.createElement(Icon, {
			data: entry,
			iconType,
			inactiveColor
		})), /* @__PURE__ */ import_react.createElement("span", {
			className: "recharts-legend-item-text",
			style: finalLabelStyle
		}, finalValue));
	});
}
/**
* This component is by default rendered inside the {@link Legend} component. You would not use it directly.
*
* You can use this component to customize the content of the legend,
* or you can provide your own completely independent content.
*/
var DefaultLegendContent = (outsideProps) => {
	var props = resolveDefaultProps(outsideProps, defaultLegendContentDefaultProps);
	var { payload, layout, align } = props;
	if (!payload || !payload.length) return null;
	var finalStyle = {
		padding: 0,
		margin: 0,
		textAlign: layout === "horizontal" ? align : "left"
	};
	return /* @__PURE__ */ import_react.createElement("ul", {
		className: "recharts-default-legend",
		style: finalStyle
	}, /* @__PURE__ */ import_react.createElement(Items, _extends$11({}, props, { payload })));
};
//#endregion
//#region node_modules/recharts/es6/context/legendPayloadContext.js
/**
* Use this hook in Legend, or anywhere else where you want to read the current Legend items.
* @return all Legend items ready to be rendered
*/
function useLegendPayload() {
	return useAppSelector(selectLegendPayload);
}
//#endregion
//#region node_modules/recharts/es6/component/Legend.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var _excluded$9 = ["contextPayload"];
function _extends$10() {
	return _extends$10 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$10.apply(null, arguments);
}
function ownKeys$11(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$11(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$11(Object(t), !0).forEach(function(r) {
			_defineProperty$11(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$11(e, r, t) {
	return (r = _toPropertyKey$11(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$11(t) {
	var i = _toPrimitive$11(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$11(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$9(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$9(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$9(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function defaultUniqBy(entry) {
	return entry.value;
}
function LegendContent(props) {
	var { contextPayload } = props, otherProps = _objectWithoutProperties$9(props, _excluded$9);
	var finalPayload = getUniqPayload(contextPayload, props.payloadUniqBy, defaultUniqBy);
	var contentProps = _objectSpread$11(_objectSpread$11({}, otherProps), {}, { payload: finalPayload });
	if (/* @__PURE__ */ import_react.isValidElement(props.content)) return /* @__PURE__ */ import_react.cloneElement(props.content, contentProps);
	if (typeof props.content === "function") return /* @__PURE__ */ import_react.createElement(props.content, contentProps);
	return /* @__PURE__ */ import_react.createElement(DefaultLegendContent, contentProps);
}
function getDefaultPosition(style, props, margin, chartWidth, chartHeight, box) {
	var { layout, align, verticalAlign } = props;
	var hPos, vPos;
	if (!style || (style.left === void 0 || style.left === null) && (style.right === void 0 || style.right === null)) if (align === "center" && layout === "vertical") hPos = { left: ((chartWidth || 0) - box.width) / 2 };
	else hPos = align === "right" ? { right: margin && margin.right || 0 } : { left: margin && margin.left || 0 };
	if (!style || (style.top === void 0 || style.top === null) && (style.bottom === void 0 || style.bottom === null)) if (verticalAlign === "middle") vPos = { top: ((chartHeight || 0) - box.height) / 2 };
	else vPos = verticalAlign === "bottom" ? { bottom: margin && margin.bottom || 0 } : { top: margin && margin.top || 0 };
	return _objectSpread$11(_objectSpread$11({}, hPos), vPos);
}
function LegendSettingsDispatcher(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(setLegendSettings(props));
	}, [dispatch, props]);
	return null;
}
function LegendSizeDispatcher(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(setLegendSize(props));
		return () => {
			dispatch(setLegendSize({
				width: 0,
				height: 0
			}));
		};
	}, [dispatch, props]);
	return null;
}
function getWidthOrHeight(layout, height, width, maxWidth) {
	if (layout === "vertical" && height != null) return { height };
	if (layout === "horizontal") return { width: width || maxWidth };
	return null;
}
var legendDefaultProps = {
	align: "center",
	iconSize: 14,
	inactiveColor: "#ccc",
	itemSorter: "value",
	layout: "horizontal",
	verticalAlign: "bottom"
};
/**
* @consumes CartesianChartContext
* @consumes PolarChartContext
*/
function LegendImpl(outsideProps) {
	var props = resolveDefaultProps(outsideProps, legendDefaultProps);
	var contextPayload = useLegendPayload();
	var legendPortalFromContext = useLegendPortal();
	var margin = useMargin();
	var { width: widthFromProps, height: heightFromProps, wrapperStyle, portal: portalFromProps } = props;
	var [lastBoundingBox, updateBoundingBox] = useElementOffset([contextPayload]);
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	if (chartWidth == null || chartHeight == null) return null;
	var maxWidth = chartWidth - ((margin === null || margin === void 0 ? void 0 : margin.left) || 0) - ((margin === null || margin === void 0 ? void 0 : margin.right) || 0);
	var widthOrHeight = getWidthOrHeight(props.layout, heightFromProps, widthFromProps, maxWidth);
	var outerStyle = portalFromProps ? wrapperStyle : _objectSpread$11(_objectSpread$11({
		position: "absolute",
		width: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.width) || widthFromProps || "auto",
		height: (widthOrHeight === null || widthOrHeight === void 0 ? void 0 : widthOrHeight.height) || heightFromProps || "auto"
	}, getDefaultPosition(wrapperStyle, props, margin, chartWidth, chartHeight, lastBoundingBox)), wrapperStyle);
	var legendPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : legendPortalFromContext;
	if (legendPortal == null || contextPayload == null) return null;
	return /* @__PURE__ */ (0, import_react_dom.createPortal)(/* @__PURE__ */ import_react.createElement("div", {
		className: "recharts-legend-wrapper",
		style: outerStyle,
		ref: updateBoundingBox
	}, /* @__PURE__ */ import_react.createElement(LegendSettingsDispatcher, {
		layout: props.layout,
		align: props.align,
		verticalAlign: props.verticalAlign,
		itemSorter: props.itemSorter
	}), !portalFromProps && /* @__PURE__ */ import_react.createElement(LegendSizeDispatcher, {
		width: lastBoundingBox.width,
		height: lastBoundingBox.height
	}), /* @__PURE__ */ import_react.createElement(LegendContent, _extends$10({}, props, widthOrHeight, {
		margin,
		chartWidth,
		chartHeight,
		contextPayload
	}))), legendPortal);
}
var Legend = /* @__PURE__ */ import_react.memo(LegendImpl, propsAreEqual);
Legend.displayName = "Legend";
//#endregion
//#region node_modules/recharts/es6/shape/Polygon.js
/**
* @fileOverview Polygon
*/
var _excluded$8 = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
];
var _templateObject;
function _extends$9() {
	return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$9.apply(null, arguments);
}
function _objectWithoutProperties$8(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$8(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$8(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var isValidatePoint = (point) => {
	return point != null && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function getParsedPoints() {
	var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	var segmentPoints = [[]];
	points.forEach((entry) => {
		var lastLink = segmentPoints[segmentPoints.length - 1];
		if (isValidatePoint(entry)) {
			if (lastLink) lastLink.push(entry);
		} else if (lastLink && lastLink.length > 0) segmentPoints.push([]);
	});
	var firstPoint = points[0];
	var lastLink = segmentPoints[segmentPoints.length - 1];
	if (isValidatePoint(firstPoint) && lastLink) lastLink.push(firstPoint);
	var finalLink = segmentPoints[segmentPoints.length - 1];
	if (finalLink && finalLink.length <= 0) segmentPoints = segmentPoints.slice(0, -1);
	return segmentPoints;
};
var getSinglePolygonPath = (points, connectNulls) => {
	var segmentPoints = getParsedPoints(points);
	if (connectNulls) segmentPoints = [segmentPoints.reduce((res, segPoints) => {
		return [...res, ...segPoints];
	}, [])];
	var polygonPath = segmentPoints.map((segPoints) => {
		return segPoints.reduce((path, point, index) => {
			return roundTemplateLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral([
				"",
				"",
				"",
				",",
				""
			])), path, index === 0 ? "M" : "L", point.x, point.y);
		}, "");
	}).join("");
	return segmentPoints.length === 1 ? "".concat(polygonPath, "Z") : polygonPath;
};
var getRanglePath = (points, baseLinePoints, connectNulls) => {
	var outerPath = getSinglePolygonPath(points, connectNulls);
	return "".concat(outerPath.slice(-1) === "Z" ? outerPath.slice(0, -1) : outerPath, "L").concat(getSinglePolygonPath(Array.from(baseLinePoints).reverse(), connectNulls).slice(1));
};
var Polygon = (props) => {
	var { points, className, baseLinePoints, connectNulls } = props, others = _objectWithoutProperties$8(props, _excluded$8);
	if (!points || !points.length) return null;
	var layerClass = clsx("recharts-polygon", className);
	if (baseLinePoints && baseLinePoints.length) {
		var hasStroke = others.stroke && others.stroke !== "none";
		var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
		return /* @__PURE__ */ import_react.createElement("g", { className: layerClass }, /* @__PURE__ */ import_react.createElement("path", _extends$9({}, svgPropertiesAndEvents(others), {
			fill: rangePath.slice(-1) === "Z" ? others.fill : "none",
			stroke: "none",
			d: rangePath
		})), hasStroke ? /* @__PURE__ */ import_react.createElement("path", _extends$9({}, svgPropertiesAndEvents(others), {
			fill: "none",
			d: getSinglePolygonPath(points, connectNulls)
		})) : null, hasStroke ? /* @__PURE__ */ import_react.createElement("path", _extends$9({}, svgPropertiesAndEvents(others), {
			fill: "none",
			d: getSinglePolygonPath(baseLinePoints, connectNulls)
		})) : null);
	}
	var singlePath = getSinglePolygonPath(points, connectNulls);
	return /* @__PURE__ */ import_react.createElement("path", _extends$9({}, svgPropertiesAndEvents(others), {
		fill: singlePath.slice(-1) === "Z" ? others.fill : "none",
		className: layerClass,
		d: singlePath
	}));
};
//#endregion
//#region node_modules/recharts/es6/shape/Dot.js
function _extends$8() {
	return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$8.apply(null, arguments);
}
/**
* Renders a dot in the chart.
*
* This component accepts X and Y coordinates in pixels.
* If you need to position the rectangle based on your chart's data,
* consider using the {@link ReferenceDot} component instead.
*
* @param props
* @constructor
*/
var Dot = (props) => {
	var { cx, cy, r, className } = props;
	var layerClass = clsx("recharts-dot", className);
	if (isNumber(cx) && isNumber(cy) && isNumber(r)) return /* @__PURE__ */ import_react.createElement("circle", _extends$8({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
		className: layerClass,
		cx,
		cy,
		r
	}));
	return null;
};
//#endregion
//#region node_modules/recharts/es6/state/selectors/polarSelectors.js
var selectUnfilteredPolarItems = (state) => state.graphicalItems.polarItems;
var selectPolarItemsSettings = createSelector([
	selectUnfilteredPolarItems,
	selectBaseAxis,
	createSelector([pickAxisType, pickAxisId], itemAxisPredicate)
], combineGraphicalItemsSettings);
var selectPolarDisplayedData = createSelector([createSelector([selectPolarItemsSettings], combineGraphicalItemsData), selectChartDataAndAlwaysIgnoreIndexes], combineDisplayedData);
var selectPolarAppliedValues = createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], combineAppliedValues);
createSelector([
	selectPolarDisplayedData,
	selectBaseAxis,
	selectPolarItemsSettings
], (data, axisSettings, items) => {
	if (items.length > 0) return data.flatMap((entry) => {
		return items.flatMap((item) => {
			var _axisSettings$dataKey;
			return {
				value: getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey),
				errorDomain: []
			};
		});
	}).filter(Boolean);
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({
		value: getValueByDataKey(item, axisSettings.dataKey),
		errorDomain: []
	}));
	return data.map((entry) => ({
		value: entry,
		errorDomain: []
	}));
});
var unsupportedInPolarChart = () => void 0;
var selectPolarAxisDomain = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectPolarDisplayedData,
	selectPolarAppliedValues,
	selectStackOffsetType,
	pickAxisType,
	createSelector([
		selectBaseAxis,
		selectDomainDefinition,
		selectDomainFromUserPreference,
		unsupportedInPolarChart,
		createSelector([
			selectPolarDisplayedData,
			selectBaseAxis,
			selectPolarItemsSettings,
			selectAllErrorBarSettings,
			pickAxisType,
			selectChartDataSliceIgnoringIndexes
		], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues),
		unsupportedInPolarChart,
		selectChartLayout,
		pickAxisType
	], combineNumericalDomain)
], combineAxisDomain);
var selectPolarNiceTicks = createSelector([
	selectPolarAxisDomain,
	selectRenderableAxisSettings,
	selectRealScaleType
], combineNiceTicks);
var selectPolarAxisCheckedDomain = createSelector([selectRealScaleType, createSelector([
	selectBaseAxis,
	selectPolarAxisDomain,
	selectPolarNiceTicks,
	pickAxisType
], combineAxisDomainWithNiceTicks)], combineCheckedDomain);
//#endregion
//#region node_modules/recharts/es6/state/selectors/polarScaleSelectors.js
var selectPolarAxis = (state, axisType, axisId) => {
	switch (axisType) {
		case "angleAxis": return selectAngleAxis(state, axisId);
		case "radiusAxis": return selectRadiusAxis(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectPolarAxisRangeWithReversed = (state, axisType, axisId) => {
	switch (axisType) {
		case "angleAxis": return selectAngleAxisRangeWithReversed(state, axisId);
		case "radiusAxis": return selectRadiusAxisRangeWithReversed(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectPolarAxisScale = createSelector([createSelector([
	selectPolarAxis,
	selectRealScaleType,
	selectPolarAxisCheckedDomain,
	selectPolarAxisRangeWithReversed
], combineConfiguredScale)], rechartsScaleFactory);
var selectPolarCategoricalDomain = createSelector([
	selectChartLayout,
	selectPolarAppliedValues,
	selectRenderableAxisSettings,
	pickAxisType
], combineCategoricalDomain);
var selectPolarAxisTicks = createSelector([
	selectChartLayout,
	selectPolarAxis,
	selectRealScaleType,
	selectPolarAxisScale,
	selectPolarNiceTicks,
	selectPolarAxisRangeWithReversed,
	selectDuplicateDomain,
	selectPolarCategoricalDomain,
	pickAxisType
], combineAxisTicks);
var selectPolarAngleAxisTicks = createSelector([selectPolarAxisTicks], (ticks) => {
	if (!ticks) return;
	var uniqueTicksMap = /* @__PURE__ */ new Map();
	ticks.forEach((tick) => {
		var normalizedCoordinate = (tick.coordinate + 360) % 360;
		if (!uniqueTicksMap.has(normalizedCoordinate)) uniqueTicksMap.set(normalizedCoordinate, tick);
	});
	return Array.from(uniqueTicksMap.values());
});
createSelector([
	selectChartLayout,
	selectPolarAxis,
	selectPolarAxisScale,
	selectPolarAxisRangeWithReversed,
	selectDuplicateDomain,
	selectPolarCategoricalDomain,
	pickAxisType
], combineGraphicalItemTicks);
//#endregion
//#region node_modules/recharts/es6/state/selectors/polarGridSelectors.js
var selectAngleAxisTicks$1 = (state, anglexisId) => selectPolarAxisTicks(state, "angleAxis", anglexisId, false);
var selectPolarGridAngles = createSelector([selectAngleAxisTicks$1], (ticks) => {
	if (!ticks) return;
	return ticks.map((tick) => tick.coordinate);
});
var selectRadiusAxisTicks$1 = (state, radiusAxisId) => selectPolarAxisTicks(state, "radiusAxis", radiusAxisId, false);
var selectPolarGridRadii = createSelector([selectRadiusAxisTicks$1], (ticks) => {
	if (!ticks) return;
	return ticks.map((tick) => tick.coordinate);
});
//#endregion
//#region node_modules/recharts/es6/polar/PolarGrid.js
var _excluded$7 = [
	"gridType",
	"radialLines",
	"angleAxisId",
	"radiusAxisId",
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"polarAngles",
	"polarRadius",
	"zIndex"
];
function _objectWithoutProperties$7(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$7(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$7(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends$7() {
	return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$7.apply(null, arguments);
}
function ownKeys$10(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$10(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$10(Object(t), !0).forEach(function(r) {
			_defineProperty$10(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$10(e, r, t) {
	return (r = _toPropertyKey$10(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$10(t) {
	var i = _toPrimitive$10(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$10(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var getPolygonPath = (radius, cx, cy, polarAngles) => {
	var path = "";
	polarAngles.forEach((angle, i) => {
		var point = polarToCartesian(cx, cy, radius, angle);
		if (i) path += "L ".concat(point.x, ",").concat(point.y);
		else path += "M ".concat(point.x, ",").concat(point.y);
	});
	path += "Z";
	return path;
};
var PolarAngles = (props) => {
	var { cx, cy, innerRadius, outerRadius, polarAngles, radialLines } = props;
	if (!polarAngles || !polarAngles.length || !radialLines) return null;
	var polarAnglesProps = _objectSpread$10({}, svgPropertiesNoEvents(props));
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-polar-grid-angle" }, polarAngles.map((entry) => {
		var start = polarToCartesian(cx, cy, innerRadius, entry);
		var end = polarToCartesian(cx, cy, outerRadius, entry);
		return /* @__PURE__ */ import_react.createElement("line", _extends$7({ key: "line-".concat(entry) }, polarAnglesProps, {
			x1: start.x,
			y1: start.y,
			x2: end.x,
			y2: end.y
		}));
	}));
};
var ConcentricCircle = (props) => {
	var { cx, cy, radius } = props;
	var concentricCircleProps = _objectSpread$10({}, svgPropertiesNoEvents(props));
	return /* @__PURE__ */ import_react.createElement("circle", _extends$7({}, concentricCircleProps, {
		className: clsx("recharts-polar-grid-concentric-circle", props.className),
		cx,
		cy,
		r: radius
	}));
};
var ConcentricPolygon = (props) => {
	var { radius } = props;
	var concentricPolygonProps = _objectSpread$10({}, svgPropertiesNoEvents(props));
	return /* @__PURE__ */ import_react.createElement("path", _extends$7({}, concentricPolygonProps, {
		className: clsx("recharts-polar-grid-concentric-polygon", props.className),
		d: getPolygonPath(radius, props.cx, props.cy, props.polarAngles)
	}));
};
var ConcentricGridPath = (props) => {
	var { polarRadius, gridType } = props;
	if (!polarRadius || !polarRadius.length) return null;
	var maxPolarRadius = Math.max(...polarRadius);
	var renderBackground = props.fill && props.fill !== "none";
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-polar-grid-concentric" }, renderBackground && gridType === "circle" && /* @__PURE__ */ import_react.createElement(ConcentricCircle, _extends$7({}, props, { radius: maxPolarRadius })), renderBackground && gridType !== "circle" && /* @__PURE__ */ import_react.createElement(ConcentricPolygon, _extends$7({}, props, { radius: maxPolarRadius })), polarRadius.map((entry, i) => {
		var key = i;
		if (gridType === "circle") return /* @__PURE__ */ import_react.createElement(ConcentricCircle, _extends$7({ key }, props, {
			fill: "none",
			radius: entry
		}));
		return /* @__PURE__ */ import_react.createElement(ConcentricPolygon, _extends$7({ key }, props, {
			fill: "none",
			radius: entry
		}));
	}));
};
var defaultPolarGridProps = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: true,
	zIndex: DefaultZIndexes.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
};
/**
* @consumes PolarViewBoxContext
*/
var PolarGrid = (outsideProps) => {
	var _ref, _polarViewBox$cx, _ref2, _polarViewBox$cy, _ref3, _polarViewBox$innerRa, _ref4, _polarViewBox$outerRa;
	var _resolveDefaultProps = resolveDefaultProps(outsideProps, defaultPolarGridProps), { gridType, radialLines, angleAxisId, radiusAxisId, cx: cxFromOutside, cy: cyFromOutside, innerRadius: innerRadiusFromOutside, outerRadius: outerRadiusFromOutside, polarAngles: polarAnglesInput, polarRadius: polarRadiusInput, zIndex } = _resolveDefaultProps, inputs = _objectWithoutProperties$7(_resolveDefaultProps, _excluded$7);
	var polarViewBox = useAppSelector(selectPolarViewBox);
	var polarAnglesFromRedux = useAppSelector((state) => selectPolarGridAngles(state, angleAxisId));
	var polarRadiiFromRedux = useAppSelector((state) => selectPolarGridRadii(state, radiusAxisId));
	var polarAngles = Array.isArray(polarAnglesInput) ? polarAnglesInput : polarAnglesFromRedux;
	var polarRadius = Array.isArray(polarRadiusInput) ? polarRadiusInput : polarRadiiFromRedux;
	if (polarAngles == null || polarRadius == null) return null;
	var props = _objectSpread$10({
		cx: (_ref = (_polarViewBox$cx = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.cx) !== null && _polarViewBox$cx !== void 0 ? _polarViewBox$cx : cxFromOutside) !== null && _ref !== void 0 ? _ref : 0,
		cy: (_ref2 = (_polarViewBox$cy = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.cy) !== null && _polarViewBox$cy !== void 0 ? _polarViewBox$cy : cyFromOutside) !== null && _ref2 !== void 0 ? _ref2 : 0,
		innerRadius: (_ref3 = (_polarViewBox$innerRa = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.innerRadius) !== null && _polarViewBox$innerRa !== void 0 ? _polarViewBox$innerRa : innerRadiusFromOutside) !== null && _ref3 !== void 0 ? _ref3 : 0,
		outerRadius: (_ref4 = (_polarViewBox$outerRa = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.outerRadius) !== null && _polarViewBox$outerRa !== void 0 ? _polarViewBox$outerRa : outerRadiusFromOutside) !== null && _ref4 !== void 0 ? _ref4 : 0,
		polarAngles,
		polarRadius,
		zIndex
	}, inputs);
	var { outerRadius } = props;
	if (outerRadius <= 0) return null;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement("g", { className: "recharts-polar-grid" }, /* @__PURE__ */ import_react.createElement(ConcentricGridPath, _extends$7({
		gridType,
		radialLines
	}, props, {
		polarAngles,
		polarRadius
	})), /* @__PURE__ */ import_react.createElement(PolarAngles, _extends$7({
		gridType,
		radialLines
	}, props, {
		polarAngles,
		polarRadius
	}))));
};
PolarGrid.displayName = "PolarGrid";
//#endregion
//#region node_modules/es-toolkit/dist/array/maxBy.js
var require_maxBy$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Finds the element in an array that has the maximum value when applying
	* the `getValue` function to each element.
	*
	* @template T - The type of elements in the array.
	* @param {T[]} items The array of elements to search.
	* @param {(element: T, index: number, array: readonly T[]) => number} getValue A function that selects a numeric value from each element.
	* @returns {T | undefined} The element with the maximum value as determined by the `getValue` function,
	* or `undefined` if the array is empty.
	* @example
	* maxBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // Returns: { a: 3 }
	* maxBy([], x => x.a); // Returns: undefined
	* maxBy(
	*   [
	*     { name: 'john', age: 30 },
	*     { name: 'jane', age: 28 },
	*     { name: 'joe', age: 26 },
	*   ],
	*   x => x.age
	* ); // Returns: { name: 'john', age: 30 }
	*/
	function maxBy(items, getValue) {
		if (items.length === 0) return;
		let maxElement = items[0];
		let max = getValue(maxElement, 0, items);
		for (let i = 1; i < items.length; i++) {
			const element = items[i];
			const value = getValue(element, i, items);
			if (value > max) {
				max = value;
				maxElement = element;
			}
		}
		return maxElement;
	}
	exports.maxBy = maxBy;
}));
//#endregion
//#region node_modules/es-toolkit/dist/compat/math/maxBy.js
var require_maxBy$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var require_maxBy$1 = require_maxBy$3();
	var require_identity = require_identity();
	var require_iteratee = require_iteratee();
	/**
	* Finds the element in an array that has the maximum value when applying
	* the `iteratee` to each element.
	*
	* @template T - The type of elements in the array.
	* @param {ArrayLike<T> | null | undefined} items The array of elements to search.
	* @param {ValueIteratee<T>} iteratee
	* The criteria used to determine the maximum value.
	*  - If a **function** is provided, it extracts a numeric value from each element.
	*  - If a **string** is provided, it is treated as a key to extract values from the objects.
	*  - If a **[key, value]** pair is provided, it matches elements with the specified key-value pair.
	*  - If an **object** is provided, it matches elements that contain the specified properties.
	* @returns {T | undefined} The element with the maximum value as determined by the `iteratee`.
	* @example
	* maxBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // Returns: { a: 3 }
	* maxBy([], x => x.a); // Returns: undefined
	* maxBy(
	*   [
	*     { name: 'john', age: 30 },
	*     { name: 'jane', age: 28 },
	*     { name: 'joe', age: 26 },
	*   ],
	*   x => x.age
	* ); // Returns: { name: 'john', age: 30 }
	* maxBy([{ a: 1 }, { a: 2 }], 'a'); // Returns: { a: 2 }
	* maxBy([{ a: 1 }, { a: 2 }], ['a', 1]); // Returns: { a: 1 }
	* maxBy([{ a: 1 }, { a: 2 }], { a: 1 }); // Returns: { a: 1 }
	*/
	function maxBy(items, iteratee$1) {
		if (items == null) return;
		return require_maxBy$1.maxBy(Array.from(items), require_iteratee.iteratee(iteratee$1 ?? require_identity.identity));
	}
	exports.maxBy = maxBy;
}));
//#endregion
//#region node_modules/es-toolkit/compat/maxBy.js
var require_maxBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_maxBy$2().maxBy;
}));
//#endregion
//#region node_modules/es-toolkit/dist/array/minBy.js
var require_minBy$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Finds the element in an array that has the minimum value when applying
	* the `getValue` function to each element.
	*
	* @template T - The type of elements in the array.
	* @param {T[]} items The array of elements to search.
	* @param {(element: T, index: number, array: readonly T[]) => number} getValue A function that selects a numeric value from each element.
	* @returns {T | undefined} The element with the minimum value as determined by the `getValue` function,
	* or `undefined` if the array is empty.
	* @example
	* minBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // Returns: { a: 1 }
	* minBy([], x => x.a); // Returns: undefined
	* minBy(
	*   [
	*     { name: 'john', age: 30 },
	*     { name: 'jane', age: 28 },
	*     { name: 'joe', age: 26 },
	*   ],
	*   x => x.age
	* ); // Returns: { name: 'joe', age: 26 }
	*/
	function minBy(items, getValue) {
		if (items.length === 0) return;
		let minElement = items[0];
		let min = getValue(minElement, 0, items);
		for (let i = 1; i < items.length; i++) {
			const element = items[i];
			const value = getValue(element, i, items);
			if (value < min) {
				min = value;
				minElement = element;
			}
		}
		return minElement;
	}
	exports.minBy = minBy;
}));
//#endregion
//#region node_modules/es-toolkit/dist/compat/math/minBy.js
var require_minBy$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var require_minBy$1 = require_minBy$3();
	var require_identity = require_identity();
	var require_iteratee = require_iteratee();
	/**
	* Finds the element in an array that has the minimum value when applying
	* the `iteratee` to each element.
	*
	* @template T - The type of elements in the array.
	* @param {T[]} items The array of elements to search.
	* @param {((element: T) => number) | keyof T | [keyof T, unknown] | Partial<T>} iteratee
	* The criteria used to determine the minimum value.
	*  - If a **function** is provided, it extracts a numeric value from each element.
	*  - If a **string** is provided, it is treated as a key to extract values from the objects.
	*  - If a **[key, value]** pair is provided, it matches elements with the specified key-value pair.
	*  - If an **object** is provided, it matches elements that contain the specified properties.
	* @returns {T | undefined} The element with the minimum value as determined by the `iteratee`.
	* @example
	* minBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // Returns: { a: 1 }
	* minBy([], x => x.a); // Returns: undefined
	* minBy(
	*   [
	*     { name: 'john', age: 30 },
	*     { name: 'jane', age: 28 },
	*     { name: 'joe', age: 26 },
	*   ],
	*   x => x.age
	* ); // Returns: { name: 'joe', age: 26 }
	* minBy([{ a: 1 }, { a: 2 }], 'a'); // Returns: { a: 1 }
	* minBy([{ a: 1 }, { a: 2 }], ['a', 1]); // Returns: { a: 2 }
	* minBy([{ a: 1 }, { a: 2 }], { a: 1 }); // Returns: { a: 2 }
	*/
	function minBy(items, iteratee$1) {
		if (items == null) return;
		return require_minBy$1.minBy(Array.from(items), require_iteratee.iteratee(iteratee$1 ?? require_identity.identity));
	}
	exports.minBy = minBy;
}));
//#endregion
//#region node_modules/es-toolkit/compat/minBy.js
var require_minBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_minBy$2().minBy;
}));
//#endregion
//#region node_modules/recharts/es6/polar/PolarRadiusAxis.js
var import_maxBy = /* @__PURE__ */ __toESM(require_maxBy());
var import_minBy = /* @__PURE__ */ __toESM(require_minBy());
var _excluded$6 = ["type"], _excluded2$3 = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], _excluded3$2 = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function _extends$6() {
	return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$6.apply(null, arguments);
}
function ownKeys$9(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$9(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$9(Object(t), !0).forEach(function(r) {
			_defineProperty$9(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$9(e, r, t) {
	return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
	var i = _toPrimitive$9(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$9(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$6(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$6(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$6(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var AXIS_TYPE$1 = "radiusAxis";
function SetRadiusAxisSettings(props) {
	var dispatch = useAppDispatch();
	var layout = usePolarChartLayout();
	var settings = (0, import_react.useMemo)(() => {
		var { type: typeFromProps } = props, rest = _objectWithoutProperties$6(props, _excluded$6);
		var evaluatedType = getAxisTypeBasedOnLayout(layout, "radiusAxis", typeFromProps);
		if (evaluatedType == null) return;
		return _objectSpread$9(_objectSpread$9({}, rest), {}, { type: evaluatedType });
	}, [props, layout]);
	(0, import_react.useEffect)(() => {
		if (settings == null) return noop;
		dispatch(addRadiusAxis(settings));
		return () => {
			dispatch(removeRadiusAxis(settings));
		};
	}, [dispatch, settings]);
	return null;
}
/**
* Calculate the coordinate of tick
* @param coordinate The radius of tick
* @param angle from props
* @param cx from chart
* @param cy from chart
* @return (x, y)
*/
var getTickValueCoord = (_ref, angle, cx, cy) => {
	var { coordinate } = _ref;
	return polarToCartesian(cx, cy, coordinate, angle);
};
var getTickTextAnchor$1 = (orientation) => {
	var textAnchor;
	switch (orientation) {
		case "left":
			textAnchor = "end";
			break;
		case "right":
			textAnchor = "start";
			break;
		default:
			textAnchor = "middle";
			break;
	}
	return textAnchor;
};
var getViewBox = (angle, cx, cy, ticks) => {
	var maxRadiusTick = (0, import_maxBy.default)(ticks, (entry) => entry.coordinate || 0);
	var minRadiusTick = (0, import_minBy.default)(ticks, (entry) => entry.coordinate || 0);
	return {
		cx,
		cy,
		startAngle: angle,
		endAngle: angle,
		innerRadius: (minRadiusTick === null || minRadiusTick === void 0 ? void 0 : minRadiusTick.coordinate) || 0,
		outerRadius: (maxRadiusTick === null || maxRadiusTick === void 0 ? void 0 : maxRadiusTick.coordinate) || 0,
		clockWise: false
	};
};
var renderAxisLine = (props, ticks) => {
	var { cx, cy, angle, axisLine } = props, others = _objectWithoutProperties$6(props, _excluded2$3);
	var extent = ticks.reduce((result, entry) => [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)], [Infinity, -Infinity]);
	var point0 = polarToCartesian(cx, cy, extent[0], angle);
	var point1 = polarToCartesian(cx, cy, extent[1], angle);
	var axisLineProps = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, svgPropertiesNoEvents(others)), {}, { fill: "none" }, svgPropertiesNoEvents(axisLine)), {}, {
		x1: point0.x,
		y1: point0.y,
		x2: point1.x,
		y2: point1.y
	});
	return /* @__PURE__ */ import_react.createElement("line", _extends$6({ className: "recharts-polar-radius-axis-line" }, axisLineProps));
};
var renderTickItem = (option, tickProps, value) => {
	var tickItem;
	if (/* @__PURE__ */ import_react.isValidElement(option)) tickItem = /* @__PURE__ */ import_react.cloneElement(option, tickProps);
	else if (typeof option === "function") tickItem = option(tickProps);
	else tickItem = /* @__PURE__ */ import_react.createElement(Text, _extends$6({}, tickProps, { className: "recharts-polar-radius-axis-tick-value" }), value);
	return tickItem;
};
var renderTicks = (props, ticks) => {
	var { angle, tickFormatter, stroke, tick } = props, others = _objectWithoutProperties$6(props, _excluded3$2);
	var textAnchor = getTickTextAnchor$1(props.orientation);
	var axisProps = svgPropertiesNoEvents(others);
	var customTickProps = svgPropertiesNoEventsFromUnknown(tick);
	var items = ticks.map((entry, i) => {
		var coord = getTickValueCoord(entry, props.angle, props.cx, props.cy);
		var tickProps = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({
			textAnchor,
			transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
		}, axisProps), {}, {
			stroke: "none",
			fill: stroke
		}, customTickProps), {}, { index: i }, coord), {}, { payload: entry });
		return /* @__PURE__ */ import_react.createElement(Layer, _extends$6({
			className: clsx("recharts-polar-radius-axis-tick", getClassNameFromUnknown(tick)),
			key: "tick-".concat(entry.coordinate)
		}, adaptEventsOfChild(props, entry, i)), renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
	});
	return /* @__PURE__ */ import_react.createElement(Layer, { className: "recharts-polar-radius-axis-ticks" }, items);
};
var PolarRadiusAxisWrapper = (defaultsAndInputs) => {
	var { radiusAxisId } = defaultsAndInputs;
	var viewBox = useAppSelector(selectPolarViewBox);
	var scale = useAppSelector((state) => selectPolarAxisScale(state, "radiusAxis", radiusAxisId));
	var ticks = useAppSelector((state) => selectPolarAxisTicks(state, "radiusAxis", radiusAxisId, false));
	if (viewBox == null || !ticks || !ticks.length || scale == null) return null;
	var props = _objectSpread$9(_objectSpread$9({}, defaultsAndInputs), {}, { scale }, viewBox);
	var { tick, axisLine } = props;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: clsx("recharts-polar-radius-axis", AXIS_TYPE$1, props.className) }, axisLine && renderAxisLine(props, ticks), tick && renderTicks(props, ticks), /* @__PURE__ */ import_react.createElement(PolarLabelContextProvider, getViewBox(props.angle, props.cx, props.cy, ticks), /* @__PURE__ */ import_react.createElement(PolarLabelFromLabelProp, { label: props.label }), props.children)));
};
/**
* @provides PolarLabelContext
* @consumes PolarViewBoxContext
*/
function PolarRadiusAxis(outsideProps) {
	var _props$niceTicks;
	var props = resolveDefaultProps(outsideProps, defaultPolarRadiusAxisProps);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetRadiusAxisSettings, {
		domain: props.domain,
		id: props.radiusAxisId,
		scale: props.scale,
		type: props.type,
		dataKey: props.dataKey,
		unit: void 0,
		name: props.name,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		allowDataOverflow: props.allowDataOverflow,
		reversed: props.reversed,
		includeHidden: props.includeHidden,
		allowDecimals: props.allowDecimals,
		niceTicks: (_props$niceTicks = props.niceTicks) !== null && _props$niceTicks !== void 0 ? _props$niceTicks : "auto",
		ticks: props.ticks,
		tickCount: props.tickCount,
		tick: props.tick
	}), /* @__PURE__ */ import_react.createElement(PolarRadiusAxisWrapper, props));
}
PolarRadiusAxis.displayName = "PolarRadiusAxis";
//#endregion
//#region node_modules/recharts/es6/polar/PolarAngleAxis.js
var _excluded$5 = ["children", "type"], _excluded2$2 = ["ref"];
function _extends$5() {
	return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$5.apply(null, arguments);
}
function ownKeys$8(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$8(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$8(Object(t), !0).forEach(function(r) {
			_defineProperty$8(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$8(e, r, t) {
	return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
	var i = _toPrimitive$8(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$8(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$5(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$5(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$5(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var eps = 1e-5;
var COS_45 = Math.cos(degreeToRadian(45));
var AXIS_TYPE = "angleAxis";
function SetAngleAxisSettings(props) {
	var dispatch = useAppDispatch();
	var layout = usePolarChartLayout();
	var settings = (0, import_react.useMemo)(() => {
		var { children, type: typeFromProps } = props, rest = _objectWithoutProperties$5(props, _excluded$5);
		var evaluatedType = getAxisTypeBasedOnLayout(layout, "angleAxis", typeFromProps);
		if (evaluatedType == null) return;
		return _objectSpread$8(_objectSpread$8({}, rest), {}, { type: evaluatedType });
	}, [props, layout]);
	var settingsAreSynchronized = settings === useAppSelector((state) => selectAngleAxis(state, settings === null || settings === void 0 ? void 0 : settings.id));
	(0, import_react.useEffect)(() => {
		if (settings == null) return noop;
		dispatch(addAngleAxis(settings));
		return () => {
			dispatch(removeAngleAxis(settings));
		};
	}, [dispatch, settings]);
	if (settingsAreSynchronized) return props.children;
	return null;
}
/**
* Calculate the coordinate of line endpoint
* @param data The data if there are ticks
* @param props axis settings
* @return (x1, y1): The point close to text,
*         (x2, y2): The point close to axis
*/
var getTickLineCoord = (data, props) => {
	var { cx, cy, radius, orientation, tickSize } = props;
	var tickLineSize = tickSize || 8;
	var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
	var p2 = polarToCartesian(cx, cy, radius + (orientation === "inner" ? -1 : 1) * tickLineSize, data.coordinate);
	return {
		x1: p1.x,
		y1: p1.y,
		x2: p2.x,
		y2: p2.y
	};
};
/**
* Get the text-anchor of each tick
* @param data Data of ticks
* @param orientation of the axis ticks
* @return text-anchor
*/
var getTickTextAnchor = (data, orientation) => {
	var cos = Math.cos(degreeToRadian(-data.coordinate));
	if (cos > eps) return orientation === "outer" ? "start" : "end";
	if (cos < -eps) return orientation === "outer" ? "end" : "start";
	return "middle";
};
/**
* Get the text vertical anchor of each tick
* @param data Data of a tick
* @return text vertical anchor
*/
var getTickTextVerticalAnchor = (data) => {
	var cos = Math.cos(degreeToRadian(-data.coordinate));
	var sin = Math.sin(degreeToRadian(-data.coordinate));
	if (Math.abs(cos) <= COS_45) return sin > 0 ? "start" : "end";
	return "middle";
};
var AxisLine = (props) => {
	var { cx, cy, radius, axisLineType, axisLine, ticks } = props;
	if (!axisLine) return null;
	var axisLineProps = _objectSpread$8(_objectSpread$8({}, svgPropertiesNoEvents(props)), {}, { fill: "none" }, svgPropertiesNoEvents(axisLine));
	if (axisLineType === "circle") return /* @__PURE__ */ import_react.createElement(Dot, _extends$5({ className: "recharts-polar-angle-axis-line" }, axisLineProps, {
		cx,
		cy,
		r: radius
	}));
	var points = ticks.map((entry) => polarToCartesian(cx, cy, radius, entry.coordinate));
	return /* @__PURE__ */ import_react.createElement(Polygon, _extends$5({ className: "recharts-polar-angle-axis-line" }, axisLineProps, { points }));
};
var TickItemText = (_ref) => {
	var { tick, tickProps, value } = _ref;
	if (!tick) return null;
	if (/* @__PURE__ */ import_react.isValidElement(tick)) return /* @__PURE__ */ import_react.cloneElement(tick, tickProps);
	if (typeof tick === "function") return tick(tickProps);
	return /* @__PURE__ */ import_react.createElement(Text, _extends$5({}, tickProps, { className: "recharts-polar-angle-axis-tick-value" }), value);
};
var Ticks = (props) => {
	var { tick, tickLine, tickFormatter, stroke, ticks } = props;
	var _svgPropertiesNoEvent = svgPropertiesNoEvents(props), { ref } = _svgPropertiesNoEvent, axisProps = _objectWithoutProperties$5(_svgPropertiesNoEvent, _excluded2$2);
	var customTickProps = svgPropertiesNoEventsFromUnknown(tick);
	var tickLineProps = _objectSpread$8(_objectSpread$8({}, axisProps), {}, { fill: "none" }, svgPropertiesNoEvents(tickLine));
	var items = ticks.map((entry, i) => {
		var lineCoord = getTickLineCoord(entry, props);
		var textAnchor = getTickTextAnchor(entry, props.orientation);
		var verticalAnchor = getTickTextVerticalAnchor(entry);
		var tickProps = _objectSpread$8(_objectSpread$8(_objectSpread$8({}, axisProps), {}, {
			textAnchor,
			verticalAnchor,
			stroke: "none",
			fill: stroke
		}, customTickProps), {}, {
			index: i,
			payload: entry,
			x: lineCoord.x2,
			y: lineCoord.y2
		});
		return /* @__PURE__ */ import_react.createElement(Layer, _extends$5({
			className: clsx("recharts-polar-angle-axis-tick", getClassNameFromUnknown(tick)),
			key: "tick-".concat(entry.coordinate)
		}, adaptEventsOfChild(props, entry, i)), tickLine && /* @__PURE__ */ import_react.createElement("line", _extends$5({ className: "recharts-polar-angle-axis-tick-line" }, tickLineProps, lineCoord)), /* @__PURE__ */ import_react.createElement(TickItemText, {
			tick,
			tickProps,
			value: tickFormatter ? tickFormatter(entry.value, i) : entry.value
		}));
	});
	return /* @__PURE__ */ import_react.createElement(Layer, { className: "recharts-polar-angle-axis-ticks" }, items);
};
var PolarAngleAxisWrapper = (defaultsAndInputs) => {
	var { angleAxisId } = defaultsAndInputs;
	var viewBox = useAppSelector(selectPolarViewBox);
	var scale = useAppSelector((state) => selectPolarAxisScale(state, "angleAxis", angleAxisId));
	var isPanorama = useIsPanorama();
	var ticks = useAppSelector((state) => selectPolarAngleAxisTicks(state, "angleAxis", angleAxisId, isPanorama));
	if (viewBox == null || !ticks || !ticks.length || scale == null) return null;
	var props = _objectSpread$8(_objectSpread$8(_objectSpread$8({}, defaultsAndInputs), {}, { scale }, viewBox), {}, {
		radius: viewBox.outerRadius,
		ticks
	});
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: clsx("recharts-polar-angle-axis", AXIS_TYPE, props.className) }, /* @__PURE__ */ import_react.createElement(AxisLine, props), /* @__PURE__ */ import_react.createElement(Ticks, props)));
};
/**
* @provides PolarLabelContext
* @consumes PolarViewBoxContext
*/
function PolarAngleAxis(outsideProps) {
	var _props$niceTicks;
	var props = resolveDefaultProps(outsideProps, defaultPolarAngleAxisProps);
	return /* @__PURE__ */ import_react.createElement(SetAngleAxisSettings, {
		id: props.angleAxisId,
		scale: props.scale,
		type: props.type,
		dataKey: props.dataKey,
		unit: void 0,
		name: props.name,
		allowDuplicatedCategory: false,
		allowDataOverflow: false,
		reversed: props.reversed,
		includeHidden: false,
		allowDecimals: props.allowDecimals,
		tickCount: props.tickCount,
		niceTicks: (_props$niceTicks = props.niceTicks) !== null && _props$niceTicks !== void 0 ? _props$niceTicks : "auto",
		ticks: props.ticks,
		tick: props.tick,
		domain: props.domain
	}, /* @__PURE__ */ import_react.createElement(PolarAngleAxisWrapper, props));
}
PolarAngleAxis.displayName = "PolarAngleAxis";
//#endregion
//#region node_modules/es-toolkit/dist/array/last.js
var require_last$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Returns the last element of an array.
	*
	* This function takes an array and returns the last element of the array.
	* If the array is empty, the function returns `undefined`.
	*
	* Unlike some implementations, this function is optimized for performance
	* by directly accessing the last index of the array.
	*
	* @template T - The type of elements in the array.
	* @param {T[]} arr - The array from which to get the last element.
	* @returns {T | undefined} The last element of the array, or `undefined` if the array is empty.
	*
	* @example
	* const arr = [1, 2, 3];
	* const lastElement = last(arr);
	* // lastElement will be 3
	*
	* const emptyArr: number[] = [];
	* const noElement = last(emptyArr);
	* // noElement will be undefined
	*/
	function last(arr) {
		return arr[arr.length - 1];
	}
	exports.last = last;
}));
//#endregion
//#region node_modules/es-toolkit/dist/compat/_internal/toArray.js
var require_toArray$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	function toArray(value) {
		return Array.isArray(value) ? value : Array.from(value);
	}
	exports.toArray = toArray;
}));
//#endregion
//#region node_modules/es-toolkit/dist/compat/array/last.js
var require_last$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var require_last$1 = require_last$3();
	var require_toArray = require_toArray$1();
	var require_isArrayLike = require_isArrayLike();
	/**
	* Returns the last element of an array.
	*
	* This function takes an array and returns the last element of the array.
	* If the array is empty, the function returns `undefined`.
	*
	* Unlike some implementations, this function is optimized for performance
	* by directly accessing the last index of the array.
	*
	* @template T - The type of elements in the array.
	* @param {ArrayLike<T> | null | undefined} arr - The array from which to get the last element.
	* @returns {T | undefined} The last element of the array, or `undefined` if the array is empty.
	*
	* @example
	* const arr = [1, 2, 3];
	* const lastElement = last(arr);
	* // lastElement will be 3
	*
	* const emptyArr: number[] = [];
	* const noElement = last(emptyArr);
	* // noElement will be undefined
	*/
	function last(array) {
		if (!require_isArrayLike.isArrayLike(array)) return;
		return require_last$1.last(require_toArray.toArray(array));
	}
	exports.last = last;
}));
//#endregion
//#region node_modules/es-toolkit/compat/last.js
var require_last = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_last$2().last;
}));
//#endregion
//#region node_modules/recharts/es6/component/Dots.js
var _excluded$4 = ["points"];
function ownKeys$7(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$7(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r) {
			_defineProperty$7(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$7(e, r, t) {
	return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
	var i = _toPrimitive$7(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$7(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$4() {
	return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$4.apply(null, arguments);
}
function _objectWithoutProperties$4(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function DotItem(_ref) {
	var { option, dotProps, className } = _ref;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) return /* @__PURE__ */ (0, import_react.cloneElement)(option, dotProps);
	if (typeof option === "function") return option(dotProps);
	var finalClassName = clsx(className, typeof option !== "boolean" ? option.className : "");
	var _ref2 = dotProps !== null && dotProps !== void 0 ? dotProps : {}, { points } = _ref2, props = _objectWithoutProperties$4(_ref2, _excluded$4);
	return /* @__PURE__ */ import_react.createElement(Dot, _extends$4({}, props, { className: finalClassName }));
}
function shouldRenderDots(points, dot) {
	if (points == null) return false;
	if (dot) return true;
	return points.length === 1;
}
function Dots(_ref3) {
	var { points, dot, className, dotClassName, dataKey, baseProps, needClip, clipPathId, zIndex = DefaultZIndexes.scatter } = _ref3;
	if (!shouldRenderDots(points, dot)) return null;
	var clipDot = isClipDot(dot);
	var customDotProps = svgPropertiesAndEventsFromUnknown(dot);
	var dots = points.map((entry, i) => {
		var _entry$x, _entry$y;
		var dotProps = _objectSpread$7(_objectSpread$7(_objectSpread$7({ r: 3 }, baseProps), customDotProps), {}, {
			index: i,
			cx: (_entry$x = entry.x) !== null && _entry$x !== void 0 ? _entry$x : void 0,
			cy: (_entry$y = entry.y) !== null && _entry$y !== void 0 ? _entry$y : void 0,
			dataKey,
			value: entry.value,
			payload: entry.payload,
			points
		});
		return /* @__PURE__ */ import_react.createElement(DotItem, {
			key: "dot-".concat(i),
			option: dot,
			dotProps,
			className: dotClassName
		});
	});
	var layerProps = {};
	if (needClip && clipPathId != null) layerProps.clipPath = "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")");
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(Layer, _extends$4({ className }, layerProps), dots));
}
//#endregion
//#region node_modules/recharts/es6/component/ActivePoints.js
function ownKeys$6(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$6(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r) {
			_defineProperty$6(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$6(e, r, t) {
	return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
	var i = _toPrimitive$6(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$6(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var ActivePoint = (_ref) => {
	var { point, childIndex, mainColor, activeDot, dataKey, clipPath } = _ref;
	if (activeDot === false || point.x == null || point.y == null) return null;
	var dotProps = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, {
		index: childIndex,
		dataKey,
		cx: point.x,
		cy: point.y,
		r: 4,
		fill: mainColor !== null && mainColor !== void 0 ? mainColor : "none",
		strokeWidth: 2,
		stroke: "#fff",
		payload: point.payload,
		value: point.value
	}), svgPropertiesNoEventsFromUnknown(activeDot)), adaptEventHandlers(activeDot));
	var dot;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(activeDot)) dot = /* @__PURE__ */ (0, import_react.cloneElement)(activeDot, dotProps);
	else if (typeof activeDot === "function") dot = activeDot(dotProps);
	else dot = /* @__PURE__ */ import_react.createElement(Dot, dotProps);
	return /* @__PURE__ */ import_react.createElement(Layer, {
		className: "recharts-active-dot",
		clipPath
	}, dot);
};
function ActivePoints(_ref2) {
	var { points, mainColor, activeDot, itemDataKey, clipPath, zIndex = DefaultZIndexes.activeDot } = _ref2;
	var activeTooltipIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataPoints = useActiveTooltipDataPoints();
	if (points == null || activeDataPoints == null) return null;
	var activePoint = points.find((p) => activeDataPoints.includes(p.payload));
	if (isNullish(activePoint)) return null;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(ActivePoint, {
		point: activePoint,
		childIndex: Number(activeTooltipIndex),
		mainColor,
		dataKey: itemDataKey,
		activeDot,
		clipPath
	}));
}
//#endregion
//#region node_modules/recharts/es6/state/selectors/radarSelectors.js
function ownKeys$5(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$5(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
			_defineProperty$5(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$5(e, r, t) {
	return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
	var i = _toPrimitive$5(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var selectRadiusAxisScale = (state, radiusAxisId) => selectPolarAxisScale(state, "radiusAxis", radiusAxisId);
var selectRadiusAxisForRadar = createSelector([selectRadiusAxisScale], (scale) => {
	if (scale == null) return;
	return { scale };
});
var selectRadiusAxisForBandSize = createSelector([selectRadiusAxis, selectRadiusAxisScale], (axisSettings, scale) => {
	if (axisSettings == null || scale == null) return;
	return _objectSpread$5(_objectSpread$5({}, axisSettings), {}, { scale });
});
var selectRadiusAxisTicks = (state, radiusAxisId, _angleAxisId, isPanorama) => {
	return selectPolarAxisTicks(state, "radiusAxis", radiusAxisId, isPanorama);
};
var selectAngleAxisForRadar = (state, _radiusAxisId, angleAxisId) => selectAngleAxis(state, angleAxisId);
var selectPolarAxisScaleForRadar = (state, _radiusAxisId, angleAxisId) => selectPolarAxisScale(state, "angleAxis", angleAxisId);
var selectAngleAxisForBandSize = createSelector([selectAngleAxisForRadar, selectPolarAxisScaleForRadar], (axisSettings, scale) => {
	if (axisSettings == null || scale == null) return;
	return _objectSpread$5(_objectSpread$5({}, axisSettings), {}, { scale });
});
var selectAngleAxisTicks = (state, _radiusAxisId, angleAxisId, isPanorama) => {
	return selectPolarAxisTicks(state, "angleAxis", angleAxisId, isPanorama);
};
var selectAngleAxisWithScaleAndViewport = createSelector([
	selectAngleAxisForRadar,
	selectPolarAxisScaleForRadar,
	selectPolarViewBox
], (axisOptions, scale, polarViewBox) => {
	if (polarViewBox == null || scale == null) return;
	return {
		scale,
		type: axisOptions.type,
		dataKey: axisOptions.dataKey,
		cx: polarViewBox.cx,
		cy: polarViewBox.cy
	};
});
var pickId = (_state, _radiusAxisId, _angleAxisId, _isPanorama, radarId) => radarId;
var selectBandSizeOfAxis = createSelector([
	selectChartLayout,
	selectRadiusAxisForBandSize,
	selectRadiusAxisTicks,
	selectAngleAxisForBandSize,
	selectAngleAxisTicks
], (layout, radiusAxis, radiusAxisTicks, angleAxis, angleAxisTicks) => {
	if (isCategoricalAxis(layout, "radiusAxis")) return getBandSizeOfAxis(radiusAxis, radiusAxisTicks, false);
	return getBandSizeOfAxis(angleAxis, angleAxisTicks, false);
});
var selectRadarPoints = createSelector([
	selectRadiusAxisForRadar,
	selectAngleAxisWithScaleAndViewport,
	selectChartDataAndAlwaysIgnoreIndexes,
	createSelector([selectUnfilteredPolarItems, pickId], (graphicalItems, radarId) => {
		if (graphicalItems == null) return;
		var pgis = graphicalItems.find((item) => item.type === "radar" && radarId === item.id);
		return pgis === null || pgis === void 0 ? void 0 : pgis.dataKey;
	}),
	selectBandSizeOfAxis
], (radiusAxis, angleAxis, _ref, dataKey, bandSize) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (radiusAxis == null || angleAxis == null || chartData == null || bandSize == null || dataKey == null) return;
	return computeRadarPoints({
		radiusAxis,
		angleAxis,
		displayedData: chartData.slice(dataStartIndex, dataEndIndex + 1),
		dataKey,
		bandSize
	});
});
//#endregion
//#region node_modules/recharts/es6/polar/Radar.js
var import_last = /* @__PURE__ */ __toESM(require_last());
var _excluded$3 = ["id"];
function _extends$3() {
	return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$3.apply(null, arguments);
}
function ownKeys$4(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$4(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
			_defineProperty$4(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$4(e, r, t) {
	return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
	var i = _toPrimitive$4(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$3(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function getLegendItemColor(stroke, fill) {
	return stroke && stroke !== "none" ? stroke : fill;
}
var computeLegendPayloadFromRadarSectors = (props) => {
	var { dataKey, name, stroke, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: getLegendItemColor(stroke, fill),
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetRadarTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, stroke, strokeWidth, fill, name, hide, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: void 0,
		getPosition: noop,
		settings: {
			stroke,
			strokeWidth,
			fill,
			nameKey: void 0,
			dataKey,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: getLegendItemColor(stroke, fill),
			unit: "",
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
function RadarDotsWrapper(_ref2) {
	var { points, props } = _ref2;
	var { dot, dataKey } = props;
	var { id } = props;
	var baseProps = svgPropertiesNoEvents(_objectWithoutProperties$3(props, _excluded$3));
	return /* @__PURE__ */ import_react.createElement(Dots, {
		points,
		dot,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey,
		baseProps
	});
}
function computeRadarPoints(_ref3) {
	var { radiusAxis, angleAxis, displayedData, dataKey, bandSize } = _ref3;
	var { cx, cy } = angleAxis;
	var isRange = false;
	var points = [];
	var angleBandSize = angleAxis.type !== "number" ? bandSize !== null && bandSize !== void 0 ? bandSize : 0 : 0;
	displayedData.forEach((entry, i) => {
		var _angleAxis$scale$map, _radiusAxis$scale$map;
		var name = getValueByDataKey(entry, angleAxis.dataKey, i);
		var value = getValueByDataKey(entry, dataKey);
		var angle = ((_angleAxis$scale$map = angleAxis.scale.map(name)) !== null && _angleAxis$scale$map !== void 0 ? _angleAxis$scale$map : 0) + angleBandSize;
		var pointValue = Array.isArray(value) ? (0, import_last.default)(value) : value;
		var radius = isNullish(pointValue) ? 0 : (_radiusAxis$scale$map = radiusAxis.scale.map(pointValue)) !== null && _radiusAxis$scale$map !== void 0 ? _radiusAxis$scale$map : 0;
		if (Array.isArray(value) && value.length >= 2) isRange = true;
		points.push(_objectSpread$4(_objectSpread$4({}, polarToCartesian(cx, cy, radius, angle)), {}, {
			name,
			value,
			cx,
			cy,
			radius,
			angle,
			payload: entry
		}));
	});
	var baseLinePoints = [];
	if (isRange) points.forEach((point) => {
		if (Array.isArray(point.value)) {
			var _radiusAxis$scale$map2;
			var baseValue = point.value[0];
			var radius = isNullish(baseValue) ? 0 : (_radiusAxis$scale$map2 = radiusAxis.scale.map(baseValue)) !== null && _radiusAxis$scale$map2 !== void 0 ? _radiusAxis$scale$map2 : 0;
			baseLinePoints.push(_objectSpread$4(_objectSpread$4({}, point), {}, { radius }, polarToCartesian(cx, cy, radius, point.angle)));
		} else baseLinePoints.push(point);
	});
	return {
		points,
		isRange,
		baseLinePoints
	};
}
function RadarLabelListProvider(_ref4) {
	var { showLabels, points, children } = _ref4;
	var labelListEntries = points.map((point) => {
		var _point$value;
		var viewBox = {
			x: point.x,
			y: point.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return _objectSpread$4(_objectSpread$4({}, viewBox), {}, {
			value: (_point$value = point.value) !== null && _point$value !== void 0 ? _point$value : "",
			payload: point.payload,
			parentViewBox: void 0,
			viewBox,
			fill: void 0
		});
	});
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function StaticPolygon(_ref5) {
	var { points, baseLinePoints, props } = _ref5;
	if (points == null) return null;
	var { shape, isRange, connectNulls } = props;
	var handleMouseEnter = (e) => {
		var { onMouseEnter } = props;
		if (onMouseEnter) onMouseEnter(props, e);
	};
	var handleMouseLeave = (e) => {
		var { onMouseLeave } = props;
		if (onMouseLeave) onMouseLeave(props, e);
	};
	var radar;
	if (/* @__PURE__ */ import_react.isValidElement(shape)) radar = /* @__PURE__ */ import_react.cloneElement(shape, _objectSpread$4(_objectSpread$4({}, props), {}, { points }));
	else if (typeof shape === "function") radar = shape(_objectSpread$4(_objectSpread$4({}, props), {}, { points }));
	else radar = /* @__PURE__ */ import_react.createElement(Polygon, _extends$3({}, svgPropertiesAndEvents(props), {
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		points,
		baseLinePoints: isRange ? baseLinePoints : void 0,
		connectNulls
	}));
	return /* @__PURE__ */ import_react.createElement(Layer, { className: "recharts-radar-polygon" }, radar, /* @__PURE__ */ import_react.createElement(RadarDotsWrapper, {
		props,
		points
	}));
}
var interpolatePolarPoint = (prevPoints, prevPointsDiffFactor, t) => (entry, index) => {
	var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];
	if (prev) return _objectSpread$4(_objectSpread$4({}, entry), {}, {
		x: interpolate(prev.x, entry.x, t),
		y: interpolate(prev.y, entry.y, t)
	});
	return _objectSpread$4(_objectSpread$4({}, entry), {}, {
		x: interpolate(entry.cx, entry.x, t),
		y: interpolate(entry.cy, entry.y, t)
	});
};
function PolygonWithAnimation(_ref6) {
	var { props, previousPointsRef, previousBaseLinePointsRef } = _ref6;
	var { points, baseLinePoints, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationEnd, onAnimationStart } = props;
	var prevPoints = previousPointsRef.current;
	var prevBaseLinePoints = previousBaseLinePointsRef.current;
	var prevPointsDiffFactor = prevPoints ? prevPoints.length / points.length : 1;
	var prevBaseLinePointsDiffFactor = prevBaseLinePoints ? prevBaseLinePoints.length / baseLinePoints.length : 1;
	var animationId = useAnimationId(props, "recharts-radar-");
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	return /* @__PURE__ */ import_react.createElement(RadarLabelListProvider, {
		showLabels,
		points
	}, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		key: "radar-".concat(animationId),
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart
	}, (t) => {
		var stepData = t === 1 ? points : points.map(interpolatePolarPoint(prevPoints, prevPointsDiffFactor, t));
		var stepBaseLinePoints = t === 1 ? baseLinePoints : baseLinePoints === null || baseLinePoints === void 0 ? void 0 : baseLinePoints.map(interpolatePolarPoint(prevBaseLinePoints, prevBaseLinePointsDiffFactor, t));
		if (t > 0) {
			previousPointsRef.current = stepData;
			previousBaseLinePointsRef.current = stepBaseLinePoints;
		}
		return /* @__PURE__ */ import_react.createElement(StaticPolygon, {
			points: stepData,
			baseLinePoints: stepBaseLinePoints,
			props
		});
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }), props.children);
}
function RenderPolygon(props) {
	var previousPointsRef = (0, import_react.useRef)(void 0);
	var previousBaseLinePointsRef = (0, import_react.useRef)(void 0);
	return /* @__PURE__ */ import_react.createElement(PolygonWithAnimation, {
		props,
		previousPointsRef,
		previousBaseLinePointsRef
	});
}
var defaultRadarProps = {
	activeDot: true,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	dot: false,
	hide: false,
	isAnimationActive: "auto",
	label: false,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: DefaultZIndexes.area
};
function RadarWithState(props) {
	var { hide, className, points } = props;
	if (hide) return null;
	var layerClass = clsx("recharts-radar", className);
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: layerClass }, /* @__PURE__ */ import_react.createElement(RenderPolygon, props)), /* @__PURE__ */ import_react.createElement(ActivePoints, {
		points,
		mainColor: getLegendItemColor(props.stroke, props.fill),
		itemDataKey: props.dataKey,
		activeDot: props.activeDot
	}));
}
function RadarImpl(props) {
	var isPanorama = useIsPanorama();
	var radarPoints = useAppSelector((state) => selectRadarPoints(state, props.radiusAxisId, props.angleAxisId, isPanorama, props.id));
	if ((radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.points) == null) return null;
	return /* @__PURE__ */ import_react.createElement(RadarWithState, _extends$3({}, props, {
		points: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.points,
		baseLinePoints: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.baseLinePoints,
		isRange: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.isRange
	}));
}
/**
* @consumes PolarChartContext
* @provides LabelListContext
*/
function Radar(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultRadarProps);
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "radar"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetPolarGraphicalItem, {
		type: "radar",
		id,
		data: void 0,
		dataKey: props.dataKey,
		hide: props.hide,
		angleAxisId: props.angleAxisId,
		radiusAxisId: props.radiusAxisId
	}), /* @__PURE__ */ import_react.createElement(SetPolarLegendPayload, { legendPayload: computeLegendPayloadFromRadarSectors(props) }), /* @__PURE__ */ import_react.createElement(SetRadarTooltipEntrySettings, {
		dataKey: props.dataKey,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(RadarImpl, _extends$3({}, props, { id }))));
}
Radar.displayName = "Radar";
//#endregion
//#region node_modules/recharts/es6/cartesian/CartesianGrid.js
var _excluded$2 = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], _excluded2$1 = ["offset"], _excluded3$1 = ["xAxisId", "yAxisId"], _excluded4 = ["xAxisId", "yAxisId"];
function ownKeys$3(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$3(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
			_defineProperty$3(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$3(e, r, t) {
	return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
	var i = _toPrimitive$3(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$2() {
	return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$2.apply(null, arguments);
}
function _objectWithoutProperties$2(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* The <CartesianGrid horizontal
*/
var Background = (props) => {
	var { fill } = props;
	if (!fill || fill === "none") return null;
	var { fillOpacity, x, y, width, height, ry } = props;
	return /* @__PURE__ */ import_react.createElement("rect", {
		x,
		y,
		ry,
		width,
		height,
		stroke: "none",
		fill,
		fillOpacity,
		className: "recharts-cartesian-grid-bg"
	});
};
function LineItem(_ref) {
	var { option, lineItemProps } = _ref;
	var lineItem;
	if (/* @__PURE__ */ import_react.isValidElement(option)) lineItem = /* @__PURE__ */ import_react.cloneElement(option, lineItemProps);
	else if (typeof option === "function") lineItem = option(lineItemProps);
	else {
		var _svgPropertiesNoEvent;
		var { x1, y1, x2, y2, key } = lineItemProps;
		var _ref2 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(_objectWithoutProperties$2(lineItemProps, _excluded$2))) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, { offset: __ } = _ref2, restOfFilteredProps = _objectWithoutProperties$2(_ref2, _excluded2$1);
		lineItem = /* @__PURE__ */ import_react.createElement("line", _extends$2({}, restOfFilteredProps, {
			x1,
			y1,
			x2,
			y2,
			fill: "none",
			key
		}));
	}
	return lineItem;
}
function HorizontalGridLines(props) {
	var { x, width, horizontal = true, horizontalPoints } = props;
	if (!horizontal || !horizontalPoints || !horizontalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$2(props, _excluded3$1);
	var items = horizontalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$3(_objectSpread$3({}, otherLineItemProps), {}, {
			x1: x,
			y1: entry,
			x2: x + width,
			y2: entry,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			key: "line-".concat(i),
			option: horizontal,
			lineItemProps
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
}
function VerticalGridLines(props) {
	var { y, height, vertical = true, verticalPoints } = props;
	if (!vertical || !verticalPoints || !verticalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$2(props, _excluded4);
	var items = verticalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$3(_objectSpread$3({}, otherLineItemProps), {}, {
			x1: entry,
			y1: y,
			x2: entry,
			y2: y + height,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			option: vertical,
			lineItemProps,
			key: "line-".concat(i)
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
}
function HorizontalStripes(props) {
	var { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal = true } = props;
	if (!horizontal || !horizontalFill || !horizontalFill.length || horizontalPoints == null) return null;
	var roundedSortedHorizontalPoints = horizontalPoints.map((e) => Math.round(e + y - y)).sort((a, b) => a - b);
	if (y !== roundedSortedHorizontalPoints[0]) roundedSortedHorizontalPoints.unshift(0);
	var items = roundedSortedHorizontalPoints.map((entry, i) => {
		var nextPoint = roundedSortedHorizontalPoints[i + 1];
		var lineHeight = nextPoint == null ? y + height - entry : nextPoint - entry;
		if (lineHeight <= 0) return null;
		var colorIndex = i % horizontalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			y: entry,
			x,
			height: lineHeight,
			width,
			stroke: "none",
			fill: horizontalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
}
function VerticalStripes(props) {
	var { vertical = true, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
	if (!vertical || !verticalFill || !verticalFill.length) return null;
	var roundedSortedVerticalPoints = verticalPoints.map((e) => Math.round(e + x - x)).sort((a, b) => a - b);
	if (x !== roundedSortedVerticalPoints[0]) roundedSortedVerticalPoints.unshift(0);
	var items = roundedSortedVerticalPoints.map((entry, i) => {
		var nextPoint = roundedSortedVerticalPoints[i + 1];
		var lineWidth = nextPoint == null ? x + width - entry : nextPoint - entry;
		if (lineWidth <= 0) return null;
		var colorIndex = i % verticalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			x: entry,
			y,
			width: lineWidth,
			height,
			stroke: "none",
			fill: verticalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
}
var defaultVerticalCoordinatesGenerator = (_ref3, syncWithTicks) => {
	var { xAxis, width, height, offset } = _ref3;
	return getCoordinatesOfGrid(getTicks(_objectSpread$3(_objectSpread$3(_objectSpread$3({}, defaultCartesianAxisProps), xAxis), {}, {
		ticks: getTicksOfAxis(xAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = (_ref4, syncWithTicks) => {
	var { yAxis, width, height, offset } = _ref4;
	return getCoordinatesOfGrid(getTicks(_objectSpread$3(_objectSpread$3(_objectSpread$3({}, defaultCartesianAxisProps), yAxis), {}, {
		ticks: getTicksOfAxis(yAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultCartesianGridProps = {
	horizontal: true,
	vertical: true,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0,
	syncWithTicks: false,
	zIndex: DefaultZIndexes.grid
};
/**
* Renders background grid with lines and fill colors in a Cartesian chart.
*
* @consumes CartesianChartContext
*/
function CartesianGrid(props) {
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	var offset = useOffsetInternal();
	var propsIncludingDefaults = _objectSpread$3(_objectSpread$3({}, resolveDefaultProps(props, defaultCartesianGridProps)), {}, {
		x: isNumber(props.x) ? props.x : offset.left,
		y: isNumber(props.y) ? props.y : offset.top,
		width: isNumber(props.width) ? props.width : offset.width,
		height: isNumber(props.height) ? props.height : offset.height
	});
	var { xAxisId, yAxisId, x, y, width, height, syncWithTicks, horizontalValues, verticalValues } = propsIncludingDefaults;
	var isPanorama = useIsPanorama();
	var xAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "xAxis", xAxisId, isPanorama));
	var yAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "yAxis", yAxisId, isPanorama));
	if (!isPositiveNumber(width) || !isPositiveNumber(height) || !isNumber(x) || !isNumber(y)) return null;
	var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
	var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
	var { horizontalPoints, verticalPoints } = propsIncludingDefaults;
	if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === "function") {
		var isHorizontalValues = horizontalValues && horizontalValues.length;
		var generatorResult = horizontalCoordinatesGenerator({
			yAxis: yAxis ? _objectSpread$3(_objectSpread$3({}, yAxis), {}, { ticks: isHorizontalValues ? horizontalValues : yAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isHorizontalValues ? true : syncWithTicks);
		warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof generatorResult, "]"));
		if (Array.isArray(generatorResult)) horizontalPoints = generatorResult;
	}
	if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === "function") {
		var isVerticalValues = verticalValues && verticalValues.length;
		var _generatorResult = verticalCoordinatesGenerator({
			xAxis: xAxis ? _objectSpread$3(_objectSpread$3({}, xAxis), {}, { ticks: isVerticalValues ? verticalValues : xAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isVerticalValues ? true : syncWithTicks);
		warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _generatorResult, "]"));
		if (Array.isArray(_generatorResult)) verticalPoints = _generatorResult;
	}
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: propsIncludingDefaults.zIndex }, /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid" }, /* @__PURE__ */ import_react.createElement(Background, {
		fill: propsIncludingDefaults.fill,
		fillOpacity: propsIncludingDefaults.fillOpacity,
		x: propsIncludingDefaults.x,
		y: propsIncludingDefaults.y,
		width: propsIncludingDefaults.width,
		height: propsIncludingDefaults.height,
		ry: propsIncludingDefaults.ry
	}), /* @__PURE__ */ import_react.createElement(HorizontalStripes, _extends$2({}, propsIncludingDefaults, { horizontalPoints })), /* @__PURE__ */ import_react.createElement(VerticalStripes, _extends$2({}, propsIncludingDefaults, { verticalPoints })), /* @__PURE__ */ import_react.createElement(HorizontalGridLines, _extends$2({}, propsIncludingDefaults, {
		offset,
		horizontalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ import_react.createElement(VerticalGridLines, _extends$2({}, propsIncludingDefaults, {
		offset,
		verticalPoints,
		xAxis,
		yAxis
	}))));
}
CartesianGrid.displayName = "CartesianGrid";
//#endregion
//#region node_modules/recharts/es6/state/selectors/lineSelectors.js
var selectXAxisWithScale = (state, xAxisId, _yAxisId, isPanorama) => selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
var selectXAxisTicks = (state, xAxisId, _yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
var selectYAxisWithScale = (state, _xAxisId, yAxisId, isPanorama) => selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
var selectYAxisTicks = (state, _xAxisId, yAxisId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
var selectBandSize = createSelector([
	selectChartLayout,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
	if (isCategoricalAxis(layout, "xAxis")) return getBandSizeOfAxis(xAxis, xAxisTicks, false);
	return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickLineId = (_state, _xAxisId, _yAxisId, _isPanorama, id) => id;
function isLineSettings(item) {
	return item.type === "line";
}
var selectLinePoints = createSelector([
	selectChartLayout,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	createSelector([selectUnfilteredCartesianItems, pickLineId], (graphicalItems, id) => graphicalItems.filter(isLineSettings).find((x) => x.id === id)),
	selectBandSize,
	selectChartDataWithIndexesIfNotInPanoramaPosition4
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, lineSettings, bandSize, _ref) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (lineSettings == null || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null || layout !== "horizontal" && layout !== "vertical") return;
	var { dataKey, data } = lineSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeLinePoints({
		layout,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		dataKey,
		bandSize,
		displayedData
	});
});
//#endregion
//#region node_modules/recharts/es6/util/getRadiusAndStrokeWidthFromDot.js
function getRadiusAndStrokeWidthFromDot(dot) {
	var props = svgPropertiesNoEventsFromUnknown(dot);
	var defaultR = 3;
	var defaultStrokeWidth = 2;
	if (props != null) {
		var { r, strokeWidth } = props;
		var realR = Number(r);
		var realStrokeWidth = Number(strokeWidth);
		if (Number.isNaN(realR) || realR < 0) realR = defaultR;
		if (Number.isNaN(realStrokeWidth) || realStrokeWidth < 0) realStrokeWidth = defaultStrokeWidth;
		return {
			r: realR,
			strokeWidth: realStrokeWidth
		};
	}
	return {
		r: defaultR,
		strokeWidth: defaultStrokeWidth
	};
}
//#endregion
//#region node_modules/recharts/es6/cartesian/Line.js
var _excluded$1 = ["id"], _excluded2 = [
	"type",
	"layout",
	"connectNulls",
	"needClip",
	"shape"
], _excluded3 = [
	"activeDot",
	"animateNewValues",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"hide",
	"isAnimationActive",
	"label",
	"legendType",
	"xAxisId",
	"yAxisId",
	"id"
];
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
			_defineProperty$2(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i = _toPrimitive$2(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* Internal props, combination of external props + defaultProps + private Recharts state
*/
/**
* External props, intended for end users to fill in
*/
/**
* Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
*/
var computeLegendPayloadFromAreaData = (props) => {
	var { dataKey, name, stroke, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: stroke,
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetLineTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, data, stroke, strokeWidth, fill, name, hide, unit, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: data,
		getPosition: noop,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: stroke,
			unit,
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
/**
* Generates a simple stroke-dasharray string for animating a line draw effect.
*
* Uses `totalLength` as the gap (instead of `totalLength - length`) to prevent a floating-point
* precision artifact: when fractional dash and gap values are serialized to a string attribute
* and re-parsed by the SVG renderer, their sum can differ from the actual path length by a ULP,
* causing the dasharray pattern to repeat and render a phantom dot at the path endpoint
* with round or square strokeLinecap.
*
* @param totalLength The total length of the SVG path
* @param length The currently visible portion of the path
* @returns A stroke-dasharray string like "50px 200px"
*/
var generateSimpleStrokeDasharray = (totalLength, length) => {
	return "".concat(length, "px ").concat(totalLength, "px");
};
/**
* Repeats a dash pattern array a given number of times.
*
* If the input array has an odd length, a trailing `0` is appended to make it even
* before repeating, because SVG stroke-dasharray patterns must have an even number
* of values to cycle correctly between dash and gap segments.
*
* @param lines Array of dash/gap lengths to repeat
* @param count Number of times to repeat the pattern
* @returns A new array with the pattern repeated `count` times
*/
function repeat(lines, count) {
	var linesUnit = lines.length % 2 !== 0 ? [...lines, 0] : lines;
	var result = [];
	for (var i = 0; i < count; ++i) result.push(...linesUnit);
	return result;
}
/**
* Computes a stroke-dasharray string for animating a custom-dashed line draw effect.
*
* Given a user-specified dash pattern (e.g. `"7,3"`), this function builds a dasharray
* that reveals exactly `length` pixels of that pattern, followed by a gap of `totalLength`
* to hide the remainder of the path.
*
* Like {@link generateSimpleStrokeDasharray}, the trailing gap uses `totalLength` rather than
* `totalLength - length` to avoid floating-point precision artifacts with round/square strokeLinecap.
*
* @param length The currently visible portion of the path
* @param totalLength The total length of the SVG path
* @param lines The user-specified dash pattern as an array of numbers (e.g. [7, 3])
* @returns A stroke-dasharray string incorporating the custom dash pattern
*/
var getStrokeDasharray = (length, totalLength, lines) => {
	var lineLength = lines.reduce((pre, next) => pre + next, 0);
	if (!lineLength) return generateSimpleStrokeDasharray(totalLength, length);
	var count = Math.floor(length / lineLength);
	var remainLength = length % lineLength;
	var remainLines = [];
	for (var i = 0, sum = 0; i < lines.length; sum += (_lines$i = lines[i]) !== null && _lines$i !== void 0 ? _lines$i : 0, ++i) {
		var _lines$i;
		var lineValue = lines[i];
		if (lineValue != null && sum + lineValue > remainLength) {
			remainLines = [...lines.slice(0, i), remainLength - sum];
			break;
		}
	}
	var emptyLines = remainLines.length % 2 === 0 ? [0, totalLength] : [totalLength];
	return [
		...repeat(lines, count),
		...remainLines,
		...emptyLines
	].map((line) => "".concat(line, "px")).join(", ");
};
function LineDotsWrapper(_ref2) {
	var { clipPathId, points, props } = _ref2;
	var { dot, dataKey, needClip } = props;
	var { id } = props;
	var lineProps = svgPropertiesNoEvents(_objectWithoutProperties$1(props, _excluded$1));
	return /* @__PURE__ */ import_react.createElement(Dots, {
		points,
		dot,
		className: "recharts-line-dots",
		dotClassName: "recharts-line-dot",
		dataKey,
		baseProps: lineProps,
		needClip,
		clipPathId
	});
}
function LineLabelListProvider(_ref3) {
	var { showLabels, children, points } = _ref3;
	var labelListEntries = (0, import_react.useMemo)(() => {
		return points === null || points === void 0 ? void 0 : points.map((point) => {
			var _point$x, _point$y;
			var viewBox = {
				x: (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : 0,
				y: (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : 0,
				width: 0,
				lowerWidth: 0,
				upperWidth: 0,
				height: 0
			};
			return _objectSpread$2(_objectSpread$2({}, viewBox), {}, {
				value: point.value,
				payload: point.payload,
				viewBox,
				parentViewBox: void 0,
				fill: void 0
			});
		});
	}, [points]);
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function StaticCurve(_ref4) {
	var { clipPathId, pathRef, points, strokeDasharray, props } = _ref4;
	var { type, layout, connectNulls, needClip, shape } = props;
	var curveProps = _objectSpread$2(_objectSpread$2({}, svgPropertiesAndEvents(_objectWithoutProperties$1(props, _excluded2))), {}, {
		fill: "none",
		className: "recharts-line-curve",
		clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0,
		points,
		type,
		layout,
		connectNulls,
		strokeDasharray: strokeDasharray !== null && strokeDasharray !== void 0 ? strokeDasharray : props.strokeDasharray
	});
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ import_react.createElement(Shape, _extends$1({
		shapeType: "curve",
		option: shape
	}, curveProps, { pathRef })), /* @__PURE__ */ import_react.createElement(LineDotsWrapper, {
		points,
		clipPathId,
		props
	}));
}
function getTotalLength(mainCurve) {
	try {
		return mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength() || 0;
	} catch (_unused) {
		return 0;
	}
}
function CurveWithAnimation(_ref5) {
	var { clipPathId, props, pathRef, previousPointsRef, longestAnimatedLengthRef } = _ref5;
	var { points, strokeDasharray, isAnimationActive, animationBegin, animationDuration, animationEasing, animateNewValues, width, height, onAnimationEnd, onAnimationStart } = props;
	var prevPoints = previousPointsRef.current;
	var animationId = useAnimationId(points, "recharts-line-");
	var animationIdRef = (0, import_react.useRef)(animationId);
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	var totalLength = getTotalLength(pathRef.current);
	var startingPointRef = (0, import_react.useRef)(0);
	if (animationIdRef.current !== animationId) {
		startingPointRef.current = longestAnimatedLengthRef.current;
		animationIdRef.current = animationId;
	}
	var startingPoint = startingPointRef.current;
	return /* @__PURE__ */ import_react.createElement(LineLabelListProvider, {
		points,
		showLabels
	}, props.children, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		var lengthInterpolated = interpolate(startingPoint, totalLength + startingPoint, t);
		var curLength = Math.min(lengthInterpolated, totalLength);
		var currentStrokeDasharray;
		if (isAnimationActive) if (strokeDasharray) currentStrokeDasharray = getStrokeDasharray(curLength, totalLength, "".concat(strokeDasharray).split(/[,\s]+/gim).map((num) => parseFloat(num)));
		else currentStrokeDasharray = generateSimpleStrokeDasharray(totalLength, curLength);
		else currentStrokeDasharray = strokeDasharray == null ? void 0 : String(strokeDasharray);
		if (t > 0 && totalLength > 0) {
			previousPointsRef.current = points;
			longestAnimatedLengthRef.current = Math.max(longestAnimatedLengthRef.current, curLength);
		}
		if (prevPoints) {
			var prevPointsDiffFactor = prevPoints.length / points.length;
			var stepData = t === 1 ? points : points.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (prevPoints[prevPointIndex]) {
					var prev = prevPoints[prevPointIndex];
					return _objectSpread$2(_objectSpread$2({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				if (animateNewValues) return _objectSpread$2(_objectSpread$2({}, entry), {}, {
					x: interpolate(width * 2, entry.x, t),
					y: interpolate(height / 2, entry.y, t)
				});
				return _objectSpread$2(_objectSpread$2({}, entry), {}, {
					x: entry.x,
					y: entry.y
				});
			});
			previousPointsRef.current = stepData;
			return /* @__PURE__ */ import_react.createElement(StaticCurve, {
				props,
				points: stepData,
				clipPathId,
				pathRef,
				strokeDasharray: currentStrokeDasharray
			});
		}
		return /* @__PURE__ */ import_react.createElement(StaticCurve, {
			props,
			points,
			clipPathId,
			pathRef,
			strokeDasharray: currentStrokeDasharray
		});
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }));
}
function RenderCurve(_ref6) {
	var { clipPathId, props } = _ref6;
	var previousPointsRef = (0, import_react.useRef)(null);
	var longestAnimatedLengthRef = (0, import_react.useRef)(0);
	var pathRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ import_react.createElement(CurveWithAnimation, {
		props,
		clipPathId,
		previousPointsRef,
		longestAnimatedLengthRef,
		pathRef
	});
}
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
	var _dataPoint$x, _dataPoint$y;
	return {
		x: (_dataPoint$x = dataPoint.x) !== null && _dataPoint$x !== void 0 ? _dataPoint$x : void 0,
		y: (_dataPoint$y = dataPoint.y) !== null && _dataPoint$y !== void 0 ? _dataPoint$y : void 0,
		value: dataPoint.value,
		errorVal: getValueByDataKey(dataPoint.payload, dataKey)
	};
};
var LineWithState = class extends import_react.Component {
	render() {
		var { hide, dot, points, className, xAxisId, yAxisId, top, left, width, height, id, needClip, zIndex } = this.props;
		if (hide) return null;
		var layerClass = clsx("recharts-line", className);
		var clipPathId = id;
		var { r, strokeWidth } = getRadiusAndStrokeWidthFromDot(dot);
		var clipDot = isClipDot(dot);
		var dotSize = r * 2 + strokeWidth;
		var activePointsClipPath = needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0;
		return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: layerClass }, needClip && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		}), !clipDot && /* @__PURE__ */ import_react.createElement("clipPath", { id: "clipPath-dots-".concat(clipPathId) }, /* @__PURE__ */ import_react.createElement("rect", {
			x: left - dotSize / 2,
			y: top - dotSize / 2,
			width: width + dotSize,
			height: height + dotSize
		}))), /* @__PURE__ */ import_react.createElement(SetErrorBarContext, {
			xAxisId,
			yAxisId,
			data: points,
			dataPointFormatter: errorBarDataPointFormatter,
			errorBarOffset: 0
		}, /* @__PURE__ */ import_react.createElement(RenderCurve, {
			props: this.props,
			clipPathId
		}))), /* @__PURE__ */ import_react.createElement(ActivePoints, {
			activeDot: this.props.activeDot,
			points,
			mainColor: this.props.stroke,
			itemDataKey: this.props.dataKey,
			clipPath: activePointsClipPath
		}));
	}
};
var defaultLineProps = {
	activeDot: true,
	animateNewValues: true,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	connectNulls: false,
	dot: true,
	fill: "#fff",
	hide: false,
	isAnimationActive: "auto",
	label: false,
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: DefaultZIndexes.line,
	type: "linear"
};
function LineImpl(props) {
	var _resolveDefaultProps = resolveDefaultProps(props, defaultLineProps), { activeDot, animateNewValues, animationBegin, animationDuration, animationEasing, connectNulls, dot, hide, isAnimationActive, label, legendType, xAxisId, yAxisId, id } = _resolveDefaultProps, everythingElse = _objectWithoutProperties$1(_resolveDefaultProps, _excluded3);
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var plotArea = usePlotArea();
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var points = useAppSelector((state) => selectLinePoints(state, xAxisId, yAxisId, isPanorama, id));
	if (layout !== "horizontal" && layout !== "vertical" || points == null || plotArea == null) return null;
	var { height, width, x: left, y: top } = plotArea;
	return /* @__PURE__ */ import_react.createElement(LineWithState, _extends$1({}, everythingElse, {
		id,
		connectNulls,
		dot,
		activeDot,
		animateNewValues,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive,
		hide,
		label,
		legendType,
		xAxisId,
		yAxisId,
		points,
		layout,
		height,
		width,
		left,
		top,
		needClip
	}));
}
function computeLinePoints(_ref7) {
	var { layout, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData } = _ref7;
	return displayedData.map((entry, index) => {
		var value = getValueByDataKey(entry, dataKey);
		if (layout === "horizontal") {
			var _x = getCateCoordinateOfLine({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				entry,
				index
			});
			var _y = isNullish(value) ? null : yAxis.scale.map(value);
			return {
				x: _x,
				y: _y !== null && _y !== void 0 ? _y : null,
				value,
				payload: entry
			};
		}
		var x = isNullish(value) ? null : xAxis.scale.map(value);
		var y = getCateCoordinateOfLine({
			axis: yAxis,
			ticks: yAxisTicks,
			bandSize,
			entry,
			index
		});
		if (x == null || y == null) return null;
		return {
			x,
			y,
			value,
			payload: entry
		};
	}).filter(Boolean);
}
function LineFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultLineProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "line"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromAreaData(props) }), /* @__PURE__ */ import_react.createElement(SetLineTooltipEntrySettings, {
		dataKey: props.dataKey,
		data: props.data,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		unit: props.unit,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(SetCartesianGraphicalItem, {
		type: "line",
		id,
		data: props.data,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		hide: props.hide,
		isPanorama
	}), /* @__PURE__ */ import_react.createElement(LineImpl, _extends$1({}, props, { id }))));
}
/**
* @provides LabelListContext
* @provides ErrorBarContext
* @consumes CartesianChartContext
*/
var Line = /* @__PURE__ */ import_react.memo(LineFn, propsAreEqual);
Line.displayName = "Line";
//#endregion
//#region node_modules/recharts/es6/chart/LineChart.js
var allowedTooltipTypes$1 = ["axis"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var LineChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "LineChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes$1,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
//#endregion
//#region node_modules/recharts/es6/state/ReportPolarOptions.js
function ReportPolarOptions(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(updatePolarOptions(props));
	}, [dispatch, props]);
	return null;
}
//#endregion
//#region node_modules/recharts/es6/chart/PolarChart.js
var _excluded = ["layout"];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* These default props are the same for all PolarChart components.
*/
var defaultPolarChartProps = _objectSpread$1({
	accessibilityLayer: true,
	stackOffset: "none",
	barCategoryGap: "10%",
	barGap: 4,
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	reverseStackOrder: false,
	syncMethod: "index",
	layout: "radial",
	responsive: false,
	cx: "50%",
	cy: "50%",
	innerRadius: 0,
	outerRadius: "80%"
}, initialEventSettingsState);
/**
* These props are required for the PolarChart to function correctly.
* Users usually would not need to specify these explicitly,
* because the convenience components like PieChart, RadarChart, etc.
* will provide these defaults.
* We can't have the defaults in this file because each of those convenience components
* have their own opinions about what they should be.
*/
/**
* These are one-time, immutable options that decide the chart's behavior.
* Users who wish to call CartesianChart may decide to pass these options explicitly,
* but usually we would expect that they use one of the convenience components like PieChart, RadarChart, etc.
*/
var PolarChart = /* @__PURE__ */ (0, import_react.forwardRef)(function PolarChart(props, ref) {
	var _polarChartProps$id;
	var polarChartProps = resolveDefaultProps(props.categoricalChartProps, defaultPolarChartProps);
	var { layout } = polarChartProps, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
	var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher } = props;
	var options = {
		chartName,
		defaultTooltipEventType,
		validateTooltipEventTypes,
		tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /* @__PURE__ */ import_react.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
	}, /* @__PURE__ */ import_react.createElement(ChartDataContextProvider, { chartData: polarChartProps.data }), /* @__PURE__ */ import_react.createElement(ReportMainChartProps, {
		layout,
		margin: polarChartProps.margin
	}), /* @__PURE__ */ import_react.createElement(ReportEventSettings, {
		throttleDelay: polarChartProps.throttleDelay,
		throttledEvents: polarChartProps.throttledEvents
	}), /* @__PURE__ */ import_react.createElement(ReportChartProps, {
		baseValue: void 0,
		accessibilityLayer: polarChartProps.accessibilityLayer,
		barCategoryGap: polarChartProps.barCategoryGap,
		maxBarSize: polarChartProps.maxBarSize,
		stackOffset: polarChartProps.stackOffset,
		barGap: polarChartProps.barGap,
		barSize: polarChartProps.barSize,
		syncId: polarChartProps.syncId,
		syncMethod: polarChartProps.syncMethod,
		className: polarChartProps.className,
		reverseStackOrder: polarChartProps.reverseStackOrder
	}), /* @__PURE__ */ import_react.createElement(ReportPolarOptions, {
		cx: polarChartProps.cx,
		cy: polarChartProps.cy,
		startAngle: polarChartProps.startAngle,
		endAngle: polarChartProps.endAngle,
		innerRadius: polarChartProps.innerRadius,
		outerRadius: polarChartProps.outerRadius
	}), /* @__PURE__ */ import_react.createElement(CategoricalChart, _extends({}, otherCategoricalProps, { ref })));
});
//#endregion
//#region node_modules/recharts/es6/chart/RadarChart.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var allowedTooltipTypes = ["axis"];
var defaultRadarChartProps = _objectSpread(_objectSpread({}, defaultPolarChartProps), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
});
/**
* @consumes ResponsiveContainerContext
* @provides PolarViewBoxContext
* @provides PolarChartContext
*/
var RadarChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var propsWithDefaults = resolveDefaultProps(props, defaultRadarChartProps);
	return /* @__PURE__ */ import_react.createElement(PolarChart, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: propsWithDefaults,
		ref
	});
});
//#endregion
//#region src/components/charts/TrendChart.jsx
var TrendChart = ({ data = [] }) => {
	if (data.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 flex items-center justify-center border border-white/5 bg-slate-950/20 rounded-2xl select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500 font-semibold",
			children: "No medical history records available."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full h-72",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
				margin: {
					top: 10,
					right: 10,
					left: -20,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						stroke: "rgba(255,255,255,0.03)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "month",
						stroke: "rgba(255,255,255,0.3)",
						tick: {
							fontSize: 10,
							fontWeight: "bold"
						},
						dy: 8
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "left",
						stroke: "rgba(6, 182, 212, 0.4)",
						tick: {
							fontSize: 10,
							fontWeight: "bold"
						},
						domain: ["auto", "auto"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "right",
						orientation: "right",
						stroke: "rgba(139, 92, 246, 0.4)",
						tick: {
							fontSize: 10,
							fontWeight: "bold"
						},
						domain: ["auto", "auto"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
						background: "rgba(15,23,42,0.95)",
						border: "1px solid rgba(255,255,255,0.1)",
						borderRadius: "12px",
						fontSize: "11px",
						color: "#e2e8f0",
						boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
						verticalAlign: "top",
						height: 36,
						iconType: "circle",
						wrapperStyle: {
							fontSize: "11px",
							fontWeight: "bold"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "left",
						type: "monotone",
						dataKey: "glucose",
						name: "Plasma Glucose (mg/dL)",
						stroke: "#06b6d4",
						strokeWidth: 3,
						activeDot: {
							r: 6,
							fill: "#06b6d4",
							stroke: "#020817",
							strokeWidth: 2
						},
						dot: {
							r: 4,
							fill: "#020817",
							stroke: "#06b6d4",
							strokeWidth: 2
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "right",
						type: "monotone",
						dataKey: "bmi",
						name: "Body Mass Index (BMI)",
						stroke: "#8b5cf6",
						strokeWidth: 3,
						activeDot: {
							r: 6,
							fill: "#8b5cf6",
							stroke: "#020817",
							strokeWidth: 2
						},
						dot: {
							r: 4,
							fill: "#020817",
							stroke: "#8b5cf6",
							strokeWidth: 2
						}
					})
				]
			})
		})
	});
};
//#endregion
//#region src/components/charts/HealthRadar.jsx
var HealthRadar = ({ currentRecord }) => {
	if (!currentRecord) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 flex items-center justify-center border border-white/5 bg-slate-950/20 rounded-2xl select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500 font-semibold",
			children: "No active biomarker record loaded."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full h-56 flex items-center justify-center select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
				cx: "50%",
				cy: "50%",
				outerRadius: "75%",
				data: [
					{
						subject: "Plasma Glucose",
						value: Math.min(currentRecord.glucose / NORMAL_RANGES.glucose.max * 100, 150),
						fullMark: 150
					},
					{
						subject: "Serum Insulin",
						value: Math.min(currentRecord.insulin / NORMAL_RANGES.insulin.max * 100, 150),
						fullMark: 150
					},
					{
						subject: "Body Mass Index",
						value: Math.min(currentRecord.bmi / NORMAL_RANGES.bmi.max * 100, 150),
						fullMark: 150
					},
					{
						subject: "Age Factor",
						value: Math.min(currentRecord.age / 75 * 100, 150),
						fullMark: 150
					}
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "rgba(255,255,255,0.05)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
						dataKey: "subject",
						stroke: "rgba(255,255,255,0.4)",
						tick: {
							fontSize: 9,
							fontWeight: "bold"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
						angle: 30,
						domain: [0, 150],
						stroke: "transparent",
						tick: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
						name: "Patient Biomarkers",
						dataKey: "value",
						stroke: "#8b5cf6",
						fill: "#8b5cf6",
						fillOpacity: .25
					})
				]
			})
		})
	});
};
//#endregion
//#region src/pages/Dashboard/index.jsx
var Dashboard = () => {
	const [history, setHistory] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [reportLoading, setReportLoading] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const toast = useToast();
	const navigate = useNavigate();
	const fetchData = async () => {
		try {
			setHistory((await healthAPI.getHistory()).data);
		} catch (err) {
			toast.error("Failed to load patient clinical history records.", "Sync Failed");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchData();
	}, []);
	const handleGenerateReport = async () => {
		setReportLoading(true);
		try {
			const response = await reportsAPI.generateReport();
			toast.success(response.data.message || "Clinical PDF successfully generated.", "Report Compiled");
			navigate("/reports");
		} catch (err) {
			toast.error(err.response?.data?.detail || "Failed to generate visual report PDF.", "Compile Error");
		} finally {
			setReportLoading(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[50vh] flex flex-col items-center justify-center gap-3 select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-slate-500 font-bold tracking-wider uppercase",
			children: "Fetching Health Dossier..."
		})]
	});
	const currentRecord = history.length > 0 ? [...history].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] : null;
	const previousRecord = history.length > 1 ? [...history].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[1] : null;
	const getDiff = (key) => {
		if (!currentRecord || !previousRecord) return null;
		return parseFloat((currentRecord[key] - previousRecord[key]).toFixed(1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 select-none text-slate-100 pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-black bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent",
					children: ["Welcome back, ", user?.full_name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider",
					children: "Clinical Diagnostic Dashboard Baseline"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 w-full sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "glass",
					onClick: handleGenerateReport,
					loading: reportLoading,
					className: "flex-1 sm:flex-initial text-xs font-bold py-2 border-white/5 hover:border-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 14 }), " Compile Report"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "primary",
					onClick: () => navigate("/upload"),
					className: "flex-1 sm:flex-initial text-xs font-bold py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlus, { size: 14 }), " Upload Biometrics"]
				})]
			})]
		}), history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-8 text-center flex flex-col items-center justify-center gap-4 border-dashed border-white/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 animate-pulse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1 max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-slate-200 text-sm",
						children: "No Medical Biomarkers Available"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-400 text-xs leading-relaxed",
						children: "No diagnostic biometrics have been logged yet for your clinical profile. Upload metrics to run Explainable AI models."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: () => navigate("/upload"),
					className: "px-6 text-xs font-bold",
					children: "Log Biometrics Now"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			currentRecord?.outcome === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				glow: "rose",
				className: "p-4 bg-rose-500/5 border-rose-500/20 flex gap-3.5 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { size: 18 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-black text-rose-400 uppercase tracking-wider",
						children: "High Risk Profile Confirmed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-400 text-xs leading-relaxed",
						children: "The ensemble neural network classified diabetic risk progression. Review individual biomarker contribution matrices and compile an official clinical recommendation report."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Plasma Glucose",
						value: currentRecord.glucose,
						unit: "mg/dL",
						difference: getDiff("glucose"),
						status: getDiff("glucose") > 0 ? "Elevated (Risk)" : "Reduced (Improved)",
						icon: Activity,
						glow: currentRecord.glucose > 140 ? "rose" : "emerald",
						delay: .05
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Body Mass Index",
						value: currentRecord.bmi,
						unit: "kg/m²",
						difference: getDiff("bmi"),
						status: getDiff("bmi") > 0 ? "Weight Gained" : "Weight Improved",
						icon: Flame,
						glow: currentRecord.bmi >= 30 ? "rose" : "emerald",
						delay: .1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Fasting Insulin",
						value: currentRecord.insulin,
						unit: "μU/mL",
						difference: getDiff("insulin"),
						status: getDiff("insulin") > 0 ? "Hyperinsulinemia" : "Stable",
						icon: Heart,
						glow: currentRecord.insulin > 166 ? "rose" : "emerald",
						delay: .15
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Patient Age",
						value: currentRecord.age,
						unit: "Years",
						status: "Clinical Baseline",
						icon: Calendar,
						glow: "cyan",
						delay: .2
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5 lg:col-span-2 flex flex-col justify-between",
					delay: .25,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between mb-4 pb-3 border-b border-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-slate-200",
								children: "Historical Biomarker Trend Tracking"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] text-slate-500",
								children: "Double-axis progression tracking current Glucose vs. BMI readings"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendChart, { data: history })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5 flex flex-col justify-between",
					delay: .3,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between mb-4 pb-3 border-b border-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-bold text-slate-200",
								children: "Biomarker Index Radar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] text-slate-500",
								children: "A normalized vector map illustrating biological deviations"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthRadar, { currentRecord })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5 relative overflow-hidden flex flex-col justify-between",
					delay: .35,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-slate-200 text-sm",
									children: "Review SHAP Diagnostics"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-400 text-xs leading-relaxed",
									children: "View explainable math arrays quantifying exactly how much each logged metric pushed your risk classification index."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "glass",
							onClick: () => navigate("/predict"),
							className: "w-full text-xs font-bold py-2 mt-4 flex items-center justify-center gap-1.5 border-white/5 hover:border-white/10",
							children: ["Launch XAI Viewer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "p-5 relative overflow-hidden flex flex-col justify-between",
					delay: .4,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full filter blur-xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-slate-200 text-sm",
									children: "Download Medical Report PDF"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-400 text-xs leading-relaxed",
									children: "Export a beautiful clinical-grade ReportLab PDF summarizing all diagnostic thresholds and automated lifestyle recommendations."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "glass",
							onClick: () => navigate("/reports"),
							className: "w-full text-xs font-bold py-2 mt-4 flex items-center justify-center gap-1.5 border-white/5 hover:border-white/10",
							children: ["Go to PDF Drawer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
						})
					]
				})]
			})
		] })]
	});
};
//#endregion
export { Dashboard as default };
