import React from "react";
import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["medium", "large"] },
    showCloseButton: { control: "boolean" },
    title: { control: "text" },// Acepta texto simple para Storybook, pero usaremos JSX en las historias
    acceptText: { control: "text" },
    showRejectButton: { control: "boolean" },
    rejectText: { control: "text" },
  },
};

const Template = (args) => <Popup {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  showCloseButton: true,
  title: "Título del Popup",
  body: (
    <div>
      <p>Este es el cuerpo del popup. Puede contener texto, imágenes, o cualquier otro contenido.</p>
      <img src="https://via.placeholder.com/150" alt="Example" />
    </div>
  ), // Ahora puedes pasar JSX directamente a `body`
  acceptText: "Aceptar",
  onAccept: () => alert("Aceptar"),
};

export const LargeWithReject = Template.bind({});
LargeWithReject.args = {
  size: "large",
  showCloseButton: true,
  title: "Título del Popup Grande",
  body: (
    <div>
      <p>Este es el cuerpo del popup. Puede contener texto, imágenes, o cualquier otro contenido.</p>
      <img src="https://via.placeholder.com/150" alt="Example" />
    </div>
  ), // Pasar contenido JSX más complejo
  acceptText: "Aceptar",
  rejectText: "Rechazar",
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar"),
};
