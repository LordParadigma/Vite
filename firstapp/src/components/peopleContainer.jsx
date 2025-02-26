import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function peopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://657869f6f08799dc80453ea2.mockapi.io/persondata").then(
      (res) =>
        res.json().then((data) => {
          console.log(data);
          setPeople(data);
        })
    );
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map((person) => {
          return (
            <Card
              name={person.name}
              title={person.jobtitle}
              imageUrl={person.avatar}
            />
          );
        })}
      </div>
    </div>
  );
}
