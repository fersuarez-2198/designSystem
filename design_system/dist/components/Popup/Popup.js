"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Popup.css");
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Button = _interopRequireDefault(require("../Button/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PopupDS = _ref => {
  let {
    size,
    showCloseButton,
    title,
    body,
    // Aquí seguimos usando `body` pero permitiendo que acepte JSX
    onAccept,
    onReject,
    acceptText,
    rejectText,
    showRejectButton
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup ".concat(size === "large" ? "popup-large" : "popup-medium")
  }, showCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "popup-close",
    onClick: onReject || onAccept
  }, /*#__PURE__*/_react.default.createElement(_Close.default, {
    className: "toast_closeButton"
  })), title && /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-body"
  }, body), " ", /*#__PURE__*/_react.default.createElement("div", {
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
  }))));
};
var _default = exports.default = PopupDS;