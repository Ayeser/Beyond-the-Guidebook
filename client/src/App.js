import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import CountryPage from "./pages/CountryPage";
import SpecificCountryPage from "./pages/SpecificCountryPage";
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
        <Route exact path={["/", "/books"]}>
        <Books />
        </Route>
        <Route exact path={["/country"]}>
        <CountryPage />
        </Route>
        <Route exact path={["/countries/:name"]}>
        <SpecificCountryPage />
        </Route>
      <Route exact path="/books/:id">
        <Detail />
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
