"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Cards.css");
var _MoreVert = _interopRequireDefault(require("@mui/icons-material/MoreVert"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CardDS = _ref => {
  let {
    headerText,
    headerBackgroundColor = "#f5f5f5",
    headerTextColor = "#000",
    actions = [],
    children
  } = _ref;
  const [showActions, setShowActions] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header",
    style: {
      backgroundColor: headerBackgroundColor,
      color: headerTextColor
    }
  }, headerText && /*#__PURE__*/_react.default.createElement("span", {
    className: "card-header-text"
  }, headerText), actions.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "card-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "card-actions-button",
    onClick: () => setShowActions(!showActions)
  }, /*#__PURE__*/_react.default.createElement(_MoreVert.default, null)), showActions && /*#__PURE__*/_react.default.createElement("ul", {
    className: "card-actions-menu"
  }, actions.map((action, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    onClick: action.onClick
  }, action.label))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, children));
};
var _default = exports.default = CardDS;