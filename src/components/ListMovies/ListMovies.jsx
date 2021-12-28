import { useState, useEffect } from 'react';
import css from './ListMovies.module.css';
import { fetchTrending, fetchMovie } from 'service/moviesAPI';
import { Link, useLocation, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

export default function ListMovies({ query }) {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (query === '') {
      fetchTrending().then(response => setMovies(response.results));
      return;
    }

    fetchMovie(query).then(response => {
      if (response.results.length === 0) {
        alert(`Ooops, we have not "${query}". Try write something other!`);
        return;
      }

      history.push({ ...location, search: `search=${query}` });
      setMovies(response.results);
    });
  }, [query]);

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
  query: propTypes.string.isRequired,
};
