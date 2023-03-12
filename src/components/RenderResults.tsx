import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";
import imdbLogo from "./images/imdb.png";
import fmoviesLogo from "./images/fmovies.png";
import teniesOnlineLogo from "./images/teniesonline.png";
import watchMoviesHDLogo from "./images/watchmovieshd.png";
import rottenTomatoesLogo from "./images/rottentomatoes.png";

const DisplayMovieDetails = ({ movie }: { movie: IMovie | undefined }) => {
  if (!movie) {
    return <div />;
  }

  return (
    <div>
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
          <div className="buttons-container">
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
              className="imdbButton"
            >
              <span>Open in:</span>
              <img className="imdblogo" src={imdbLogo} alt="IMDB" />
            </a>
            <a
              href={
                "https://www.rottentomatoes.com/search?search=" +
                movie.Title.split(" ").join("+") +
                "+" +
                movie.Year
              }
              target="_blank"
              className="rottentomatoesButton"
            >
              <span>Open in:</span>
              <img
                className="rottentomatoeslogo"
                src={rottenTomatoesLogo}
                alt="RottenTomatoes"
              />
            </a>
          </div>
          <h5>By: {movie.Director}</h5>
          <h5>{movie.Plot}</h5>
          <h5>Starring: {movie.Actors}</h5>
          <div className="buttons-container">
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
              <span className="openIn">Search in: </span>
              <img className="fmovieslogo" src={fmoviesLogo} alt="Fmovies" />
            </a>
            <a
              href={
                "https://tenies-online.best/?story=" +
                movie.Title.split(" ").join("+") +
                "+" +
                movie.Year +
                "&sfSbm=Search&titleonly=3&do=search&subaction=search"
              }
              target="_blank"
              className="teniesOnlineButton"
            >
              <span className="openIn">Search in:</span>
              <img className="teniesonlinelogo" src={teniesOnlineLogo} />
            </a>
            <a
              href={
                "https://watchmovieshd.ru/home?fbclid=IwAR2qMhHuJd6o__P1WqixZ98D7QfhpMBcxpjMfRpOA5XXLguwTMa9HbUjVEU"
              }
              target="_blank"
              className="watchMoviesHDButton"
            >
              <span className="openIn">Search in:</span>
              <img className="watchmovieshdlogo" src={watchMoviesHDLogo} />
            </a>
          </div>
        </div>
      </div>
      <hr className="solidLineEnd"></hr>
    </div>
  );
};

export default DisplayMovieDetails;
