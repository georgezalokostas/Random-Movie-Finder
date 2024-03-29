import { useEffect, useState } from "react";
import { IMovie } from "./interfaces/IMovie";
import RenderResults from "./components/RenderResults";
import { MoviesData } from "./components/MoviesData";
import { getRandomItem } from "./components/Functions";
import Footer from "./components/Footer";

const App = () => {
  const [movie, setMovie] = useState<IMovie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //TODO: 1) Add an initial fetch of 10 elements from the API
  //TODO: 2) Get 10 results from the API and store them in an array
  //TODO: 3) Add Dropdowns to filter the results by genre, year, etc.
  
  const GetMovieData = async () => {
    let searchTerm = getRandomItem(MoviesData);
    const url = `https://www.omdbapi.com/?apikey=19260989&i=${searchTerm.id}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson) {
      setMovie(responseJson);
      setIsLoading(false);
    } else {
      <h4>A problem encountered while using the API.</h4>;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      GetMovieData();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Components">
      <RenderResults movie={movie} />
      {!isLoading && (
        <button
          className="nextMovie"
          onClick={() => {
            setIsLoading(true);
            GetMovieData();
          }}
        >
          Next Movie!
        </button>
      )}
      <Footer />
    </div>
  );
};

export default App;
