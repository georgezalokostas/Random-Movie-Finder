import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import DisplayMovieDetails from "./DisplayMovieDetails";
import "./SearchButton.css";
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

  //TODO: Get a random color on each refresh.
  //TODO: Pop the random item from the list so that it doesn't get repeated. Handle Exceptions for accessing same element after popped.
  //TODO: Blur the background color from the median of the movie's colors.

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
