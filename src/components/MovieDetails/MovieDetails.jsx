import React, { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkBtn, Wrapper } from './MovieDetails.styled';
import { MovieDetailsCard } from './MovieDetailsCard';
import axios from 'axios';
import { Container } from 'components/Movies/Movies.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    async function fetchFilm(url, setState) {
      try {
        const resp = await axios.get(url);
        const filmsArr = await resp.data;
        const {
          id,
          poster_path,
          original_title,
          release_date,
          vote_average,
          overview,
          genres,
        } = await filmsArr;

        await setState({
          id,
          poster_path,
          original_title,
          release_date,
          vote_average,
          overview,
          genres,
        });
      } catch (e) {
        console.log(e.message);
      }
    }

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
    fetchFilm(url, setFilm);
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
          poster_path={poster_path ?? 'none'}
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
