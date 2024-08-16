"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Warning = exports.Success = exports.Loading = exports.Error = void 0;
var _react = _interopRequireDefault(require("react"));
var _Toast = _interopRequireDefault(require("./Toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: 'Components/Toast',
  component: _Toast.default
};
const Template = args => /*#__PURE__*/_react.default.createElement(_Toast.default, args);
const Error = exports.Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Esto es un mensaje de error.',
  showCloseButton: true,
  duration: 5000
};
const Warning = exports.Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Esto es una advertencia.',
  showCloseButton: true,
  duration: 5000
};
const Loading = exports.Loading = Template.bind({});
Loading.args = {
  type: 'loading',
  message: 'Cargando, por favor espere...',
  showCloseButton: true,
  duration: 5000
};
const Success = exports.Success = Template.bind({});
Success.args = {
  type: 'success',
  message: '¡Operación exitosa!',
  showCloseButton: true,
  duration: 5000
};