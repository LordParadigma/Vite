import { useState } from "react";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Suche nach:", searchTerm);
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <a href="/MovieApp.jsx">
          <img
            src="/images/DW.png"
            alt="Logo"
            style={{ width: 230, height: 230 }}
          />
        </a>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Suche Filme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <button onClick={handleSearch} style={styles.searchButton}>
            Suchen
          </button>
        </div>
      </header>

      <main style={styles.main}>
        <section id="search-results" style={styles.movieList}></section>
      </main>
    </div>
  );
};

// Inline Styles
const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#444444",
    color: "#ffffff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#444444",
    color: "#fff",
  },
  main: {
    justifyContent: "space-between",
    marginLeft: "80px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    width: "300px",
  },
  searchButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#000764",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  movieList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    padding: "20px",
  },
  movieCard: {
    width: "200px",
    textAlign: "center",
    background: "#444444",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  movieCardImg: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
};

export default SearchPage;
