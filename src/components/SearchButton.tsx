import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import DisplayMovieDetails from "./MovieList";
import "./SearchButton.css";

const SearchButton = ({
  getMovieRequest,
  firstResult,
}: {
  getMovieRequest: (searchTerm: string) => Promise<void>;
  firstResult: IMovie;
}) => {
  let searchTerm: string = "";
  const [hideButton, setHideButton] = useState(false);

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          searchTerm = event.target.value;
        }}
      />
      {!hideButton && (
        <button
          onClick={() => {
            getMovieRequest(searchTerm);
            setHideButton(true);
          }}
        >
          Click me
        </button>
      )}
      <DisplayMovieDetails movie={firstResult} />
    </div>
  );
};

export default SearchButton;
