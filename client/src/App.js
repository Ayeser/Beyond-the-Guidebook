import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import Nav from "./components/Nav";
// import Display from "./components/Display";
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
      {/* <Display /> */}
      <Switch>
      <Route exact path={"/"}>
        <Welcome />
        </Route>
        <Route exact path={"/countries"}>
        <AllCountries />
        </Route>
        <Route exact path={"/countries/:name"}>
        <AllCountries />
        </Route>
        {/* Path for /members is to show an example */}
        <Route exact path={"/members"}>
        <Profile />
        </Route>
<<<<<<< HEAD
      <Route path="/*">
=======
        <Route exact path={"/members/:username"}>
        <UserProfile />
        </Route>
      <Route>
>>>>>>> 64eac0d1e84ba566d00a72d6eba6b9bf2b9305dc
        <NoMatch />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
