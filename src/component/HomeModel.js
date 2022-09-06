import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

const HomeModel = ({ closeModel }) => {
  const emailRef = useRef();
  const form = useRef();
  const [loading, setloading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID_INSCRIPTION,
        process.env.REACT_APP_TEMPLATE_ID_INSCRIPTION,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY_EMAILJS_INSCRIPTION
      )
      .then(
        () => {
          toast.success("Envoyé");
          setloading(false);
          closeModel();
        },
        () => {
          toast.error("Error");
          setloading(false);
          closeModel();
        }
      );
  };

  return (
    <div className="fixed top-20 left-1/3 w-1/3 z-50 overflow-hidden bg-white px-4 pb-5 rounded-2xl">
      <header>
        <img src="./images/logoHikVision.png" alt="logo" />
      </header>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <p className="font-bold text-xl">
            Avant de partir, inscrivez-vous pour ne rien rater de nos bons plans
            et conseils.
            <br />
            Vous etes :
          </p>
          <select
            name="statut"
            className="px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          >
            <option value="Installateur">Installateur</option>
            <option value="Client final">Client final</option>
          </select>
        </div>
        <footer className="mt-2">
          <div className="flex flex-row">
            <input
              required
              ref={emailRef}
              id="email"
              name="email"
              type="eamil"
              placeholder="Votre adressee e-mail"
              class="w-4/5 px-4 py-2 text-gray-700 bg-white border border-orange-500 rounded-l-xl dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
            {loading === true ? (
              <CircularProgress style={{ color: "orange" }} />
            ) : (
              <button
                type="submit"
                className="W-1/5 px-8 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-r-xl active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
              >
                S'incrire
              </button>
            )}
          </div>
        </footer>
      </form>
    </div>
  );
};

export default HomeModel;
