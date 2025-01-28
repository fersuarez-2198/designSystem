"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Popup.css");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Button = _interopRequireDefault(require("../Button/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PopupDS = _ref => {
  let {
    size,
    showCloseButton,
    title,
    body,
    onAccept,
    onReject,
    acceptText,
    rejectText,
    showRejectButton,
    isVisible,
    // Prop que controla la visibilidad del modal
    onClose // Prop para manejar el cierre desde el componente padre
  } = _ref;
  const [isAnimating, setIsAnimating] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (isVisible) {
      // Cuando se abre el popup, activa la animación
      setIsAnimating(true);
    } else {
      // Si se cierra, espera la duración de la animación antes de desactivar
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duración de la transición en CSS (0.3s)

      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  const handleOverlayClick = e => {
    if (e.target.className.includes("popup-overlay")) {
      onClose(); // Llamamos a la función de cierre desde el padre
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isVisible || isAnimating) && /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-overlay ".concat(isVisible ? "show" : ""),
    onClick: handleOverlayClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup ".concat(size === "large" ? "popup-large" : "popup-medium", " ").concat(isVisible ? "show" : ""),
    onClick: e => e.stopPropagation()
  }, showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "popup-close",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    className: "toast_closeButton"
  })), title && /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-body"
  }, body), /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-footer"
  }, showRejectButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "button-variant8",
    hasText: true,
    label: rejectText,
    onClick: onReject,
    width: "120px"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "button-variant1",
    hasText: true,
    label: acceptText,
    onClick: onAccept,
    width: "120px"
  })))));
};
var _default = exports.default = PopupDS;