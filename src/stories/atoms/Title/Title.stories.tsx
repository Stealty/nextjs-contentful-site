import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Title from "./Title";

export default {
  title: "Molecules/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Title text",
};
