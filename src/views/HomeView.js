import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b4399c4e538d3bbc9a5c06c5fd657c91&language=ru"
    );
    this.setState({ movies: data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: this.props.location,
                  },
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

export default withRouter(HomeView);
