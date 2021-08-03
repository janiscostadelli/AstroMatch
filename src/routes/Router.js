import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import InitialPage from "../pages/Initial/InitialPage";
import MatchsPage from '../pages/Matchs/MatchsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <InitialPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/matchs">
          <MatchsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
