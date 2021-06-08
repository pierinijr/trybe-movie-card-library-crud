import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NewMovie, NotFound, EditMovie, MovieDetails, MovieList } from './pages/';
import movieData from './services/movieData';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MovieList {...props} />} />
        <Route exact path="/movies/new" render={(props) => <NewMovie {...props} />} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} movies={movieData} />} />
        <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
