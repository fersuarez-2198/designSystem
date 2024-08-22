"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Toast.css");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Error = _interopRequireDefault(require("@mui/icons-material/Error"));
var _Warning = _interopRequireDefault(require("@mui/icons-material/Warning"));
var _Pending = _interopRequireDefault(require("@mui/icons-material/Pending"));
var _CheckCircle = _interopRequireDefault(require("@mui/icons-material/CheckCircle"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ToastDS = _ref => {
  let {
    type,
    message,
    showCloseButton,
    duration
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);
  if (!visible) return null;
  const getToastStyles = () => {
    switch (type) {
      case "error":
        return "toast-error";
      case "warning":
        return "toast-warning";
      case "loading":
        return "toast-loading";
      case "success":
        return "toast-success";
      default:
        return "";
    }
  };
  const getIcon = () => {
    switch (type) {
      case "error":
        return /*#__PURE__*/_react.default.createElement(_Error.default, {
          className: "toast_errorIcon"
        });
      case "warning":
        return /*#__PURE__*/_react.default.createElement(_Warning.default, {
          className: "toast_warIcon"
        });
      case "loading":
        return /*#__PURE__*/_react.default.createElement(_Pending.default, {
          className: "toast_loadIcon"
        });
      case "success":
        return /*#__PURE__*/_react.default.createElement(_CheckCircle.default, {
          className: "toast_succIcon"
        });
      default:
        return "";
    }
  };
  const truncateMessage = msg => {
    if (msg.length > 100) {
      return "".concat(msg.substring(0, 100), "...");
    }
    return msg;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toast ".concat(getToastStyles())
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-icon"
  }, getIcon()), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-message"
  }, truncateMessage(message)), showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "toast-close",
    onClick: () => setVisible(false)
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    className: "toast_closeButton"
  })));
};
var _default = exports.default = ToastDS;