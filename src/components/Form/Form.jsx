import css from './Form.module.css';
import { useState } from 'react';
import propTypes from 'prop-types';

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState('');

  const preOnSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') return alert('Ooops, is it empty string?!');

    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={preOnSubmit}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
