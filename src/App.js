import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";

const App = () => (
  <>
    <Route exact path="/" component={Homepage} />
    <Route path="/movies" component={MoviesPage} />
  </>
);

export default App;
