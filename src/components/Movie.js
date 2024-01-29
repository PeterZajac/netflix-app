import "./Movie.css";
import data from "../data";
console.log(data);
const Movie = () => {
  return (
    <div className="all-movies">
      {data.map((movie) => {
        const { id, image, title, age, tags, description } = movie;
        return (
          <div className="one-movie" key={id}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
