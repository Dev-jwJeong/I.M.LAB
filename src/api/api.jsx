const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchPopularMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchNowPlayingMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchUpcomingMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchTopRatedMovie(page) {
  return await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${page}`
  ).then(res => res.json());
}

export async function fetchMovieDetail(id) {
  return await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`).then(res =>
    res.json()
  );
}

export async function fetchSearchMovie(query, page) {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${query}&page=${page}&include_adult=false`
  ).then(res => res.json());
}

export async function fetchMovieCredits(id) {
  return await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`).then(
    res => res.json()
  );
}

export async function fetchImage() {
  return await fetch(`https://image.tmdb.org/t/p/w500/bApc0wbQ8O1DHt3AdLAM5hECmXX.jpg`).then(res =>
    res.json()
  );
}

export async function fetchMovieVides(id) {
  return await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`).then(res =>
    res.json()
  );
}

export async function fetchReview(id) {
  return await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=ko-KR`).then(
    res => res.json()
  );
}

export async function fetchRecommendations(id) {
  return await fetch(
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then(res => res.json());
}

export async function fetchKeywords(id) {
  return await fetch(`${BASE_URL}/movie/${id}/keywords?api_key=${API_KEY}`).then(res => res.json());
}

export async function fetchMovieBuy(id) {
  return await fetch(
    `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}&language=ko-KR`
  ).then(res => res.json());
}

export async function fetchSearch(query, page) {
  return await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&include_adult=false&language=ko-KR&query=${query}&page=${page}&include_adult=false`
  ).then(res => res.json());
}

export async function fetchTranding() {
  return await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&include_adult=false&language=ko-KR`
  ).then(res => res.json());
}
