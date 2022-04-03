// @flow
import React from "react";
import "./styles.css";

type Props = {
  title: string,
  onClick: function,
  color?: string,
};

const Button = ({
  title,
  color = "primary",
  onClick,
}: Props): React$Element<"button"> => {
  const classNames = ["button", `button-${color}`].join(" ");

  return (
    <button onClick={onClick} className={classNames}>
      {title}
    </button>
  );
};

export default Button;
