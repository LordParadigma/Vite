import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../utils/api";
import MovieList from "../components/MovieList";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    const loadSearchResults = async () => {
      if (query) {
        const movies = await fetchMovies(query);
        setResults(movies);
      }
    };
    loadSearchResults();
  }, [query]);

  return (
    <main className="ml-20">
      <section>
        <h2 className="text-4xl mb-4">Suchergebnisse für "{query}"</h2>
        <MovieList movies={results} className="w-[250px]" />
      </section>
    </main>
  );
};

export default SearchPage;
