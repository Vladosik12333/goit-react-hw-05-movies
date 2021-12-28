const KEY = '3634b3d3506b5f3dc1d4858dbd6d21ce';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchToBD(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error(response.status));
}

export function fetchTrending() {
  return fetchToBD(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchMovie(query) {
  return fetchToBD(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}`,
  );
}

export function fetchMovieById(movieId) {
  return fetchToBD(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchActorsById(movieId) {
  return fetchToBD(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchReviewsById(movieId) {
  return fetchToBD(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
  );
}
