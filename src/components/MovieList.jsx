import MovieCard from "./MovieCard";
import { moviesData } from "../moviesData";

const MovieList = () => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      padding: "20px"
    }}>
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
