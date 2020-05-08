import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import UserProfile from "./pages/UserProfile";
import Landing from "./pages/Landing";
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
      <Switch>
      <Route exact path={"/"}>
        <Landing />
        </Route>
        <Route exact path={"/countries/:name/:username/:id"}>
        <AllCountries />
        </Route>
        <Route exact path={["/members", "/countries", "/countries/:name", "/members/:username"]}>
        <Welcome />
        </Route>
        <Route exact path={"/members/:username/:id"}>
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
