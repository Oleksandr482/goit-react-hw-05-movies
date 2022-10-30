import React, { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkBtn, Wrapper } from './MovieDetails.styled';
import { MovieDetailsCard } from './MovieDetailsCard';
import { fetchFilmDetails } from 'api-service/fetchFilms';
import { Container } from 'components/Movies/Movies.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    fetchFilmDetails(movieId)
      .then(
        ({
          id,
          poster_path,
          original_title,
          release_date,
          vote_average,
          overview,
          genres,
        }) => {
          setFilm({
            id,
            poster_path,
            original_title,
            release_date,
            vote_average,
            overview,
            genres,
          });
        }
      )
      .catch(e => console.log(e.message));
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;
  return (
    <Container>
      <Wrapper>
        <LinkBtn to={location.state?.from ?? '/'}>Go back</LinkBtn>
      </Wrapper>

      {film.id && (
        <MovieDetailsCard
          poster_path={poster_path}
          original_title={original_title ?? 'none'}
          release_date={release_date}
          vote_average={vote_average ?? 0}
          overview={overview ?? 'none'}
          genres={genres ?? [{ id: 1, name: 'none' }]}
        />
      )}
      <Wrapper>
        <LinkBtn to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </LinkBtn>
        <LinkBtn to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </LinkBtn>
      </Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
