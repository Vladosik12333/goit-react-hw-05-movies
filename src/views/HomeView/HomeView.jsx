import ListMovies from 'components/ListMovies';
import css from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Tranding today</h1>
      <ListMovies query="" />
    </div>
  );
}
