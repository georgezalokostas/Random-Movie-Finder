import { useEffect, useState } from "react";
import { IMovie } from "./interfaces/IMovie";
import RenderResults from "./components/RenderResults";
import { MoviesIDs } from "./components/text_arrays/MoviesIDs";
import { getRandomItem } from "./components/Functions";

const App = () => {
  const [movie, setMovie] = useState<IMovie>();

  const GetMovieData = async () => {
    let searchTerm = getRandomItem(MoviesIDs);
    const url = `http://www.omdbapi.com/?apikey=19260989&i=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovie(responseJson);
    }else{
      <h4>A problem encountered while using the API.</h4>
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
