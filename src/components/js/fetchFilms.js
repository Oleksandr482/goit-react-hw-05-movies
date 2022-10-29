import axios from 'axios';
export async function fetchFilms(url, setState, setStatus) {
  try {
    const resp = await axios.get(url);
    const data = await resp.data;
    const filmsArr = await data.results;
    if (data.total_results === 0) setStatus('no-results');
    setState(filmsArr);
  } catch (e) {
    console.log(e.message);
  }
}
