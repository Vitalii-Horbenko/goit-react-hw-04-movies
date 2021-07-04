import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

class MovieDetailsView extends Component {
  state = {
    id: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
    posterPath: null,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?reviews&api_key=b4399c4e538d3bbc9a5c06c5fd657c91&language=ru`
    );
    this.setState({
      title: data.title,
      vote_average: data.vote_average,
      overview: data.overview,
      genres: data.genres,
      posterPath: data.poster_path,
      id: data.id,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push("/");
  };

  render() {
    const { match } = this.props;
    const { genres, title, posterPath, vote_average, overview } = this.state;
    return (
      <>
        <div>
          <button onClick={this.handleGoBack}>Вернуться назад</button>
        </div>
        {title && (
          <img
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt={title}
          />
        )}
        <h1>{title}</h1>
        <p>Оценка пользователей: {vote_average}</p>
        <h3>Описание</h3>
        <p>{overview}</p>

        <h3>Жанры</h3>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Route path={`${match.path}/cast`} component={Cast} />

        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsView;
