import "./Movie.css";
import data from "../data";
import MovieDeleteButton from "./MovieDeleteButton";
import { useState } from "react";
import AllDeleteButton from "./AllDelefeButton";
import ReloadMovieButton from "./ReloadMovieButton";

const Movie = () => {
  const [movieList, setMovieList] = useState(data);

  const deleteOneMovie = (id) => {
    const filteredMovies = movieList.filter((oneMovie) => oneMovie.id !== id);
    setMovieList(filteredMovies);
  };

  const deleteAllMovies = () => {
    setMovieList([]);
  };

  const reloadMovie = () => {
    if (movieList.length === 0) {
      setMovieList(data);
    } else {
      alert("Už máš filmy načítané kokot");
    }
  };
  return (
    <>
      <div className="all-movies">
        {movieList.map((movie) => {
          const { id, image, title, age, tags, description } = movie;
          return (
            <div className="one-movie" key={id}>
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
            </div>
          );
        })}
      </div>
      <div className="bottom-buttons">
        <AllDeleteButton deleteAll={deleteAllMovies} />ň
        <ReloadMovieButton reloadMovie={reloadMovie} />
      </div>
    </>
  );
};

export default Movie;
