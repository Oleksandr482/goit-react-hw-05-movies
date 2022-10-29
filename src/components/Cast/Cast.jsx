import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const [filmCast, setFilmCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchFilmCast(url, setState) {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;
        const filmCast = await data.cast;
        setState(filmCast);
      } catch (e) {
        console.log(e.message);
      }
    }

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
    fetchFilmCast(url, setFilmCast);
  }, [movieId]);

  return (
    <CastList>
      {filmCast.map(film => {
        const { id, profile_path, name, character } = film;
        const imgSrc = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : 'none';
        return (
          <CastItem key={id}>
            <img src={imgSrc} alt={name} width="300" />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};
export default Cast;
