import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/DW.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Suchfeld leeren
    }
  };

  return (
    <header className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-[120px] h-[120px]" />
      </Link>
      <form
        className="flex items-center gap-2.5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Suche Filme..."
          className="p-2.5 text-base w-[300px] bg-gray-700 text-white placeholder-gray-400 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="p-2.5 text-base bg-blue-900 text-white border-none cursor-pointer rounded hover:bg-blue-800"
        >
          Suchen
        </button>
      </form>
    </header>
  );
};

export default Header;
