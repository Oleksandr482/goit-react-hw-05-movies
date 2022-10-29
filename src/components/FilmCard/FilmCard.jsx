import React from 'react';
import PropTypes from 'prop-types';
import { Poster, Link, Title, ListItem } from './FilmCard.styled';
import { useLocation } from 'react-router-dom';

export const FilmCard = ({ posterPath, title, movieId }) => {
  const location = useLocation();
  const filmPosterSrc = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return (
    <ListItem>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <Poster src={posterPath ? filmPosterSrc : 'none'} alt={title} />
        <Title>{title}</Title>
      </Link>
    </ListItem>
  );
};

FilmCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
};
