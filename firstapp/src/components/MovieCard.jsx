import React from "react";

const MovieCard = ({ movie, onCardClick }) => {
  return (
    <div
      className="w-[200px] text-center bg-gray-700 text-white p-2.5 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
      onClick={() => onCardClick(movie.Title)}
    >
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto rounded-lg mb-2"
        />
      )}
      <h3 className="text-lg font-semibold">{movie.Title}</h3>
      <p className="text-sm">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
