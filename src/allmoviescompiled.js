import movies from './movie-images';
// import topTenMovies from './top-10-movies';
import onlyOnMovies from './onlyonmovies'


const allMoviesCompiled = [...movies, ...onlyOnMovies];

export default allMoviesCompiled;