import React from "react";

export default function Movie(movie) {
  let { img, rating, title, actors, isLiked, isWatchlisted } = movie.data;
  const { handleDelete } = movie;

  const [checkIsLiked, setIsLiked] = React.useState(isLiked);
  const [checkIsWatchlisted, setIsWatchlisted] = React.useState(isWatchlisted);

  const handleLike = function () {
    isLiked = !isLiked;
    setIsLiked(isLiked);
  };
  const handleWatchlist = function (el) {
    isWatchlisted = !isWatchlisted;
    setIsWatchlisted(isWatchlisted);
  };

  return (
    <>
      <div className="card">
        <img src={img} alt={title} />
        <div className="container">
          <h4>
            <b>{title}</b>
          </h4>
          <p>
            Rating:{rating}
            <br />
            Actors:{actors}
          </p>
          <button
            className={checkIsLiked && "red"}
            onClick={() => handleLike(setIsLiked)}
          >
            like
          </button>
          <button
            className={checkIsWatchlisted && "red"}
            onClick={() => handleWatchlist(setIsWatchlisted)}
          >
            Add to watchlist
          </button>
          <button onClick={() => handleDelete(title)}>Delete</button>
        </div>
      </div>
    </>
  );
}
