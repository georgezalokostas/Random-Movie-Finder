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
  return (
    <div className="searchbox">
    <input
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
    <MovieList movies={movies} />
  </div>
  );
};

export default SearchBox;
