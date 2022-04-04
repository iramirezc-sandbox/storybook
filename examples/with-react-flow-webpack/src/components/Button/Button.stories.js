// @flow
import React from "react";

import Button from "./index";
import type { Props as ButtonProps } from "./index";

export default {
  title: "Library/Button",
  component: Button,
};

const handleClick = () => console.log("Click!");

const Template = (args: ButtonProps) => (
  <Button {...args} onClick={handleClick} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning",
  color: "warning",
};

export const Error = Template.bind({});
Error.args = {
  title: "Error",
  color: "error",
};
