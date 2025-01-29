import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import List from "./components/List";
import PeopleContainer from "./components/peopleContainer";
import Card from "./components/Card";

function App() {

  return (
    <>
      <div className="">

          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">2 Cards und Daten Video</h2>
            <PeopleContainer />
          </div>

      </div>
    </>
  );
}

export default App;
