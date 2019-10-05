import React from "react";

import logo from "./logo.svg";

var logoStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%"
};

const LoadingApp = () => <img src={logo} style={logoStyle} alt="logo" />;

export default LoadingApp;
