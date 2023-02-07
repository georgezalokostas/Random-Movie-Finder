import { useState, useEffect } from "react";
import { IMovie } from "./interfaces/IMovie";
import SearchBox from "./components/SearchBox";

const App = () => {
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

  return (
    <div className="Components">
      <SearchBox<IMovie> setSearchTerm={setSearchTerm} movies={movies} />
      <button>Find a movie!</button>
    </div>
  );
};

export default App;
