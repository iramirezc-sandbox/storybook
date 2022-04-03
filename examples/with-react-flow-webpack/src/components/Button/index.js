// @flow
import React from "react";
import "./styles.css";

type Props = {
  title: string,
  onClick: function,
  color?: string,
};

const Button = ({ title, color, onClick }: Props): React$Element<"button"> => {
  const classNames = ["button-default"];

  if (color === "error") {
    classNames.push("button-error");
  } else if (color === "warning") {
    classNames.push("button-warning");
  }

  return (
    <button onClick={onClick} className={classNames.join(" ")}>
      {title}
    </button>
  );
};

export default Button;
