import { useEffect, useState } from "react";
import { IMovie } from "./interfaces/IMovie";
import RenderResults from "./components/RenderResults";
import { Top250MoviesIDs } from "./components/text_arrays/Top250MoviesIDs";
import { getRandomItem } from "./components/Functions";

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

  useEffect(() => {
    let movie = getRandomItem(Top250MoviesIDs);
    getMovieRequest(movie);
  }, []);

  return (
    <div className="Components">
      <RenderResults getMovieRequest={getMovieRequest} movie={movie} />
    </div>
  );
};

export default App;
