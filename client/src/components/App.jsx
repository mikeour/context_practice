import React, { Fragment } from "react";
import MovieList from "./MovieList.jsx";
import Nav from "./Nav.jsx";
import MovieForm from "./MovieForm.jsx";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <MovieList />
      <MovieForm />
    </Fragment>
  );
};

export default App;
