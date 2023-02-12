import { IMovie } from "../interfaces/IMovie";

const DisplayMovieDetails = ({ movie }: { movie: IMovie | undefined }) => {
  if (!movie) {
    return <div />;
  }
  return (
    <div>
      <img src={movie.Poster} alt="movie"></img>
      <h3>Title: {movie.Title}</h3>
      <h3>Type: {movie.Type}</h3>
      <h3>Year: {movie.Year}</h3>
      <h3>ImdbID: {movie.imdbID}</h3>
    </div>
  );
};

export default DisplayMovieDetails;
