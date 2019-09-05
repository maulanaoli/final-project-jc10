import React, { Component } from "react";
import NavbarComp from "./1.page/Navbar/Navbar";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./1.page/Home/Home";
import Auth from "./1.page/Auth/Auth";
class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Auth} path="/auth" exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
