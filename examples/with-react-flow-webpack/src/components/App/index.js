// @flow
import React, { Component } from "react";
import logo from "./react-logo.png";
import "./styles.css";

const App = (): React$Element<"div"> => {
  return (
    <div className="app-container">
      <h1>Welcome to React!</h1>
      <img src={logo} alt="React Logo" id="logo" />
    </div>
  );
};

export default App;
