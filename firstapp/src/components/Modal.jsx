import React from "react";

const Modal = ({ data, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-300 p-5 rounded-lg max-w-2xl w-full relative">
        <span
          className="absolute top-3 right-3 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>

        {data.Poster !== "N/A" && (
          <img
            src={data.Poster}
            alt={data.Title}
            className="w-full max-w-[300px] h-auto mx-auto rounded-lg"
          />
        )}

        <div className="mt-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{data.Title}</h2>
          <h3 className="text-2xl mb-2">Veröffentlichungsjahr: {data.Year}</h3>
          <p className="text-lg text-gray-700">{data.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
