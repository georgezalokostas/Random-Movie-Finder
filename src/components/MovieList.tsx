const MovieList = (props: { movies: any[] }) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
