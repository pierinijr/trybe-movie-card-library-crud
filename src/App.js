import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <BrowserRouter>
        <Switch>
          <Route path="/movies/new" render={ () => <NewMovie /> } />
          <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
          <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
          <Route NoMatch render={ () => <NotFound /> } />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
