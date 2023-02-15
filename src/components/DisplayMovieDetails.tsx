import { IMovie } from "../interfaces/IMovie";

const DisplayMovieDetails = ({ movie }: { movie: IMovie | undefined }) => {
  var resultsHeaderText = [
    "Oh look what I found!",
    "Here's a good one for you!",
    "I'm sure you're gonna like this!",
    "Hey, check this out!",
    "This is a good one!",
    "I've never seen this one!",
    "",
  ];

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
      <h3>Title: {movie.Title}</h3>
      <h3>Type: {movie.Type}</h3>
      <h3>Year: {movie.Year}</h3>
      <h3>ImdbID: {movie.imdbID}</h3>
    </div>

    //TODO: Open movie in IMDB (redirect)
  );
};

export default DisplayMovieDetails;
