import css from './MovieReview.module.css';
import { fetchReviewsById } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieReviewView() {
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsById(movieId)
      .then(response => {
        response.results.length === 0
          ? setStatus('rejected')
          : setStatus('resolved');
        setReview(response.results);
      })
      .catch(error => alert(error.message));
  }, []);

  return (
    <ul className={css.list}>
      {status === 'resolved' &&
        review.map(({ author, content, id }) => {
          return (
            <li className={css.item} key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      {status === 'rejected' && (
        <h3>We don`t have any reviews for this movie.</h3>
      )}
    </ul>
  );
}
