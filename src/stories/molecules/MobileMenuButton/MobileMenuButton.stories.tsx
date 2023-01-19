import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MobileMenuButtonDoc from "./MobileMenuButtonDoc";
import MobileMenuButton from "./MobileMenuButton";

export default {
  title: "Molecules/MobileMenuButton",
  component: MobileMenuButton,
  parameters: {
    docs: {
      page: MobileMenuButtonDoc,
    },
  },
} as ComponentMeta<typeof MobileMenuButton>;

const Template: ComponentStory<typeof MobileMenuButton> = (args) => (
  <MobileMenuButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isActive: false,
  setIsActive: () => {},
};

export const ActiveMenu = Template.bind({});
ActiveMenu.args = {
  isActive: true,
  setIsActive: () => {},
};
