"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Toast.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Toast = _ref => {
  let {
    type,
    message,
    showCloseButton,
    duration
  } = _ref;
  const [visible, setVisible] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);
  if (!visible) return null;
  const getToastStyles = () => {
    switch (type) {
      case 'error':
        return 'toast-error';
      case 'warning':
        return 'toast-warning';
      case 'loading':
        return 'toast-loading';
      case 'success':
        return 'toast-success';
      default:
        return '';
    }
  };
  const getIcon = () => {
    switch (type) {
      case 'error':
        return '❌';
      // Icono de error
      case 'warning':
        return '⚠️';
      // Icono de advertencia
      case 'loading':
        return '⏳';
      // Icono de cargando
      case 'success':
        return '✅';
      // Icono de éxito
      default:
        return '';
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toast ".concat(getToastStyles())
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-icon"
  }, getIcon()), /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-message"
  }, message), showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "toast-close",
    onClick: () => setVisible(false)
  }, "\u2716\uFE0F"));
};
Toast.propTypes = {
  type: _propTypes.default.oneOf(['error', 'warning', 'loading', 'success']).isRequired,
  message: _propTypes.default.string.isRequired,
  showCloseButton: _propTypes.default.bool,
  duration: _propTypes.default.number
};
Toast.defaultProps = {
  showCloseButton: true,
  duration: 5000 // 5 segundos por defecto
};
var _default = exports.default = Toast;