import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink exact to="/" activeClassName={css.active} className={css.link}>
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName={css.active} className={css.link}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
