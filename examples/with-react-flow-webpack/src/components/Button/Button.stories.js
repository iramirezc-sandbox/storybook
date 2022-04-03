// @flow
import React from "react";

import Button from "./index";

export default {
  title: "Library/Button",
  component: Button,
};

const handleClick = () => console.log("Click!");

export const Primary = () => <Button title="Primary" onClick={handleClick} />;

export const Warning = () => (
  <Button title="Warning" color="warning" onClick={handleClick} />
);

export const Error = () => (
  <Button title="Error" color="error" onClick={handleClick} />
);
