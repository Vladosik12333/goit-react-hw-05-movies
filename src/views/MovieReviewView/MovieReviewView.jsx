import css from './MovieReviewView.module.css';
import { fetchReviewsById } from 'service/moviesAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieReviewView() {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsById(movieId).then(response => setReview(response.results));
  }, []);

  return (
    <ul className={css.list}>
      {review.length !== 0 ? (
        review.map(({ author, content, id }) => {
          return (
            <li className={css.item} key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <h3>We don`t have any reviews for this movie.</h3>
      )}
    </ul>
  );
}
