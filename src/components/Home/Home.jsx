import { FilmCard } from 'components/FilmCard/FilmCard';
import { List } from 'components/Home/Home.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchFilms } from 'components/js/fetchFilms';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/trending/all/day?api_key=d6e97164aaa08d2091b81af2621a507c';
    fetchFilms(url, setFilms);
  }, []);

  return (
    <List>
      {films.map(film => {
        const { id, poster_path, title, name } = film;
        return (
          <FilmCard
            key={id}
            posterPath={poster_path}
            title={title ?? name}
            movieId={id}
          />
        );
      })}
    </List>
  );
};
export default Home;
