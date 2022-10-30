import axios from 'axios';
export async function fetchPopularFilms() {
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=d6e97164aaa08d2091b81af2621a507c';
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchFilmsByQuery(searchQuery) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return { filmsArr, data };
}

export async function fetchFilmDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;

  return data;
}

export async function fetchFilmReviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US&page=1`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchFilmCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmCast = await data.cast;
  return filmCast;
}
