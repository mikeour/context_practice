import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "No Country For Old Men",
      price: 6,
      id: 5345
    },
    {
      name: "Fargo",
      price: 5,
      id: 12533
    },
    {
      name: "O Brother, Where Art Thou?",
      price: 11,
      id: 9458
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
