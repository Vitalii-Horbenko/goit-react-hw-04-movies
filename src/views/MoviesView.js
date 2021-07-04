import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ query: "" });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b4399c4e538d3bbc9a5c06c5fd657c91&language=ru&page=1&query=${this.state.query}`
      )
      .then(({ data }) => this.setState({ movies: data.results }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
