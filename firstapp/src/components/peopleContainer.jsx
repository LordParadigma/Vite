import React from "react";
import Card from "./Card";

export default function peopleContainer() {
  return (
    <div>
      <h1>People</h1>
      <div>
        <Card
          name="Hans"
          title="CEO"
          imageUrl="https://www.w3schools.com/howto/img_avatar.png"
        />
      </div>
    </div>
  );
}
