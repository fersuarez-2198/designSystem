"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Field.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FieldDS = _ref => {
  let {
    label,
    value: initialValue,
    onChange,
    type = "text",
    width = "100%",
    errorMessage,
    status,
    id
  } = _ref;
  const [value, setValue] = (0, _react.useState)(initialValue);
  const handleChange = e => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  const getStatusClass = () => {
    switch (status) {
      case "success":
        return "input__success";
      case "error":
        return "input__error";
      default:
        return "";
    }
  };
  const getLabelColor = () => {
    switch (status) {
      case "success":
        return "green";
      case "error":
        return "red";
      default:
        return "gray";
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "inputForm",
    style: {
      width
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    id: id,
    className: "form__input ".concat(getStatusClass()),
    autoComplete: "off",
    placeholder: " ",
    value: value,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "inputField",
    className: "form__label",
    style: {
      color: getLabelColor()
    }
  }, label), status === "error" && errorMessage && /*#__PURE__*/_react.default.createElement("span", {
    className: "field-error-message"
  }, errorMessage));
};
var _default = exports.default = FieldDS;