import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from 'api-service/fetchFilms';
import { Paragraf } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchFilmReviews(movieId)
      .then(setReviews)
      .catch(e => console.log(e.message));
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <Paragraf>We don't have any reviews for this movie</Paragraf>
      )}
    </Wrapper>
  );
};
export default Reviews;
