import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Culture by Country
      </a>
      <a className="navbar-brand" href="/members">
        Profile Page
      </a>
      <a className="navbar-brand" href="/countries">
        Countries Page
      </a>
    </nav>
  );
}

export default Nav;
