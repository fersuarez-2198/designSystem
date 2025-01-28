import React, { useState } from "react";
import PopupDS from "./Popup";

export default {
  title: "Components/Popup",
  component: PopupDS,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["medium", "large"] },
    showCloseButton: { control: "boolean" },
    title: { control: "text" },
    body: { control: "text" },
    acceptText: { control: "text" },
    showRejectButton: { control: "boolean" },
    rejectText: { control: "text" },
    isVisible: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <PopupDS {...args} isVisible={isVisible} onClose={handleClose} />
  );
};

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
  ),
  acceptText: "Aceptar",
  showRejectButton: false,
  isVisible: true,
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar"),
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
  ),
  acceptText: "Aceptar",
  rejectText: "Rechazar",
  showRejectButton: true,
  isVisible: true, 
  onAccept: () => alert("Aceptar"),
  onReject: () => alert("Rechazar"),
};
