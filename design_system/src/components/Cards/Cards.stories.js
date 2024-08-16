import React from "react";
import Card from "./Cards";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headerText: { control: "text" },
    headerBackgroundColor: { control: "color" },
    headerTextColor: { control: "color" },
    actions: { control: "object" },
    children: { control: "text" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerText: "Título de la Card",
  headerBackgroundColor: "#3f51b5",
  headerTextColor: "#fff",
  actions: [
    { label: "Acción 1", onClick: () => alert("Acción 1 seleccionada") },
    { label: "Acción 2", onClick: () => alert("Acción 2 seleccionada") },
  ],
  children: (
    <div>
      <p>
        Este es el contenido de la card. Puede contener cualquier tipo de
        contenido, incluyendo texto, imágenes, o componentes.
      </p>
    </div>
  ),
};

export const WithoutActions = Template.bind({});
WithoutActions.args = {
  headerText: "Card sin Acciones",
  headerBackgroundColor: "#f5f5f5",
  headerTextColor: "#000",
  actions: [],
  children: (
    <div>
      <p>Este es el contenido de la card sin acciones en el header.</p>
    </div>
  ),
};
