import ButtonDS from "./Button";
import { fn } from "@storybook/test";

export default {
  title: "Components/Button",
  component: ButtonDS,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    hasText: { control: 'boolean' },
    width: { control: "text" },
    hasIcon: { control: 'boolean' },
    iconType: { control: 'select', options: ['search', 'check'] },
  },
};

const Template = (args) => <ButtonDS {...args} />;

export const Variant1 = Template.bind({});
Variant1.args = {
  label: "Variant 1",
  className: "button-variant1",
  width: '120px',
};

export const Variant2 = Template.bind({});
Variant2.args = {
  label: "Variant 2",
  className: "button-variant2",
  width: '120px',
};

export const Variant3 = Template.bind({});
Variant3.args = {
  label: "Variant 3",
  className: "button-variant3",
  width: '120px',
};

export const Variant4 = Template.bind({});
Variant4.args = {
  label: "Variant 4",
  className: "button-variant4",
  width: '120px',
};

export const Variant5 = Template.bind({});
Variant5.args = {
  label: "Variant 5",
  className: "button-variant5",
  width: '120px',
};

export const Variant6 = Template.bind({});
Variant6.args = {
  label: "Variant 6",
  className: "button-variant6",
  width: '120px',
};

export const Variant7 = Template.bind({});
Variant7.args = {
  label: "Variant 7",
  className: "button-variant7",
  width: '120px',
};

export const Variant8 = Template.bind({});
Variant8.args = {
  label: "Variant 7",
  className: "button-variant8",
  width: '120px',
};
