import React from "react";

import { Poster } from "../components/Poster";

export default {
  title: "Example/Poster",
  component: Poster,
};

const Template = (args) => <Poster {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};
