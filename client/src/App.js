import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import Welcome from "./pages/Welcome";
import UserProfile from "./pages/UserProfile";
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
        <Welcome />
        </Route>
        <Route exact path={"/countries/:name/:username"}>
        <AllCountries />
        </Route>
        {/* Path for /members is to show an example */}
        <Route exact path={"/members"}>
        <Welcome />
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
