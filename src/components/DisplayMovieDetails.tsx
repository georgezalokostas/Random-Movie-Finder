import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";
import { Top250MoviesIDs } from "./text_arrays/Top250MoviesIDs";

const DisplayMovieDetails = ({
  getMovieRequest,
  movie,
}: {
  getMovieRequest: (searchTerm: string) => Promise<void>;
  movie: IMovie | undefined;
}) => {
  if (!movie) {
    return <div />;
  }

  const randomItemFromList =
    Top250MoviesIDs[Math.floor(Math.random() * Top250MoviesIDs.length)];

  return (
    <div className="details">
      <h3>
        {
          resultsHeaderText[
            Math.floor(Math.random() * resultsHeaderText.length)
          ]
        }
      </h3>
      <img src={movie.Poster} alt="Movie poster" />
      <h3>{movie.Title + " (" + movie.Year + ")"}</h3>
      <h3>
        <a href={"https://www.imdb.com/title/" + movie.imdbID} target="_blank">
          Open in IMDB
        </a>
        {" - ⭐" + movie.imdbRating + "/10"}
      </h3>
      <h5>By: {movie.Director}</h5>
      <h5>Starring: {movie.Actors}</h5>
      <h5>{movie.Plot}</h5>
      <br />
      <button
        className="search-button"
        onClick={() => {
          getMovieRequest(randomItemFromList);
        }}
      >
        Search Next
      </button>
    </div>
  );
};

export default DisplayMovieDetails;
