import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";

const API_KEY = "efc945e3";

const SearchPage = ({ setCurrentModal }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  // Reset on new query
  useEffect(() => {
    setAllMovies([]);
    setVisibleCount(0);
    setTotalResults(0);
    setCurrentPage(1);
    const loadInitialMovies = async () => {
      if (query) {
        const res1 = await fetch(
          `https://www.omdbapi.com/?s=${query}&type=movie&page=1&apikey=${API_KEY}`
        );
        const data1 = await res1.json();
        if (data1.Response === "True") {
          const total = parseInt(data1.totalResults);
          setTotalResults(total);
          let movies = data1.Search.filter(
            (movie) => movie.Poster && movie.Poster !== "N/A"
          );
          // Wenn weniger als 12 gefilterte Filme, Seite 2 holen
          if (movies.length < 12 && total > movies.length) {
            const res2 = await fetch(
              `https://www.omdbapi.com/?s=${query}&type=movie&page=2&apikey=${API_KEY}`
            );
            const data2 = await res2.json();
            if (data2.Response === "True") {
              const movies2 = data2.Search.filter(
                (movie) => movie.Poster && movie.Poster !== "N/A"
              );
              movies = movies.concat(movies2);
              setCurrentPage(2);
            }
          }
          movies = movies.slice(0, 12);
          setAllMovies(movies);
          setVisibleCount(movies.length);
        } else {
          setAllMovies([]);
          setVisibleCount(0);
          setTotalResults(0);
        }
      }
    };
    loadInitialMovies();
  }, [query]);

  const loadMore = async () => {
    const nextPage = currentPage + 1;
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&type=movie&page=${nextPage}&apikey=${API_KEY}`
    );
    const data = await res.json();
    if (data.Response === "True") {
      const newMovies = data.Search.filter(
        (movie) => movie.Poster && movie.Poster !== "N/A"
      );
      // Vermeide Duplikate basierend auf imdbID
      const uniqueNewMovies = newMovies.filter(
        (m) => !allMovies.some((am) => am.imdbID === m.imdbID)
      );
      const updatedMovies = [...allMovies, ...uniqueNewMovies];
      setAllMovies(updatedMovies);
      setVisibleCount(updatedMovies.length);
      setCurrentPage(nextPage);
    }
  };

  return (
    <main className="ml-20">
      <section>
        <h2 className="text-4xl mb-4">Suchergebnisse für "{query}"</h2>
        <MovieList
          movies={allMovies.slice(0, visibleCount)}
          onCardClick={setCurrentModal}
        />
        <div className="mt-4 flex gap-4">
          {/* "Mehr anzeigen" nur, wenn noch nicht alle Filme geladen wurden */}
          {visibleCount < allMovies.length &&
            allMovies.length < totalResults && (
              <button
                className="p-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                onClick={() => setVisibleCount(allMovies.length)}
              >
                Mehr anzeigen
              </button>
            )}
          {allMovies.length < totalResults &&
            visibleCount === allMovies.length && (
              <button
                className="p-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                onClick={loadMore}
              >
                Mehr laden
              </button>
            )}
          {visibleCount > 12 && (
            <button
              className="p-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              onClick={() => setVisibleCount(12)}
            >
              Weniger anzeigen
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
