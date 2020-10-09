import React from "react";
import "../styles.css";
import Movie from "./movie";

export default function App() {
  const initialMovies = [
    {
      title: "Check De! India",
      rating: 8.2,
      actors: "Shah Rukh Khan, Sagarika Gatake",
      img: "https://static.toiimg.com/photo/39823548.cms",
      isWatchlisted: false,
      isLiked: false
    },
    {
      title: "Doom",
      rating: 6.7,
      actors: "Abhishek Bachchan, Uday Chopara, Jhon Aabraham",
      img:
        "https://i.pinimg.com/originals/9a/14/b6/9a14b607ba53616a131e71f80b0bf6db.jpg",
      isWatchlisted: false,
      isLiked: false
    },
    {
      title: "Doom 3",
      rating: 8.2,
      actors: "Aamir Khan, Abhishek Bachchan, Uday Chopara, Katrina Kaif",
      img:
        "https://i.pinimg.com/564x/08/c9/30/08c93031d79765d3ec7e80baad331b1f.jpg",
      isWatchlisted: false,
      isLiked: false
    }
  ];

  const [movies, setMovies] = React.useState(initialMovies);

  const handleDelete = function (title) {
    const moviesCopy = movies.filter((movie) => movie.title !== title);
    setMovies(moviesCopy);
  };

  return (
    <>
      <h1>Bollywood Movies</h1>
      {movies.length === 0 && <h2>No Movie in List</h2>}
      {movies.map((movie) => (
        <Movie key={movie.title} data={movie} handleDelete={handleDelete} />
      ))}
    </>
  );
}
