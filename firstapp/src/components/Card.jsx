import React from "react";

export default function Card({name, title, imageUrl}) {
  return (
    <div className="flex flex-row h-40">
      <div>
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>
      <div>
        <img src={imageUrl} alt="Sigmaboy" className="object-cover" />
      </div>
    </div>
  );
}
