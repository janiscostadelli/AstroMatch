import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import InitialPage from "../pages/Initial/InitialPage";
import MatchPage from '../pages/Match/MatchPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/AstroMatch">
          <InitialPage />
        </Route>
        <Route exact path="/AstroMatch/home">
          <HomePage />
        </Route>
        <Route exact path="/AstroMatch/matches">
          <MatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
