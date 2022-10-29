import { Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilms } from '../js/fetchFilms';
import { Paragraf } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US&page=1`;
    fetchFilms(url, setReviews);
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
