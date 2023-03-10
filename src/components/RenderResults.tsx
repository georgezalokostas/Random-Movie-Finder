import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";

const DisplayMovieDetails = ({ movie }: { movie: IMovie | undefined }) => {
  if (!movie) {
    return <div />;
  }

  return (
    <div>
      <h3 className="header">
        {
          resultsHeaderText[
            Math.floor(Math.random() * resultsHeaderText.length)
          ]
        }
      </h3>
      <div className="container">
        <div className="item1">
          <img className="poster" src={movie.Poster} alt="Movie poster" />
        </div>
        <div className="item2">
          <br /> <br /> <br /> <br /> <br />
          <h3 className="movie-title">
            {movie.Title + " " + "(" + movie.Year + ")"}
          </h3>
          <hr className="solidLine"></hr>
          <h4 className="genres">
            {movie.Genre + " " + " | " + " " + "⭐" + movie.imdbRating + "/10"}
          </h4>
          <br />
          <h5>By: {movie.Director}</h5>
          <h5>{movie.Plot}</h5>
          <h5>Starring: {movie.Actors}</h5>
          <div className="buttons-container">
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              className="imdbButton"
            >
              <span className="openIn">Open in: </span>
              <img className="imdblogo" src="/imdb.png" alt="IMDb Logo" />
            </a>
            <a
              href={
                "https://fmovies.ps/search/" +
                movie.Title.split(" ").join("-") +
                "-" +
                movie.Year
              }
              target="_blank"
              className="fmoviesButton"
            >
              <span className="openIn">Watch in: </span>
              <img
                className="fmovieslogo"
                src="/fmovies.png"
                alt="Fmovies Logo"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="solidLineEnd"></hr>
    </div>
  );
};

export default DisplayMovieDetails;
