"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Variant8 = exports.Variant7 = exports.Variant6 = exports.Variant5 = exports.Variant4 = exports.Variant3 = exports.Variant2 = exports.Variant1 = void 0;
var _Button = _interopRequireDefault(require("./Button"));
var _test = require("@storybook/test");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: "Components/Button",
  component: _Button.default,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    onClick: (0, _test.fn)()
  },
  argTypes: {
    hasText: {
      control: 'boolean'
    },
    width: {
      control: "text"
    },
    hasIcon: {
      control: 'boolean'
    },
    iconType: {
      control: 'select',
      options: ['search', 'check']
    }
  }
};
const Template = args => /*#__PURE__*/React.createElement(_Button.default, args);
const Variant1 = exports.Variant1 = Template.bind({});
Variant1.args = {
  label: "Variant 1",
  className: "button-variant1",
  width: '120px'
};
const Variant2 = exports.Variant2 = Template.bind({});
Variant2.args = {
  label: "Variant 2",
  className: "button-variant2",
  width: '120px'
};
const Variant3 = exports.Variant3 = Template.bind({});
Variant3.args = {
  label: "Variant 3",
  className: "button-variant3",
  width: '120px'
};
const Variant4 = exports.Variant4 = Template.bind({});
Variant4.args = {
  label: "Variant 4",
  className: "button-variant4",
  width: '120px'
};
const Variant5 = exports.Variant5 = Template.bind({});
Variant5.args = {
  label: "Variant 5",
  className: "button-variant5",
  width: '120px'
};
const Variant6 = exports.Variant6 = Template.bind({});
Variant6.args = {
  label: "Variant 6",
  className: "button-variant6",
  width: '120px'
};
const Variant7 = exports.Variant7 = Template.bind({});
Variant7.args = {
  label: "Variant 7",
  className: "button-variant7",
  width: '120px'
};
const Variant8 = exports.Variant8 = Template.bind({});
Variant8.args = {
  label: "Variant 7",
  className: "button-variant8",
  width: '120px'
};