const API_KEY = "34a8a3b6948b134486f2d6f00f6efcf5";
const baseURL = "https://api.themoviedb.org/3";

export const requests = {
   fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
   fetchNetflixOriginals: `${baseURL}/trending/all/week?api_key=${API_KEY}`,
   fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
   fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
   fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
   fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
   fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
   fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
}