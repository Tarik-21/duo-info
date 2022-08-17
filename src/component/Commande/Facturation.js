import React, { useRef, useState } from "react";
import { useStateContext } from "../../Context/StateContext";

import { villes } from "../../utils/ville";

const Facturation = () => {
  const { user } = useStateContext();
  const emailRef = useRef();
  const nomRef = useRef();
  const prenomRef = useRef();
  const villeRef = useRef();
  const adresseRef = useRef();
  const telephoneRef = useRef();
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
            <label class="text-gray-700 dark:text-gray-200 font-bold" for="nom">
              Nom *
            </label>
            <input
              defaultValue={user.nom}
              ref={nomRef}
              required
              id="nom"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="prenom"
            >
              Prénom *
            </label>
            <input
              id="prenom"
              required
              defaultValue={user.prenom}
              ref={prenomRef}
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="adresse"
          >
            Numéro et nom de rue *
          </label>
          <input
            id="adresse"
            defaultValue={user.adresse}
            ref={adresseRef}
            required
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="w-full mt-3">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="ville">
            Ville *
          </label>
          <select
            required
            ref={villeRef}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            aria-label="Select"
            id="ville"
          >
            <option defaultValue="">Ville</option>
            {villes.map((ville) =>
              user.ville !== ville.ville ? (
                <option value={ville.ville}>{ville.ville}</option>
              ) : (
                <option value={ville.ville} selected>
                  {ville.ville}
                </option>
              )
            )}
          </select>
        </div>
        <div className="w-full mt-3">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="telephone"
          >
            Téléphone *
          </label>
          <input
            defaultValue={user.telephone}
            ref={telephoneRef}
            required
            id="telephone"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="w-full mt-3">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="email">
            Email *
          </label>
          <input
            ref={emailRef}
            defaultValue={user.email}
            required
            id="email"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
      </form>
    </div>
  );
};

export default Facturation;
