import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onCardClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {movies
        .filter((movie) => movie.Poster && movie.Poster !== "N/A")
        .map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onCardClick={onCardClick}
          />
        ))}
    </div>
  );
};

export default MovieList;
