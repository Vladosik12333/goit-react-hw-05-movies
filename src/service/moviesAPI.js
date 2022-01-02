const KEY = '3634b3d3506b5f3dc1d4858dbd6d21ce';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchToBD(url = '', config = {}) {
  try {
    const response = await fetch(url, config);

    if (!response.ok)
      throw Error('Oooops, anything did not work. Try again :)');

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export function fetchTrending() {
  return fetchToBD(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export async function fetchMovie(query) {
  try {
    const parsedResponse = await fetchToBD(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}`,
    );

    if (parsedResponse.results.length === 0)
      throw Error(`Ooops, we have not "${query}". Try write something other!`);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
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
