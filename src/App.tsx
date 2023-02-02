import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

const App = () => {

  interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

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


  //FIXME: Pass correct type of movies
  //<SearchBox setSearchTerm={setSearchTerm} movies={movies} />  

};

export default App;
