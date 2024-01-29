import "./MovieDeleteButton.css";

const MovieDeleteButton = ({ deleteMovie }) => {
  return (
    <button className="movie-delete-button" onClick={deleteMovie}>
      Vymazať film
    </button>
  );
};
export default MovieDeleteButton;
