import ListMovies from 'components/ListMovies';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'service/moviesAPI';
import css from './HomeView.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(response => setMovies(response.results))
      .catch(error => alert(error.message));
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Tranding today</h1>
      {movies.length !== 0 && <ListMovies movies={movies} />}
    </div>
  );
}
