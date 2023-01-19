import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  onClick: () => {
    alert("Button Clicked!");
  },
  children: "Button",
  style: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "5px",
  },
};
