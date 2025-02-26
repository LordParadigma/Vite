import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import List from "./components/List";
import PeopleContainer from "./components/peopleContainer";
import Card from "./components/Card";

const MovieApp = () => {
  return (
    <div className="app">
      <header className="header">
        <a href="movie.html">
          <img src="./assets/DW.png" alt="Logo" className="logo" />
        </a>
        <div className="search-container">
          <input id="search-bar" type="text" placeholder="Suche Filme..." />
          <button id="search-btn">Suchen</button>
        </div>
      </header>
      <main>
        <section className="sec1">
          <h2>Empfohlene Filme</h2>
          <div id="empFilme" className="movie-list"></div>
        </section>
        <section className="sec2">
          <h2>Beliebte Filme</h2>
          <div id="belFilme" className="movie-list"></div>
        </section>
      </main>
      <style jsx>{`
        :root {
          --bg-color: #444444;
          --text-color: #ffffff;
          --highlight-color: #000764;
          --border-radius: 10px;
          --box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          --font-size-small: 16px;
          --font-size-medium: xx-large;
          --font-size-large: 55px;
          --font-size-xlarge: 25px;
          --font-size-small-text: 15px;
        }

        .app {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: var(--bg-color);
          color: var(--text-color);
        }

        h2 {
          font-size: var(--font-size-medium);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background-color: var(--bg-color);
        }

        .logo {
          width: 230px;
          height: 230px;
        }

        .search-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .search-container input {
          padding: 10px;
          font-size: var(--font-size-small);
          width: 300px;
        }

        .search-container button {
          padding: 10px;
          font-size: var(--font-size-small);
          background-color: var(--highlight-color);
          color: var(--text-color);
          border: none;
          cursor: pointer;
        }

        .movie-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          padding: 20px;
        }

        .movie-card {
          width: 200px;
          text-align: center;
          background: var(--bg-color);
          color: var(--text-color);
          padding: 10px;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }

        .movie-card img {
          width: 100%;
          height: auto;
          border-radius: var(--border-radius);
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #939393;
          padding: 20px;
          border-radius: var(--border-radius);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          z-index: 1000;
        }

        .modal-content img {
          width: 300px;
          height: auto;
        }

        .modal-content h2 {
          margin: 10px 0;
          font-size: var(--font-size-large);
        }

        .modal-content h3 {
          margin: 10px 0;
          font-size: var(--font-size-xlarge);
        }

        .modal-content p {
          margin: 10px 0;
          font-size: var(--font-size-small-text);
        }

        .modal .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default MovieApp;
