import React, { Component } from "react";
import axios from "axios";

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b4399c4e538d3bbc9a5c06c5fd657c91"
    );
    console.log(data);
    this.setState({ movies: data.results });
  }

  render() {
    return (
      <>
        <h1>Homepage</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomeView;
