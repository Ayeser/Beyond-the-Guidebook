import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Display from "./components/Display";
import { BrowserRouter } from "react-router-dom";

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
      <Display />
      <Switch>
      <Route exact path={"/"}>
        <Welcome />
        </Route>
        <Route exact path={"/countries/:name"}>
        <AllCountries />
        </Route>
        <Route exact path={["/members", "/members/:name"]}>
        <Profile />
        </Route>
      <Route path="/*">
        <NoMatch />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
