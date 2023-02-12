import { Dispatch, SetStateAction } from "react";
import { IMovie } from "../interfaces/IMovie";
import MovieList from "./MovieList";
import "./SearchBox.css";

const SearchBox = <T extends IMovie>({
  setSearchTerm,
  movies,
}: {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  movies: T[];
}) => {
  let searchTerm = "";

  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          searchTerm = event.target.value;
        }}
      />
      <button onClick={() => setSearchTerm(searchTerm)}>Click me</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchBox;
