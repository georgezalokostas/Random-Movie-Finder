import { IMovie } from "../interfaces/IMovie";
import { resultsHeaderText } from "./text_arrays/ResultsHeaderText";
import { Top250MoviesIDs } from "./text_arrays/Top250MoviesIDs";
import { getRandomItem } from "./Functions";
import "./Styles.css";

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
          <img src={movie.Poster} alt="Movie poster" />
        </div>
        <div className="flexbox-item2">
          <h3>{movie.Title + " (" + movie.Year + ")"}</h3>
          <h3>
            <a
              href={"https://www.imdb.com/title/" + movie.imdbID}
              target="_blank"
            >
              Open in IMDB
            </a>
            {" - ⭐" + movie.imdbRating + "/10"}
          </h3>
          <h5>By: {movie.Director}</h5>
          <h5>Starring: {movie.Actors}</h5>
          <h5>{movie.Plot}</h5>
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
