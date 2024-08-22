"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithoutActions = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Cards = _interopRequireDefault(require("./Cards"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  title: "Components/Card",
  component: _Cards.default,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    headerText: {
      control: "text"
    },
    headerBackgroundColor: {
      control: "color"
    },
    headerTextColor: {
      control: "color"
    },
    actions: {
      control: "object"
    },
    children: {
      control: "text"
    }
  }
};
const Template = args => /*#__PURE__*/_react.default.createElement(_Cards.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  headerText: "Título de la Card",
  headerBackgroundColor: "#3f51b5",
  headerTextColor: "#fff",
  actions: [{
    label: "Acción 1",
    onClick: () => alert("Acción 1 seleccionada")
  }, {
    label: "Acción 2",
    onClick: () => alert("Acción 2 seleccionada")
  }],
  children: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Este es el contenido de la card. Puede contener cualquier tipo de contenido, incluyendo texto, im\xE1genes, o componentes."))
};
const WithoutActions = exports.WithoutActions = Template.bind({});
WithoutActions.args = {
  headerText: "Card sin Acciones",
  headerBackgroundColor: "#f5f5f5",
  headerTextColor: "#000",
  actions: [],
  children: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Este es el contenido de la card sin acciones en el header."))
};