import React from "react";

function Nav(props) {
  var memberPath = "/members/" + props.username + "/" + props.id;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        Culture by Country
      </a>
      <a className="navbar-brand" href={memberPath} >
        Profile Page
      </a>
      <a className="navbar-brand" href="/countries/United%20States">
        Countries Page
      </a>
    </nav>
  );
}

export default Nav;
