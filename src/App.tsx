import React, { useState, useEffect } from "react";
import { isTemplateExpression } from "typescript";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?apikey=19260989&s=Shawshank";

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
