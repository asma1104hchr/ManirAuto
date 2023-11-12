import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Select from "react-select"; // Import de React Select

const Annonce2 = () => {
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
        <h1 className="text-4xl font-bold text-black mb-1 mt-5">
          Décrivez votre véhicule et <br /> indiquez son prix
        </h1>
      </div>

      {/* Deux champs (Description et Prix) */}
      <div className="w-full max-w-3xl p-1 mx-auto mt-8">
        <form>
          <div className="p-4 space-y-4">
            {/* Description (Champ de texte multiligne) */}
            <div className="space-y-1">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900 h-32"
              />
            </div>

            {/* Prix (Champ de texte) */}
            <div className="space-y-1">
              <label
                htmlFor="prix"
                className="block text-sm font-medium text-gray-700"
              >
                Prix
              </label>
              <input
                type="text"
                id="prix"
                name="prix"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
              />
            </div>
          </div>
        </form>
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
          to="/annonce3"
          className="bg-purple-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
        >
          Suivant
        </Link>
      </div>
    </div>
  );
};

export default Annonce2;
