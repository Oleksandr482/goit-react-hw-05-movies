import { Descr, Poster, Wrapper } from './MovieDetails.styled';
import PropTypes from 'prop-types';

export const MovieDetailsCard = ({
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const imgSrc = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Wrapper>
      <Poster>
        <img
          src={imgSrc + poster_path ?? 'none'}
          alt={original_title}
          width="360"
        />
      </Poster>
      <Descr>
        <h2>
          {original_title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {vote_average.toFixed(1) * 10}%</p>

        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>
            {genres.map(g => {
              return g.name + ' ';
            })}
          </p>
        </div>
      </Descr>
    </Wrapper>
  );
};

MovieDetailsCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
