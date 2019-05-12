import React, { useContext } from "react";
import Movie from "./Movie.jsx";
import { MovieContext } from "./MovieContext.jsx";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(movie => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default MovieList;
