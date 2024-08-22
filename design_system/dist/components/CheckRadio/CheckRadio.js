"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CheckRadio.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CheckRadioDS = _ref => {
  let {
    label,
    hasLabel,
    type = "checkbox",
    name,
    value,
    checked,
    onChange,
    disabled = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: label,
    type: type,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: label
  }, hasLabel && label));
};
var _default = exports.default = CheckRadioDS;