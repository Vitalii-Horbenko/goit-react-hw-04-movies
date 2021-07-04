import React, { Component } from "react";
import axios from "axios";

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=b4399c4e538d3bbc9a5c06c5fd657c91&&language=ru`
    );

    this.setState({
      cast: data.cast,
    });
  }
  render() {
    return (
      <>
        {this.state.cast.map((char) => (
          <li key={char.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${char.profile_path}`}
              alt=""
            />
            <p>name: {char.name}</p>
            <p>Char: {char.character}</p>
          </li>
        ))}
      </>
    );
  }
}

export default Cast;
