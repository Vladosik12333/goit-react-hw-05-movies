import css from './Container.module.css';
import propTypes from 'prop-types';

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
  children: propTypes.array.isRequired,
};
