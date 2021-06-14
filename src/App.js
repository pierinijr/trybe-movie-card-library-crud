import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="" component={ NotFound } />
      </Switch>
      <div>
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
