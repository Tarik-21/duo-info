import React from "react";

const Facturation = () => {
  return (
    <div className="w-2/3 px-5">
      <p className="text-3xl w-full">Facturation & Expédition</p>
      <div className="flex flex-row mt-2">
        <span class="inline w-24 h-1 bg-orange-500"></span>
        <span class="inline-block w-full h-1 bg-slate-100"></span>
      </div>
      <form>
        <div className="flex flex-row justify-between mt-3">
          <div className="w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="username"
            >
              Nom *
            </label>
            <input
              id="username"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="username"
            >
              Prénom *
            </label>
            <input
              id="username"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="username"
          >
            Numéro et nom de rue *
          </label>
          <input
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="w-full mt-3">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="password"
            >
              Ville *
            </label>
            <select
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
              aria-label="Select">
              <option defaultValue="">Ville</option>
              <option>Test</option>
              <option>Test</option>
              <option>Test</option>
            </select>
          </div>
          <div className="w-full mt-3">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="username"
          >
            Téléphone *
          </label>
          <input
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="w-full mt-3">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="username"
          >
            Email *
          </label>
          <input
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
      </form>
    </div>
  );
};

export default Facturation;
