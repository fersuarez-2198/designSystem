"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Check = _interopRequireDefault(require("@mui/icons-material/Check"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Importación de  iconos de Material Icons

const ButtonDS = _ref => {
  let {
    label,
    hasText,
    onClick,
    className,
    width,
    hasIcon,
    iconType
  } = _ref;
  const style = hasText ? {
    width: width || "180px",
    // Valor predeterminado si no se proporciona `width`
    height: "46px",
    borderRadius: "20px"
  } : {
    width: "30px",
    height: "30px",
    borderRadius: "50%"
  };
  const renderIcon = () => {
    if (!hasIcon) return null;
    switch (iconType) {
      case 'search':
        return /*#__PURE__*/_react.default.createElement(_Search.default, {
          className: "button-icon"
        });
      case 'check':
        return /*#__PURE__*/_react.default.createElement(_Check.default, {
          className: "button-icon"
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button ".concat(className),
    onClick: onClick,
    style: style
  }, hasText && label, renderIcon());
};
var _default = exports.default = ButtonDS;