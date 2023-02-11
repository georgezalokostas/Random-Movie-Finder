import { Dispatch, SetStateAction } from "react";
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
  return (
    <div className="searchbox">
      {!hideElements && (
        <div className="input-button">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              searchTerm = event.target.value;
            }}
          />
          <button
            onClick={() => {
              getMovieRequest(searchTerm);
              setHideElements(true);
            }}
          >
            Click me
          </button>
        </div>
      )}
      <DisplayMovieDetails movie={firstResult} />
    </div>
  );
};

export default SearchButton;
