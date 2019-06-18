import React, { useContext } from "react";
import { MovieContext } from "./MovieContext.jsx";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h1>Context Movie List</h1>
      <h2>Total movies: {movies.length}</h2>
    </div>
  );
};

export default Nav;
