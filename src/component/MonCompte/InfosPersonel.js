import React, { useRef, useState } from "react";
import { useStateContext } from "../../Context/StateContext";
import { client } from "../../client";

import { villes } from "../../utils/ville";

const InfosPersonel = () => {
  const { user, setUser } = useStateContext();
  const [valid, setValid] = useState(null);
  const nomRef = useRef();
  const prenomRef = useRef();
  const villeRef = useRef();
  const adresseRef = useRef();
  const sexeRef = useRef();
  const telephoneRef = useRef();

  const formSubmissionHnadler = (event) => {
    event.preventDefault();

    const doc = {
      _id: user._id,
      _type: "users",
      email: user.email,
      password: user.password,
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      sexe: sexeRef.current.value,
      ville: villeRef.current.value,
      adresse: adresseRef.current.value,
      telephone: telephoneRef.current.value,
    };
    client.createOrReplace(doc).then(() => {
      setUser(doc);
      setValid(true)
    });
  };
  return (
    <>
      {valid !== null && (
        <div className="text-white px-6 py-3 bg-green-600 ml-6">Les détails du compte ont bien été modifiés.</div>
      )}
      <form className="px-12 py-2" onSubmit={formSubmissionHnadler}>
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
              defaultValue={user.prenom}
              ref={prenomRef}
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
              defaultValue={user.nom}
              ref={nomRef}
              id="nom"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="adresse"
          >
            Adresse *
          </label>
          <input
            required
            defaultValue={user.adresse}
            ref={adresseRef}
            id="adresse"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-2/5 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="ville"
            >
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
          <div className="w-2/5 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="sexe"
            >
              Sexe *
            </label>
            <select
              required
              ref={sexeRef}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
              aria-label="Select"
              id="sexe"
            >
              <option defaultValue="">Choisir sexe</option>
              {user.sexe === "Homme" ? (
                <option value="Homme" selected>
                  Homme
                </option>
              ) : (
                <option value="Homme">Homme</option>
              )}
              {user.sexe === "Femme" ? (
                <option value="Femme" selected>
                  Femme
                </option>
              ) : (
                <option value="Femme">Femme</option>
              )}
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
            defaultValue={user.telephone}
            ref={telephoneRef}
            id="telephone"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          class="inline-block mt-6 mb-6 px-12 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
        >
          Enregistrer les modifications
        </button>
      </form>
    </>
  );
};

export default InfosPersonel;
