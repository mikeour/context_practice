import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext.jsx";

const MovieForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name, price }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={updateName}
        placeholder="Enter Movie name..."
      />
      <input
        type="text"
        value={price}
        onChange={updatePrice}
        placeholder="Enter Movie price..."
      />
      <button>Submit</button>
    </form>
  );
};

export default MovieForm;
