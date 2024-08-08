import React, { useState } from "react";
import Field from "./Field";
import { fn } from "@storybook/test";

export default {
  title: "Components/Inputs/Field",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  component: Field,
  argTypes: {
    label: {
      name: "label",
      control: "text",
      description: "Etiqueta identificadora para el campo",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Text" },
      },
    },
    onChange: {
      action: "changed",
      description: "Función que captura el cambio del campo",
      table: {
        type: { summary: "function" },
        defaultValue: { summary: "" },
      },
    },
    value: {
      control: "text",
      description: "Valor que se le asigna al campo",
      table: {
        type: { summary: "any" },
        defaultValue: { summary: "" },
      },
    },
    type: {
      control: "select",
      description: "Tipo de campo (numérico, texto, date, email, password)",
      options: ["text", "date", "datetime-local", "email", "number", "password"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    width: {
      control: "text",
      description: "Medida del campo",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "200px" },
      },
    },
    id: {
      control: "text",
      description: "Identificador único del campo",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    status: {
      control: "select",
      description: "Estado del campo",
      options: ["default", "success", "error"],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    errorMessage: {
      control: "text",
      description: "Mensaje de error o ayuda del campo",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'El campo es requerido o contiene errores' },
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    args.onChange(e);
  };

  return <Field {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Text",
  id: "defaultInput",
  value: "",
  type: "text",
  width: "200px",
  status: "default",
  errorMessage: "",
};

export const Error = Template.bind({});
Error.args = {
  label: "Text",
  id: "errorInput",
  type: "text",
  width: "200px",
  status: "error",
  errorMessage: "El campo es requerido o contiene errores",
};

export const Success = Template.bind({});
Success.args = {
  label: "Text",
  id: "successInput",
  value: "",
  type: "text",
  width: "200px",
  status: "success",
  errorMessage: "",
};
