import css from './ListMovies.module.css';
import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

export default function ListMovies({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <li className={css.item} key={id}>
            <Link
              className={css.link}
              to={{
                pathname: `movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

ListMovies.propTypes = {
  movies: propTypes.array.isRequired,
};
