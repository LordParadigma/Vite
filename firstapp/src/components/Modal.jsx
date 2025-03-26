import React, { useEffect, useState } from "react";
import { fetchMovieDetails } from "../utils/api";

const Modal = ({ data, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const loadDetails = async () => {
      if (data?.Title) {
        const result = await fetchMovieDetails(data.Title);
        setDetails(result);
      }
    };
    loadDetails();
  }, [data]);

  if (!data) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const openTrailer = () => {
    if (details && details.Title) {
      const query = encodeURIComponent(details.Title + " trailer");
      window.open(
        `https://www.youtube.com/results?search_query=${query}`,
        "_blank"
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          ✖
        </button>
        {details && (
          <>
            <h2 className="text-2xl font-bold">{details.Title}</h2>
            <p className="text-sm">
              {details.Year} <span className="mx-1">•</span> {details.Runtime}
            </p>
            {details.Poster !== "N/A" && (
              <img
                src={details.Poster}
                alt={details.Title}
                className="mt-4 w-full rounded-lg"
              />
            )}
            <p className="mt-4">{details.Plot}</p>
            <p className="mt-4">
              <strong>Genre:</strong> {details.Genre}
            </p>
            <p className="mt-4">
              <strong>Actors:</strong> {details.Actors}
            </p>
            <p className="mt-4">
              <strong>Director:</strong> {details.Director}
            </p>
            <button
              onClick={openTrailer}
              className="bg-blue-900 text-white p-2 rounded mt-4"
            >
              Trailer ansehen
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
