import React, { Component } from "react";
import axios from "axios";

class MoviesPage extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b4399c4e538d3bbc9a5c06c5fd657c91"
    );
    console.log(response.data);
  }

  render() {
    return <></>;
  }
}

export default MoviesPage;
