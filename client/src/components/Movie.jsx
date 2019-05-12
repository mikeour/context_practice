import React, { useContext } from "react";
import { MovieContext } from "./MovieContext.jsx";

const Movie = props => {
  const [movies, setMovies] = useContext(MovieContext);
  const { name, price } = props.movie;

  const handleClick = e => {
    const index = movies.map(movie => movie.name).indexOf(name);
    setMovies(prevMovies => {
      const updatedMovies = Array.from(prevMovies);
      updatedMovies.splice(index, 1);
      return updatedMovies;
    });
  };

  return (
    <ul>
      <li>{name}</li>
      <li>{price}</li>
      <button onClick={handleClick}>x</button>
    </ul>
  );
};

export default Movie;
