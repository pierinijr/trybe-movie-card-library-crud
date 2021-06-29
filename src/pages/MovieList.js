import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.getMoviesFromAPI = this.getMoviesFromAPI.bind(this);
  }

  async componentDidMount() {
    const listOfMovies = await movieAPI.getMovies();
    this.getMoviesFromAPI(listOfMovies);
  }

  getMoviesFromAPI(movies) {
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.length === 0 ? <Loading />
          : movies.map((movie) => (
            <MovieCard
              key={ movie.title }
              movie={ movie }
            />))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
