import React, { useState } from "react";
import Loader from "./Loader";

export default {
  title: "Components/Loader",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Loader,
  argTypes: {
    height: { control: "text" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    args.onChange(e);
  };

  return <Loader {...args} checked={checked} onChange={handleChange} />;
};

export const LoaderScreen = Template.bind({});
LoaderScreen.args = {
  height:"300",
};