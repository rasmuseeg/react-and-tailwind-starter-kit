import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import "./assets/tailwind.css";
import { Redirect, Route, Router, Switch as RouteSwitch } from "react-router";
import Protected from "./components/Layout/Protected";
import CollectionListPage from "./pages/CollectionListPage";

const App = () =>
{
  return (
    <React.StrictMode>
      <Protected>
        <RouteSwitch>
          <Route path="/collections">
            <CollectionListPage />
          </Route>
          <Redirect to="/collections" />
        </RouteSwitch>
      </Protected>
    </React.StrictMode>
  )
};

export default hot(App);