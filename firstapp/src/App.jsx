import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import Modal from "./components/Modal";

const App = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentModal, setCurrentModal] = useState(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    // BrowserRouter hier entfernen
    <div className="font-sans bg-gray-700 text-white min-h-screen">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      {currentModal && (
        <Modal data={currentModal} onClose={() => setCurrentModal(null)} />
      )}
    </div>
  );
};

export default App;
