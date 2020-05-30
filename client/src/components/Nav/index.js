import React from "react";

function Nav(props) {
  var memberPath = "/members/" + props.username + "/" + props.id;
  var countriesPath = "/countries/United States/" + props.username + "/" + props.id;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Beyond the Guidebook
      </a>
      <a className="navbar-brand" href={memberPath} >
        Profile Page
      </a>
      <a className="navbar-brand" href={countriesPath}>
        Countries Page
      </a>
    </nav>
  );
}

export default Nav;