import React from "react";

export default function Card({ name, title, imageUrl }) {
  return (
    <div className="grid grid-cols-2 h-40 border">
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{title}</h4>
      </div>
      <div className="w-full">
        <img
          src={imageUrl}
          alt="Sigmaboy"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
