import css from './Movie.module.css';
import propTypes from 'prop-types';

export default function Movie({ movie }) {
  return (
    <div className={css.container}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <ul className={css.list}>
        <li className={css.item}>
          <h2>{movie.title}</h2>
          <p>{`User Score: ${movie.vote_average}`}</p>
        </li>
        <li className={css.item}>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </li>
        <li className={css.item}>
          <h4>Genres</h4>
          <p>
            {movie?.genres?.reduce(
              (genres, genre) => genres + ' ' + genre.name,
              '',
            )}
          </p>
        </li>
      </ul>
    </div>
  );
}

Movie.propTypes = {
  movie: propTypes.object.isRequired,
};
