import { useEffect, useState } from 'react';
import { fetchFilmCast } from 'api-service/fetchFilms';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';
import noImage from 'images/noImage.png';

const Cast = () => {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchFilmCast(movieId)
      .then(setFilmCast)
      .catch(e => console.log(e.message));
  }, [movieId]);

  return (
    <CastList>
      {filmCast.map(film => {
        const { id, profile_path, name, character } = film;
        const imgSrc = `https://image.tmdb.org/t/p/w500${profile_path}`;

        return (
          <CastItem key={id}>
            <img src={profile_path ? imgSrc : noImage} alt={name} width="300" />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};
export default Cast;
