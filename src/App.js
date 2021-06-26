import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styles from "./styles/App.module.css";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import MovieDetailsView from "./views/MovieDetailsView";
import NotFoundView from "./views/NotFoundView";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName={styles["NavLink--active"]}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName={styles["NavLink--active"]}
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/movieId" component={MovieDetailsView} />
      <Route path="/movies" component={MoviesView} />
      <Route exact path="/" component={HomeView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
