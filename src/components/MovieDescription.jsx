import { useParams, useNavigate } from "react-router-dom";
import { moviesData } from "../moviesData";

const MovieDescription = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <br /><br />
      <button onClick={() => navigate("/")} style={{ padding: "10px 20px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default MovieDescription;
