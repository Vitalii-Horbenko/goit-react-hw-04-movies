import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?&api_key=b4399c4e538d3bbc9a5c06c5fd657c91&language=en&page=1`
    );
    this.setState({ reviews: data.results });
  }
  render() {
    return this.state.reviews.length > 0 ? (
      <>
        <ul>
          {this.state.reviews.map((res) => (
            <li key={res.id}>
              <p>Author: {res.author}</p>
              <p>{res.content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <p>У нас нет никаких отзывов об этом фильме</p>
    );
  }
}

export default Reviews;
