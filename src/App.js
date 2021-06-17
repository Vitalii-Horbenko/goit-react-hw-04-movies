import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";

export const App = () => {
  <>
    <Route path="/" component={HomeView} />
  </>;
};

export default App;
