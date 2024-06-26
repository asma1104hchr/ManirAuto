import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Annonce3 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Logo in the top-left corner */}
      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>

      {/* Button (Annuler) in the top-right corner */}
      <div className="absolute top-0 right-0 p-4">
        <Link
          to="/"
          className="bg-purple-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
        >
          Annuler
        </Link>
      </div>

      {/* Text in the middle of the page */}
      <div className="text-center mt-1">
        <h1 className="text-4xl font-bold text-black mb-1 mt-1">
          Importez les photos <br />
          de votre véhicule
        </h1>
      </div>

      {/* File Upload Input and Photos Container */}
      <div className="w-full max-w-3xl p-1 mx-auto mt-8">
        <div className="p-4 space-y-4">
          <div className="w-2/3 mx-auto">
            <div
              className={`border-2 border-gray-500 rounded-md p-2 ${
                selectedFiles.length === 0 ? "h-48" : ""
              }`}
            >
              <label
                htmlFor="fileInput"
                className={`bg-purple-500 text-white p-3 rounded w-2/3 text-center cursor-pointer ${
                  selectedFiles.length === 0 ? "mt-12 ml-16" : ""
                }`}
              >
                {selectedFiles.length === 0
                  ? "Ajoutez les photos"
                  : "Modifier les photos"}
              </label>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                accept="image/*"
                onChange={handleFileUpload}
                multiple
                className="hidden"
              />
              <div className="grid grid-cols-3 gap-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="w-full h-24">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deux boutons (Retour et Suivant) with more space between them */}
      <div className="flex justify-between mt-8 space-x-4">
        <Link
          to="/annonce1"
          className="bg-gray-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
        >
          Retour
        </Link>
        <Link
          to="/annonce4"
          className="bg-purple-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
};

export default Annonce3;
