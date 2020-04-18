import React from "react";
import "./style.css";

function CountrySwitchBtn(props) {
  return (
    <span className="country-switch-btn" {...props} role="button" tabIndex="0">
    </span>
  );
}

export default CountrySwitchBtn;
