import React from "react";

const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-sm relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-bold">{data.Title}</h2>
        <p className="text-sm">{data.Year}</p>
        {data.Poster !== "N/A" && (
          <img
            src={data.Poster}
            alt={data.Title}
            className="mt-2 w-full rounded-lg"
          />
        )}
        <p className="mt-3">{data.Plot}</p>
      </div>
    </div>
  );
};

export default Modal;
