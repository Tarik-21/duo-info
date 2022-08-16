import React, { useRef, useState } from "react";
import { validate } from "react-email-validator";
import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../Context/StateContext";

import { villes } from "../../utils/ville";
import { client } from "../../client";

const Signup = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {connectUser} = useStateContext();

  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const villeRef = useRef();
  const adresseRef = useRef();
  const sexeRef = useRef();
  const telephoneRef = useRef();

  const formSubmissionHnadler = (event) => {
    event.preventDefault();
    if (!validate(emailRef.current.value)) {
      setError("Veuillez saisir une adresse de messagerie valide.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (passwordRef.current.value.trim().length < 10) {
      setError("le mot de passe devrait contenir au moins 10 caractères .");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Les mots de passe ne correspondent pas.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (villeRef.current.value.trim() === "Ville") {
      setError("Le champ ville est obligatoire!.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (sexeRef.current.value.trim() === "Choisir sexe") {
      setError("Le champ sexe est obligatoire!.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const getUserQuery = `*[_type=="users" && email=="${emailRef.current.value}"]{email} `;
    client.fetch(getUserQuery).then((data) => {
      if (Object.entries(data).length !== 0) {
        setError(
          "Un compte est déjà enregistré avec votre adresse e-mail. Veuillez vous connecter."
        );
        return;
      } else {
        const doc = {
          _id: uniqid(),
          _type: "users",
          email: emailRef.current.value,
          password: passwordRef.current.value,
          nom: nomRef.current.value,
          prenom: prenomRef.current.value,
          sexe: sexeRef.current.value,
          ville: villeRef.current.value,
          adresse: adresseRef.current.value,
          telephone: telephoneRef.current.value,
        };
        client.createIfNotExists(doc).then(() => {
          connectUser(doc)
          navigate("/mon-compte");
        });
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setError(null);
  };

  return (
    <div className="w-1/2 pl-10">
      <span class="inline-block w-16 h-1 bg-orange-500"></span>

      <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
        S’enregistrer
      </h2>
      {error !== null && (
        <div className="bg-red-600 px-4 py-3 mt-2 text-white rounded-lg">
          <span className="font-bold">Error :</span> {error}
        </div>
      )}
      <form className="w-4/5 " onSubmit={formSubmissionHnadler}>
        <div className="mt-6">
          <label class="text-gray-700 dark:text-gray-200 font-bold" for="email">
            E-mail *
          </label>
          <input
            ref={emailRef}
            required
            id="email"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-52 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="passwordS"
            >
              Mot de pass *
            </label>
            <input
              ref={passwordRef}
              required
              id="passwordS"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-52 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="passwordCS"
            >
              Confirmer mot de pass *
            </label>
            <input
              ref={confirmPasswordRef}
              required
              id="passwordCS"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-52 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="prenom"
            >
              Prénom *
            </label>
            <input
              ref={prenomRef}
              required
              id="prenom"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="w-52 mt-6">
            <label class="text-gray-700 dark:text-gray-200 font-bold" for="nom">
              Nom *
            </label>
            <input
              ref={nomRef}
              required
              id="nom"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-52 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="ville"
            >
              Ville *
            </label>
            <select
              ref={villeRef}
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
          <div className="w-52 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="sexe"
            >
              Sexe *
            </label>
            <select
              ref={sexeRef}
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
        <div className="mt-6">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="adresse"
          >
            Adresse *
          </label>
          <input
            ref={adresseRef}
            required
            id="adresse"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-6">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="telephone"
          >
            Téléphone *
          </label>
          <input
            ref={telephoneRef}
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
          S’enregistrer
        </button>
      </form>
    </div>
  );
};

export default Signup;
