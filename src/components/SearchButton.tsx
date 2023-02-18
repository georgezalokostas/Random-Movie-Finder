import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import DisplayMovieDetails from "./DisplayMovieDetails";
import "./SearchButton.css";
import { Top250MoviesIDs } from "./text_arrays/Top250MoviesIDs";

const SearchButton = ({
  getMovieRequest,
  movie,
}: {
  getMovieRequest: (searchTerm: string) => Promise<void>;
  movie: IMovie | undefined;
}) => {
  const [hideElements, setHideElements] = useState(false);

  const randomItemFromList =
    Top250MoviesIDs[Math.floor(Math.random() * Top250MoviesIDs.length)];

  //TODO: Get a random color on each refresh.
  return (
    <div className="searchbox">
      {!hideElements && (
        <div className="input-button">
          <h2>
            Get a random movie recommendation!
            <br />
          </h2>
          <button
            className="search-button"
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
