import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

const HomeView = lazy(() => import('views/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView'));
const MovieView = lazy(() => import('views/MovieView'));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route exact path="/movies">
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieView />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
