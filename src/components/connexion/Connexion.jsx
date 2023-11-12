import React from "react";
import logo from "../../assets/logo.png";
import connexion from "../../assets/connexion.png";

export default function Example() {
  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      <div className="w-full sm:w-1/2 bg-cover">
        {/* Image on the left side */}
        <img
          src={connexion} // Replace with the path to your image
          alt="Left Side Image"
          className="h-85 w-90 ml-5 mt-2 mb-5"
        />
      </div>

      <div className="w-full sm:w-1/2 px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Your Logo */}
          <img
            className="mx-auto h-20 w-20" // Adjust the height and width here
            src={logo} // Replace with the path to your logo
            alt="Your Company"
          />
          <div className="absolute top-0 left-0 p-4 text-white text-5xl font-bold">
            Innovez l'achat <br />
            et la vente <br /> auto
          </div>
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous à votre compte
          </h2>
          <h2 className="mt-1 text-center text-sm text-gray-600 leading-4">
            Entrez vos informations pour continuer
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mots de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Vous n'avez pas de compte?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Inscrivez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
