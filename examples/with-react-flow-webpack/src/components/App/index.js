// @flow
import React, { Component } from "react";
import logo from "./react-logo.png";
import Button from "../Button";
import "./styles.css";

const App = (): React$Element<"div"> => {
  return (
    <div className="app-container">
      <h1>Welcome to React!</h1>
      <img src={logo} alt="React Logo" id="logo" />
      <Button
        onClick={() => console.log("Click!")}
        title="Click me now!"
        color="warning"
      />
    </div>
  );
};

export default App;
