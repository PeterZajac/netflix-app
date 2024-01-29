import "./ReloadMovieButton.css";

const ReloadMovieButton = ({ reloadMovie }) => {
  return (
    <button className="reload-movie-button" onClick={reloadMovie}>
      Načitaj znovu filmy
    </button>
  );
};

export default ReloadMovieButton;
