import React from "react";
import { Link } from "react-router-dom";

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header className="flex items-center justify-between p-5 bg-gray-700 text-white">
      <Link to="/">
        <img src="/images/DW.png" alt="Logo" className="w-[230px] h-[230px]" />
      </Link>
      <div className="flex items-center gap-2.5">
        <input
          type="text"
          placeholder="Suche Filme..."
          className="p-2.5 text-base w-[300px] bg-gray-600 text-white placeholder-gray-400 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="p-2.5 text-base bg-blue-900 text-white border-none cursor-pointer rounded hover:bg-blue-800"
          onClick={handleSearch}
        >
          Suchen
        </button>
      </div>
    </header>
  );
};

export default Header;
