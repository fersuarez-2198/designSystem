"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Success = exports.Error = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Field = _interopRequireDefault(require("./Field"));
var _test = require("@storybook/test");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _default = exports.default = {
  title: "Components/Inputs/Field",
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: {
    onClick: (0, _test.fn)()
  },
  component: _Field.default,
  argTypes: {
    label: {
      name: "label",
      control: "text",
      description: "Etiqueta identificadora para el campo",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "Text"
        }
      }
    },
    onChange: {
      action: "changed",
      description: "Función que captura el cambio del campo",
      table: {
        type: {
          summary: "function"
        },
        defaultValue: {
          summary: ""
        }
      }
    },
    value: {
      control: "text",
      description: "Valor que se le asigna al campo",
      table: {
        type: {
          summary: "any"
        },
        defaultValue: {
          summary: ""
        }
      }
    },
    type: {
      control: "select",
      description: "Tipo de campo (numérico, texto, date, email, password)",
      options: ["text", "date", "datetime-local", "email", "number", "password"],
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "text"
        }
      }
    },
    width: {
      control: "text",
      description: "Medida del campo",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "200px"
        }
      }
    },
    id: {
      control: "text",
      description: "Identificador único del campo",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: ""
        }
      }
    },
    status: {
      control: "select",
      description: "Estado del campo",
      options: ["default", "success", "error"],
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'default'
        }
      }
    },
    errorMessage: {
      control: "text",
      description: "Mensaje de error o ayuda del campo",
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'El campo es requerido o contiene errores'
        }
      }
    }
  }
};
const Template = args => {
  const [value, setValue] = (0, _react.useState)(args.value);
  const handleChange = e => {
    setValue(e.target.value);
    args.onChange(e);
  };
  return /*#__PURE__*/_react.default.createElement(_Field.default, _extends({}, args, {
    value: value,
    onChange: handleChange
  }));
};
const Default = exports.Default = Template.bind({});
Default.args = {
  label: "Text",
  id: "defaultInput",
  value: "",
  type: "text",
  width: "200px",
  status: "default",
  errorMessage: ""
};
const Error = exports.Error = Template.bind({});
Error.args = {
  label: "Text",
  id: "errorInput",
  type: "text",
  width: "200px",
  status: "error",
  errorMessage: "El campo es requerido o contiene errores"
};
const Success = exports.Success = Template.bind({});
Success.args = {
  label: "Text",
  id: "successInput",
  value: "",
  type: "text",
  width: "200px",
  status: "success",
  errorMessage: ""
};