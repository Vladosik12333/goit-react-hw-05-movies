import css from './MovieCast.module.css';
import { fetchActorsById } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieCastView() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchActorsById(movieId)
      .then(response => setCast(response.cast))
      .catch(error => alert(error.message));
  }, []);

  return (
    <ul>
      {cast.length !== 0 &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <li className={css.item} key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}
