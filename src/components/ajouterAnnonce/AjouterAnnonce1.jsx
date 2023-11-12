import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Select from "react-select";

const marqueOptions = [
  { value: "marque1", label: "Marque 1" },
  { value: "marque2", label: "Marque 2" },
  { value: "marque3", label: "Marque 3" },
  // Add more options for marque here
];

const modeleOptions = [
  { value: "modele1", label: "Modèle 1" },
  { value: "modele2", label: "Modèle 2" },
  { value: "modele3", label: "Modèle 3" },
  // Add more options for modèle here
];

const energieOptions = [
  { value: "energie1", label: "Énergie 1" },
  { value: "energie2", label: "Énergie 2" },
  { value: "energie3", label: "Énergie 3" },
  // Add more options for énergie here
];

const boiteOptions = [
  { value: "boite1", label: "Boite 1" },
  { value: "boite2", label: "Boite 2" },
  { value: "boite3", label: "Boite 3" },
  // Add more options for boite here
];

const couleurOptions = [
  { value: "couleur1", label: "Couleur 1" },
  { value: "couleur2", label: "Couleur 2" },
  { value: "couleur3", label: "Couleur 3" },
  // Add more options for couleur here
];

const wilayaOptions = [
  { value: "wilaya1", label: "Wilaya 1" },
  { value: "wilaya2", label: "Wilaya 2" },
  { value: "wilaya3", label: "Wilaya 3" },
  // Add more options for wilaya here
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  // Define other custom styles here
};

const Annonce1 = () => {
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
      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold text-black mb-1 mt-14">
          Dites-nous les caractéristiques de base <br /> de votre voiture.
        </h1>
      </div>

      {/* Form in the center of the page */}
      <div className="w-full max-w-3xl p-1 mx-auto">
        <form>
          <div className="p-4 space-y-4">
            {/* Marque (Dropdown) */}
            <div className="space-y-1">
              <label
                htmlFor="marque"
                className="block text-sm font-medium text-gray-700"
              >
                Marque
              </label>
              <Select
                options={marqueOptions}
                id="marque"
                name="marque"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                isSearchable={true}
                styles={customStyles}
              />
            </div>

            {/* Modèle (Dropdown avec recherche) */}
            <div className="space-y-1">
              <label
                htmlFor="modele"
                className="block text-sm font-medium text-gray-700"
              >
                Modèle
              </label>
              <Select
                options={modeleOptions}
                id="modele"
                name="modele"
                className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                isSearchable={true}
                styles={customStyles}
              />
            </div>

            {/* L'année et Kilométrage */}
            <div className="space-x-4 flex">
              <div className="w-1/2">
                <label
                  htmlFor="annee"
                  className="block text-sm font-medium text-gray-700"
                >
                  L'année
                </label>
                <input
                  type="text"
                  id="annee"
                  name="annee"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="kilometrage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kilométrage
                </label>
                <input
                  type="text"
                  id="kilometrage"
                  name="kilometrage"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                />
              </div>
            </div>

            {/* Énergie et Boite */}
            <div className="space-x-4 flex">
              <div className="w-1/2">
                <label
                  htmlFor="energie"
                  className="block text-sm font-medium text-gray-700"
                >
                  Énergie
                </label>
                <Select
                  options={energieOptions}
                  id="energie"
                  name="energie"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="boite"
                  className="block text-sm font-medium text-gray-700"
                >
                  Boite
                </label>
                <Select
                  options={boiteOptions}
                  id="boite"
                  name="boite"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>
            </div>

            {/* Couleur et Wilaya */}
            <div className="space-x-4 flex">
              <div className="w-1/2">
                <label
                  htmlFor="couleur"
                  className="block text-sm font-medium text-gray-700"
                >
                  Couleur
                </label>
                <Select
                  options={couleurOptions}
                  id="couleur"
                  name="couleur"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="wilaya"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wilaya
                </label>
                <Select
                  options={wilayaOptions}
                  id="wilaya"
                  name="wilaya"
                  className="w-full p-2 border rounded focus:ring-indigo-600 text-sm text-gray-900"
                  isSearchable={true}
                  styles={customStyles}
                />
              </div>
            </div>
          </div>

          {/* Deux boutons (Retour et Suivant) */}
          <div className="flex justify-between mt-8 space-x-4">
            <Link
              to="/annonce2"
              className="bg-gray-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
            >
              Retour
            </Link>
            <Link
              to="/annonce2"
              className="bg-purple-500 text-white p-3 rounded hover-bg-purple-700 no-underline"
            >
              Suivant
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Annonce1;
