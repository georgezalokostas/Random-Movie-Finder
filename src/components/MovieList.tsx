const MovieList = (props: { movies: any[] }) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
