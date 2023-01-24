import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleCard from "./ArticleCard";

export default {
  title: "Molecules/ArticleCard",
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image:
    "https://images.ctfassets.net/wmepff9dqgh3/2J4BFu2UfJfQWs8pBe88ye/45e33fc39c7322dc2821e654f12335f3/10b88c68-typescript-logo.png?h=250",
  alt: "typescript logo",
  author: "Filipe Deschamps",
  title: "Como não aprender TypeScript",
  date: "18 Jan 2023",
};
