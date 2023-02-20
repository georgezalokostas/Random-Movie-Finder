import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import DisplayMovieDetails from "./DisplayMovieDetails";
import "./Styles.css";
import { Top250MoviesIDs } from "./text_arrays/Top250MoviesIDs";
import { getRandomItem } from "./Functions";

const SearchButton = ({
  getMovieRequest,
  movie,
}: {
  getMovieRequest: (searchTerm: string) => Promise<void>;
  movie: IMovie | undefined;
}) => {
  const [hideElements, setHideElements] = useState(false);

  const randomItemFromList = getRandomItem(Top250MoviesIDs);

  return (
    <div className="searchbox">
      {!hideElements && (
        <div className="home-page">
          <h2>
            Get a random movie recommendation!
            <br />
          </h2>
          <button className="searchBtn"
            onClick={() => {
              getMovieRequest(randomItemFromList);
              setHideElements(true);
            }}
          >
            Find a good one!
          </button>
        </div>
      )}
      <DisplayMovieDetails getMovieRequest={getMovieRequest} movie={movie} />
    </div>
  );
};

export default SearchButton;
