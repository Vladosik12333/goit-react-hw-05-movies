import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';
import Form from 'components/Form';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(location.search).get('search') ?? '';

    if (search) {
      setQuery(search);
    }
  }, []);

  const onSubmit = search => {
    setQuery(search);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      {query !== '' && <ListMovies query={query} />}
    </div>
  );
}
