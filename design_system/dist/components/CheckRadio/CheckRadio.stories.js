"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CheckRadio = _interopRequireDefault(require("./CheckRadio"));
var _test = require("@storybook/test");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _default = exports.default = {
  title: "Components/Inputs/CheckRadio",
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    onClick: (0, _test.fn)()
  },
  component: _CheckRadio.default,
  argTypes: {
    label: {
      control: "text"
    },
    name: {
      control: "text"
    },
    type: {
      control: "select",
      description: "Tipo de campo (Checkbox o Radio)",
      options: ["checkbox", "radio"],
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "text"
        }
      }
    },
    value: {
      control: "text"
    },
    checked: {
      control: "boolean"
    },
    onChange: {
      action: "changed"
    },
    disabled: {
      control: "boolean"
    },
    hasLabel: {
      control: "boolean"
    }
  }
};
const Template = args => {
  const [checked, setChecked] = (0, _react.useState)(args.checked);
  const handleChange = e => {
    setChecked(e.target.checked);
    args.onChange(e);
  };
  return /*#__PURE__*/_react.default.createElement(_CheckRadio.default, _extends({}, args, {
    checked: checked,
    onChange: handleChange
  }));
};
const Checkbox = exports.Checkbox = Template.bind({});
Checkbox.args = {
  label: "Label descriptivo",
  name: "option",
  value: "checkboxOption",
  checked: false,
  disabled: false
};