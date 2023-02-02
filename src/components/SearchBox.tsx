import { Dispatch, SetStateAction } from "react";
import { IMovie } from "../interfaces/IMovie";
import MovieList from "./MovieList";

const SearchBox = <T extends IMovie>({
  setSearchTerm,
  movies,
}: {
  setSearchTerm: Dispatch<SetStateAction<string>>;
  movies: T[];
}) => {
  return (
    <div>
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
