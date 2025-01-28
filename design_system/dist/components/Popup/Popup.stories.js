"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Medium = exports.LargeWithReject = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Popup = _interopRequireDefault(require("./Popup"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    body: {
      control: "text"
    },
    acceptText: {
      control: "text"
    },
    showRejectButton: {
      control: "boolean"
    },
    rejectText: {
      control: "text"
    },
    isVisible: {
      control: "boolean"
    },
    onClose: {
      action: "closed"
    }
  }
};
const Template = args => {
  const [isVisible, setIsVisible] = (0, _react.useState)(args.isVisible);
  const handleClose = () => {
    setIsVisible(false);
  };
  return /*#__PURE__*/_react.default.createElement(_Popup.default, _extends({}, args, {
    isVisible: isVisible,
    onClose: handleClose
  }));
};
const Medium = exports.Medium = Template.bind({});
Medium.args = {
  size: "medium",
  showCloseButton: true,
  title: "Título del Popup",
  body: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Este es el cuerpo del popup. Puede contener texto, im\xE1genes, o cualquier otro contenido."), /*#__PURE__*/_react.default.createElement("img", {
    src: "https://via.placeholder.com/150",
    alt: "Example"
  })),
  acceptText: "Aceptar",
  showRejectButton: false,
  isVisible: true,
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar")
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
  acceptText: "Aceptar",
  rejectText: "Rechazar",
  showRejectButton: true,
  isVisible: true,
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar")
};