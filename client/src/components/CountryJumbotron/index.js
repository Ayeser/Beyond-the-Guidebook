import React from "react";
import "./style.css";

function CountryJumbotron({ children }) {
  return (
    <div
      className="countryjum"
    >
      {children}
    </div>
  );
}

export default CountryJumbotron;
