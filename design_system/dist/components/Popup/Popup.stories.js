"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Medium = exports.LargeWithReject = void 0;
var _react = _interopRequireDefault(require("react"));
var _Popup = _interopRequireDefault(require("./Popup"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: "Components/Popup",
  component: _Popup.default,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["medium", "large"]
    },
    showCloseButton: {
      control: "boolean"
    },
    title: {
      control: "text"
    },
    // Acepta texto simple para Storybook, pero usaremos JSX en las historias
    acceptText: {
      control: "text"
    },
    showRejectButton: {
      control: "boolean"
    },
    rejectText: {
      control: "text"
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_Popup.default, args);
const Medium = exports.Medium = Template.bind({});
Medium.args = {
  size: "medium",
  showCloseButton: true,
  title: "Título del Popup",
  body: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Este es el cuerpo del popup. Puede contener texto, im\xE1genes, o cualquier otro contenido."), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: "Example"
  })),
  // Ahora puedes pasar JSX directamente a `body`
  acceptText: "Aceptar",
  onAccept: () => alert("Aceptar")
};
const LargeWithReject = exports.LargeWithReject = Template.bind({});
LargeWithReject.args = {
  size: "large",
  showCloseButton: true,
  title: "Título del Popup Grande",
  body: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Este es el cuerpo del popup. Puede contener texto, im\xE1genes, o cualquier otro contenido."), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: "Example"
  })),
  // Pasar contenido JSX más complejo
  acceptText: "Aceptar",
  rejectText: "Rechazar",
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar")
};