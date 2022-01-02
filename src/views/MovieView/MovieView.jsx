import css from './MovieView.module.css';
import {
  Link,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { fetchMovieById } from 'service/moviesAPI';
import Movie from 'components/Movie';

const MovieCast = lazy(() => import('components/MovieCast'));
const MovieReview = lazy(() => import('components/MovieReview'));

export default function MovieView() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieById(movieId)
      .then(response => setMovie(response))
      .catch(error => alert(error.message));
  }, []);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const onClick = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button className={css.btn} type="button" onClick={onClick}>
        Go back
      </button>
      {movie?.title && <Movie movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul className={css.list}>
          <li className={css.item}>
            <Link
              className={css.link}
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from ?? '/',
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link
              className={css.link}
              to={{
                pathname: `${url}/review`,
                state: {
                  from: location?.state?.from ?? '/',
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Route path={`${path}/cast`}>
          <MovieCast />
        </Route>

        <Route path={`${path}/review`}>
          <MovieReview />
        </Route>
      </Suspense>
    </div>
  );
}
