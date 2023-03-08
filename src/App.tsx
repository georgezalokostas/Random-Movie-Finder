import { useEffect, useState } from "react";
import { IMovie } from "./interfaces/IMovie";
import RenderResults from "./components/RenderResults";
import { Top250MoviesIDs } from "./components/text_arrays/Top250MoviesIDs";
import { getRandomItem } from "./components/Functions";

const App = () => {
  const [movie, setMovie] = useState<IMovie>();

  const GetMovieData = async () => {
    let searchTerm = getRandomItem(Top250MoviesIDs);
    const url = `http://www.omdbapi.com/?apikey=19260989&i=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovie(responseJson);
    }
  };

  useEffect(() => {
    GetMovieData();  
  },[]);

  return (
    <div className="Components">
      <RenderResults movie={movie} />
      <button
        className="nextMovie"
        onClick={() => {
          GetMovieData();
        }}
      >
        Next Movie!
      </button>
    </div>
  );
};

export default App;
