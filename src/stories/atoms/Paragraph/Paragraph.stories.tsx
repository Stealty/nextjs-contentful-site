import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paragraph from "./Paragraph";

export default {
  title: "Molecules/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "John Doe",
};
