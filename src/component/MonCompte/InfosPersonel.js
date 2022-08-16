import React from "react";
import { villes } from "../../utils/ville";

const InfosPersonel = () => {
  return (
    <form className="px-12 py-2">
      <div className="flex flex-row justify-between">
        <div className="w-2/5">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="prenom"
          >
            Prénom *
          </label>
          <input
            required
            id="prenom"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="w-2/5">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="nom">
            Nom *
          </label>
          <input
            required
            id="nom"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
      </div>
      <div className="mt-6">
        <label class="text-gray-700 dark:text-gray-200 font-bold" for="adresse">
          Adresse *
        </label>
        <input
          required
          id="adresse"
          type="text"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-2/5 mt-6">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="ville">
            Ville *
          </label>
          <select
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            aria-label="Select"
            id="ville"
          >
            <option defaultValue="">Ville</option>
            {villes.map((ville) => (
              <option value={ville.ville}>{ville.ville}</option>
            ))}
          </select>
        </div>
        <div className="w-2/5 mt-6">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="sexe">
            Sexe *
          </label>
          <select
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            aria-label="Select"
            id="sexe"
          >
            <option defaultValue="">Choisir sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div>
      </div>
      <div className="mt-6 w-2/5">
        <label
          class="text-gray-700 dark:text-gray-200 font-bold"
          for="telephone"
        >
          Téléphone *
        </label>
        <input
          required
          id="telephone"
          type="text"
          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
        />
      </div>
      

      <button
        type="submit"
        class="inline-block mt-6 mb-6 px-12 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
      >
        enregistrer les modifications
      </button>
    </form>
  );
};

export default InfosPersonel;
