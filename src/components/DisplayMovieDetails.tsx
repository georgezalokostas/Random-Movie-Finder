import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";

const DisplayMovieDetails = ({ movie }: { movie: IMovie | undefined }) => {
  if (!movie) {
    return <div />;
  }
  return (
    <div>
      <h3>
        {
          resultsHeaderText[
            Math.floor(Math.random() * resultsHeaderText.length)
          ]
        }
      </h3>
      <img src={movie.Poster} alt="movie"></img>
      <h3> {movie.Title + " (" + movie.Year + ")"}</h3>
      {/* <h3>Year: {movie.Year}</h3> */}
      {/* <h3>Type: {movie.Type}</h3> */}
      {/* <h3>ImdbID: {movie.imdbID}</h3> */}
    </div>

    //TODO: Open movie in IMDB (redirect)
  );
};

export default DisplayMovieDetails;
