import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../Context/StateContext";
import { client } from "../../client";

const Login = () => {
  const {connectUser} = useStateContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const formSubmissionHnadler = (event) => {
    event.preventDefault();
    const getUserQuery = `*[_type=="users" && email=="${emailRef.current.value}"]`;
    client.fetch(getUserQuery).then((data) => {
      if (Object.entries(data).length === 0) {
        setError(
          "Identifiant inconnu. Vérifiez l'orthographe ou essayez avec votre adresse e-mail."
        );
        return;
      } else {
        if (data[0].password !== passwordRef.current.value) {
          setError(
            `le mot de passe que vous avez saisi pour l’adresse e-mail ${emailRef.current.value} est incorrect.`
          );
          return;
        } else {
          const user = {
            _id: data[0]._id,
            _type: "users",
            email: data[0].email,
            password: data[0].password,
            nom: data[0].nom,
            prenom: data[0].prenom,
            sexe: data[0].sexe,
            ville: data[0].ville,
            adresse: data[0].adresse,
            telephone: data[0].telephone,
          };
          connectUser(user);
          navigate("/mon-compte");
        }
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    setError(null);
  };

  return (
    <div className="w-1/2 pl-10">
      <span class="inline-block w-16 h-1 bg-orange-500"></span>

      <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
        S'authentifier
      </h2>
      {error !== null && (
        <div className="bg-red-600 px-4 py-3 mt-2 text-white rounded-lg">
          <span className="font-bold">Error :</span> {error}
        </div>
      )}
      <form className="w-4/5" onSubmit={formSubmissionHnadler}>
        <div className="mt-6">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="emailL"
          >
            E-mail *
          </label>
          <input
            id="emailL"
            ref={emailRef}
            required
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-6">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="passwordL"
          >
            Mot de pass *
          </label>
          <input
            id="passwordL"
            ref={passwordRef}
            required
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          class="inline-block mt-6 mb-6 px-12 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
        >
          Identification
        </button>
      </form>
    </div>
  );
};

export default Login;
