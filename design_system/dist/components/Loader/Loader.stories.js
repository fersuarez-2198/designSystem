"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoaderScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Loader = _interopRequireDefault(require("./Loader"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _default = exports.default = {
  title: "Components/Loader",
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  component: _Loader.default,
  argTypes: {
    height: {
      control: "text"
    }
  }
};
const Template = args => {
  const [checked, setChecked] = (0, _react.useState)(args.checked);
  const handleChange = e => {
    setChecked(e.target.checked);
    args.onChange(e);
  };
  return /*#__PURE__*/_react.default.createElement(_Loader.default, _extends({}, args, {
    checked: checked,
    onChange: handleChange
  }));
};
const LoaderScreen = exports.LoaderScreen = Template.bind({});
LoaderScreen.args = {
  height: "300"
};