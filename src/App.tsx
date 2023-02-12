import { useState } from "react";
import { IMovie } from "./interfaces/IMovie";
import SearchButton from "./components/SearchButton";

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovieRequest = async (searchTerm: string) => {
    const url = `http://www.omdbapi.com/?apikey=19260989&s=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const firstResult: IMovie | undefined = movies[0];

  return (
    <div className="Components">
      <SearchButton
        getMovieRequest={getMovieRequest}
        firstResult={firstResult}
      />
    </div>
  );
};

export default App;
