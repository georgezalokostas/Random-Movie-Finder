import { Dispatch, SetStateAction } from "react";
import MovieList from "./MovieList";

const SearchBox = (
  { setSearchTerm }: { setSearchTerm: Dispatch<SetStateAction<string>> },
  movies: string[]
) => {
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
