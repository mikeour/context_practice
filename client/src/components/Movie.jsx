import React from "react";

const Movie = props => {
  const { name, price } = props.movie;
  return (
    <ul>
      <li>{name}</li>
      <li>{price}</li>
    </ul>
  );
};

export default Movie;
