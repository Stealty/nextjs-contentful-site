import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "./Logo";

export default {
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: 48,
  width: 152,
  source: "/logo.png",
  alt: "Agency logo",
};
