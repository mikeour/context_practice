import React, { useContext } from "react";
import { MovieContext } from "./MovieContext.jsx";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h6>Context Movie List</h6>
      <h6>Number of movies: {movies.length}</h6>
    </div>
  );
};

export default Nav;
