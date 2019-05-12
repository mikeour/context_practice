import React from "react";
import ReactDOM from "react-dom";
import { MovieProvider } from "./components/MovieContext.jsx";
import App from "./components/App.jsx";

ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById("root")
);
