import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Films from "./films";

const RootComponent = () => (
  <BrowserRouter>
    <Route path="/films" component={Films} />
  </BrowserRouter>
);

export default RootComponent;
