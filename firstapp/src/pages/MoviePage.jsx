import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/api";
import MovieList from "../components/MovieList";

const MoviePage = ({ setCurrentModal }) => {
  const [empFilme, setEmpFilme] = useState([]);
  const [belFilme, setBelFilme] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const empfohlene = await fetchMovies("Avengers", "movie", 12);
      const beliebte = await fetchMovies("Batman", "movie", 12);
      setEmpFilme(empfohlene);
      setBelFilme(beliebte);
    };
    loadMovies();
  }, []);

  return (
    <main className="ml-20">
      <section className="mb-12">
        <h2 className="text-4xl mb-4">Empfohlene Filme</h2>
        <MovieList movies={empFilme} onCardClick={setCurrentModal} />
      </section>
      <section>
        <h2 className="text-4xl mb-4">Beliebte Filme</h2>
        <MovieList movies={belFilme} onCardClick={setCurrentModal} />
      </section>
    </main>
  );
};

export default MoviePage;
