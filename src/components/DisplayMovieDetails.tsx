import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";
import { Top250MoviesIDs } from "./text_arrays/Top250MoviesIDs";
import { getRandomItem } from "./Functions";
import "./Styles.css";
import imdbLogo from "../images/imdb.png";
import fmoviesLogo from "../images/fmovies.png";

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

  const randomItemFromList = getRandomItem(Top250MoviesIDs);

  //TODO: Fix flexbox's elements size when window shrinks.
  //TODO: Add url to watch movie in Fmovies.

  return (
    <div>
      <h3 className="header">
        {
          resultsHeaderText[
            Math.floor(Math.random() * resultsHeaderText.length)
          ]
        }
      </h3>
      <div className="flexbox-container">
        <div className="flexbox-item1">
          <img className="poster" src={movie.Poster} alt="Movie poster" />
        </div>
        <div className="flexbox-item2">
          <br /> <br /> <br /> <br /> <br />
          <h3 className="movie-title">
            {movie.Title + " (" + movie.Year + ")"}
            <br />
            <br />
            {"⭐" + movie.imdbRating + "/10"}
          </h3>
          <hr className="solidLine"></hr>
          <h4 className="genres"> {movie.Genre} </h4>
          <br />
          <h5>By: {movie.Director}</h5>
          <h5>{movie.Plot}</h5>
          <h5>Starring: {movie.Actors}</h5>
          <h4 className="openIn">Open in</h4>
          <h3>
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
            >
              <img className="imdblogo" src={imdbLogo} alt="IMDb Logo" />
            </a>
          </h3>
          <h4 className="openIn">Watch in</h4>
          <h3>
            {/* <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
            >
              <img className="fmovieslogo" src={fmoviesLogo} alt="Fmovies Logo" />
            </a> */}
          </h3>
          <br />
          <button
            onClick={() => {
              getMovieRequest(randomItemFromList);
            }}
          >
            Find Next Movie!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovieDetails;
