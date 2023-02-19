import { useState, useEffect } from "react";
import { IMovie } from "./interfaces/IMovie";
import SearchButton from "./components/SearchButton";
import { setTimeout } from "timers/promises";

const App = () => {
  const [movie, setMovies] = useState<IMovie | undefined>(undefined);
  
  const getMovieRequest = async (searchTerm: string) => {
    const url = `http://www.omdbapi.com/?apikey=19260989&i=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovies(responseJson);
    }
  };

  return (
    <div className="Components">
      <SearchButton getMovieRequest={getMovieRequest} movie={movie} />
    </div>
  );
};

export default App;
