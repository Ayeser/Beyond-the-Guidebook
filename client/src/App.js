import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import Welcome from "./pages/Welcome";
import UserProfile from "./pages/UserProfile";
import Nav from "./components/Nav";
// import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path={"/"}>
        <Welcome />
        </Route>
        <Route exact path={"/countries/:name"}>
        <AllCountries />
        </Route>
        {/* Path for /members is to show an example */}
        <Route exact path={"/members"}>
        <h1>This page is restricted to users who are signed in: please go to the main page and type in your username and password</h1>
        </Route>
        <Route exact path={"/members/:username"}>
        <UserProfile />
        </Route>
      <Route>
        <NoMatch />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
