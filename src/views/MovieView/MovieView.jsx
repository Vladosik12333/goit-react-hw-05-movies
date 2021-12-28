import css from './MovieView.module.css';
import {
  Link,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from 'service/moviesAPI';
import Movie from 'components/Movie';
import MovieCastView from 'views/MovieCastView';
import MovieReviewView from 'views/MovieReviewView';

export default function MovieView() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieById(movieId).then(response => setMovie(response));
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

      <Route path={`${path}/cast`}>
        <MovieCastView />
      </Route>

      <Route path={`${path}/review`}>
        <MovieReviewView />
      </Route>
    </div>
  );
}
