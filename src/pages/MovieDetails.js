import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: true,
      movie: '',
    }
    this.setMovieId = this.setMovieId.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;
    const data = await getMovie(id);

    this.setMovieId(data);
  }

  setMovieId(data) {
    this.setState({
      movie: data,
      loading: false,
    })
  }

  renderDetails() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    
    return(
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </button>
        <button type="button">
        <Link to="/">VOLTAR</Link>
        </button>
      </div>
    )
  }
  
  render() {
    const { loading } = this.state;

    return (
      <>
      { loading ? <Loading /> : this.renderDetails() }
      </>
    );
  }
}

export default MovieDetails;
