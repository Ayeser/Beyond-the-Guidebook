import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 50, paddingBottom: 300, textAlign: "center", float: "right" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
