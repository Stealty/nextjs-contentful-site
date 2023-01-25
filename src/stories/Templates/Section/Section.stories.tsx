import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section from "./Section";

export default {
  title: "Pages/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = () => (
  // eslint-disable-next-line react/no-children-prop
  <Section bgColor={"light"} children={undefined} />
);

export const Default = Template.bind({});
