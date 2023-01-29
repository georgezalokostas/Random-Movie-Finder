import React, { useState, useEffect } from "react";
import { isTemplateExpression } from "typescript";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovieRequest = async (searchTerm: string) => {
    const url = `http://www.omdbapi.com/?apikey=19260989&s=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchTerm);
  }, [searchTerm]);
    
  {/* TODO: Make SearchBox a component, which returns the searchText and adds it on SetSearchTerm */}
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
