import React, { useState } from "react";
import CheckRadioDS from "./CheckRadio";
import { fn } from "@storybook/test";

export default {
  title: "Components/Inputs/CheckRadio",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  component: CheckRadioDS,
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    type: {
      control: "select",
      description: "Tipo de campo (Checkbox o Radio)",
      options: ["checkbox", "radio"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    value: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    hasLabel: {control: "boolean"}
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    args.onChange(e);
  };

  return <CheckRadioDS {...args} checked={checked} onChange={handleChange} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "Label descriptivo",
  name: "option",
  value: "checkboxOption",
  checked: false,
  disabled: false,
};