import { useEffect, useState } from "react";

const apiKey = "efc945e3";

document.cookie = "user=SigmaBoy; path=/;";
sessionStorage.setItem("ID", "ABC123");
localStorage.setItem("FavMeme", "LowTaperFade (its still massive)");

const fetchMovies = async (searchQuery, type = "movie", limit = 0) => {
  let allMovies = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchQuery}&type=${type}&page=${page}&apikey=${apiKey}`
    );
    const data = await response.json();

    if (data.Response === "True") {
      allMovies = [...allMovies, ...data.Search];
      if (limit && allMovies.length >= limit) return allMovies.slice(0, limit);
      if (allMovies.length >= data.totalResults) break;
      page++;
    } else {
      break;
    }
  }
  return allMovies;
};

const MovieFetcher = () => {
  const [empFilme, setEmpFilme] = useState([]);
  const [belFilme, setBelFilme] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMovies = async () => {
      setEmpFilme(await fetchMovies("Avengers", "movie", 12));
      setBelFilme(await fetchMovies("Batman", "movie", 12));
    };
    loadMovies();
  }, []);

  return (
    <div className="p-5 bg-gray-800 text-white min-h-screen">
      <header className="flex justify-between items-center p-5 bg-gray-700">
        <a href="movie.html">
          <img src="images/DW.png" alt="Logo" className="w-56 h-56" />
        </a>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Suche Filme..."
            className="p-2 text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="p-2 bg-blue-700 text-white"
            onClick={() => {
              if (searchQuery.trim()) {
                window.location.href = `search.html?query=${encodeURIComponent(
                  searchQuery
                )}`;
              }
            }}
          >
            Suchen
          </button>
        </div>
      </header>

      <main className="p-5">
        <section>
          <h2 className="text-3xl">Empfohlene Filme</h2>
          <div className="flex flex-wrap gap-4">
            {empFilme.map((movie) => (
              <div key={movie.imdbID} className="movie-card p-3 bg-gray-700">
                <img src={movie.Poster} alt={movie.Title} className="w-full" />
                <h3 className="text-lg">{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h2 className="text-3xl">Beliebte Filme</h2>
          <div className="flex flex-wrap gap-4">
            {belFilme.map((movie) => (
              <div key={movie.imdbID} className="movie-card p-3 bg-gray-700">
                <img src={movie.Poster} alt={movie.Title} className="w-full" />
                <h3 className="text-lg">{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MovieFetcher;
