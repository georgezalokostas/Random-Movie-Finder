import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import DisplayMovieDetails from "./DisplayMovieDetails";
import "./SearchButton.css";

const SearchButton = ({
  getMovieRequest,
  firstResult,
}: {
  getMovieRequest: (searchTerm: string) => Promise<void>;
  firstResult: IMovie;
}) => {
  let searchTerm: string = "";
  const [hideElements, setHideElements] = useState(false);

  //TODO: Remove searchbox and get results from a list of IMDB tags
  //TODO: Get a random color on each refresh.
  return (
    <div className="searchbox">
      {!hideElements && (
        <div className="input-button">
          <h2>
            Get a random movie recommendation!
            <br />
          </h2>
          <input
            className="search-text"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              searchTerm = event.target.value;
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              getMovieRequest(searchTerm);
              setHideElements(true);
            }}
          >
            Find a good one!
          </button>
        </div>
      )}
      <DisplayMovieDetails movie={firstResult} />
    </div>
  );
};

export default SearchButton;
