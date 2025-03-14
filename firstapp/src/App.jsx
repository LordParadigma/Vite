import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import Modal from "./components/Modal";

const App = () => {
  const [currentModal, setCurrentModal] = useState(null);

  useEffect(() => {
    document.cookie = "user=SigmaBoy; path=/;";
    sessionStorage.setItem("ID", "ABC123");
    localStorage.setItem("FavMeme", "LowTaperFade (its still massive)");
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MoviePage setCurrentModal={setCurrentModal} />}
        />
        <Route
          path="/search"
          element={<SearchPage setCurrentModal={setCurrentModal} />}
        />
      </Routes>

      {currentModal && (
        <Modal data={currentModal} onClose={() => setCurrentModal(null)} />
      )}
    </div>
  );
};

export default App;
