import movies from './movie-images';
// import topTenMovies from './top-10-movies';
import onlyOnMovies from './onlyonmovies'


const movieMap = new Map();

// Use movie ID as a key to prevent duplicates
[...movies, ...onlyOnMovies].forEach(movie => {
    movieMap.set(movie.id, movie);
});

const allMoviesCompiled = [
    ...movies.map(movie => ({ ...movie, id: `movies-${movie.id}` })),
    ...onlyOnMovies.map(movie => ({ ...movie, id: `onlyon-${movie.id}` }))
  ];
  

export default allMoviesCompiled;
