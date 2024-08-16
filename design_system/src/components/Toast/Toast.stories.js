import React from "react";
import Toast from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["error", "warning", "loading", "success"],
    },
    message: { control: "text" },
    showCloseButton: { control: "boolean" },
    duration: { control: "text"},
  },
};

const Template = (args) => <Toast {...args} />;

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "Esto es un mensaje de error.",
  showCloseButton: true,
  duration: Infinity,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  message: "Esto es una advertencia.",
  showCloseButton: true,
  duration: Infinity,
};

export const Loading = Template.bind({});
Loading.args = {
  type: "loading",
  message: "Cargando, por favor espere...",
  showCloseButton: true,
  duration: Infinity,
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "¡Operación exitosa!",
  showCloseButton: true,
  duration: Infinity,
};
