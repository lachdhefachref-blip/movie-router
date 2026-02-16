// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "220px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      {/* Lien vers la page description */}
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={movie.posterURL}
          alt={movie.title}
          width="200"
          style={{ borderRadius: "4px" }}
        />
        <h3 style={{ margin: "10px 0 5px 0" }}>{movie.title}</h3>
      </Link>

      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
