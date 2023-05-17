export const IMDB_API_KEY = import.meta.env.VITE_IMDB_API_KEY;

export const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${IMDB_API_KEY}&language=en-US&page=1`,
  popularTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=${IMDB_API_KEY}&language=en-US&page=1`,
  nowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${IMDB_API_KEY}&language=en-US&page=1`,
  playingNowMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${IMDB_API_KEY}&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${IMDB_API_KEY}&language=en-US&page=2`,
  topRatedForStatistics: `https://api.themoviedb.org/3/movie/top_rated?api_key=${IMDB_API_KEY}&language=en-US`,
  genreMovies: `https://api.themoviedb.org/3/genre/movie/list?api_key=${IMDB_API_KEY}&language=en-US`,
  genreTv: `https://api.themoviedb.org/3/genre/tv/list?api_key=${IMDB_API_KEY}&language=en-US`,
}