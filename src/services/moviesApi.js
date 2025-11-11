const API_KEY = 'f245aaf7608653bce3f49d160a62870c';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchData(url) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  });
}

export function fetchTrending() {
  return fetchData(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(query) {
  return fetchData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
}

export function fetchMovieDetails(movieId) {
  return fetchData(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCast(movieId) {
  return fetchData(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchReviews(movieId) {
  return fetchData(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
