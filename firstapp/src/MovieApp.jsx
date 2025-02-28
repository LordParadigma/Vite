import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import List from "./components/List";
import PeopleContainer from "./components/peopleContainer";
import Card from "./components/Card";
import logo from "./assets/DW.png";

const MoviePage = () => {
  return (
    <div className="bg-gray-700 text-white min-h-screen font-sans">
      <header className="flex items-center justify-between p-5 bg-gray-700">
        <a href="movie.html">
            <img src={logo} alt="Logo" className="w-[230px] h-[230px]" />
        </a>
        <div className="flex items-center gap-3">
          <input
            id="search-bar"
            type="text"
            placeholder="Suche Filme..."
            className="p-2 text-black text-lg w-72"
          />
          <button
            id="search-btn"
            className="p-2 text-lg bg-blue-900 text-white border-none cursor-pointer"
          >
            Suchen
          </button>
        </div>
      </header>
      <main className="ml-20">
        <section className="mb-10">
          <h2 className="text-3xl mb-5">Empfohlene Filme</h2>
          <div id="empFilme" className="flex flex-wrap gap-4 p-5"></div>
        </section>
        <section>
          <h2 className="text-3xl mb-5">Beliebte Filme</h2>
          <div id="belFilme" className="flex flex-wrap gap-4 p-5"></div>
        </section>
      </main>
    </div>
  );
};

export default MoviePage;
