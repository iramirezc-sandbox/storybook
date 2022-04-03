// @flow
import React from "react";
import Button from "../Button";
import { square } from "../../utils";

const Square = () => (
  <Button
    title="Calculate square of 2"
    onClick={() => {
      console.log(square(2));
    }}
  />
);

export default Square;
