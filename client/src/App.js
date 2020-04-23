import React from "react";
import NoMatch from "./pages/NoMatch";
import AllCountries from "./pages/AllCountries";
import Nav from "./components/Nav";
import Display from "./components/Display";
// import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Display />
      <Switch>
        <Route exact path={["/", "/countries/:name"]}>
        <AllCountries />
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
