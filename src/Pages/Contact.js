import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";


const Contact = () => {
  const nomRef = useRef();
  const prenomRef = useRef();
  const telephoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY_EMAILJS
      )
      .then(
        () => {
          toast.success("Envoyé");
        },
        () => {
          toast.error("Error");
        }
      );
  };

  return (
    <div className="w-4/5 mx-auto">
      <span class="inline-block w-16 h-1 bg-orange-500"></span>
      <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
        Laissez un message
      </h2>
      <form className="w-full" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-row justify-between">
          <div className="w-5/12 mt-6">
            <label class="text-gray-700 dark:text-gray-200 font-bold" for="nom">
              Nom *
            </label>
            <input
              id="nom"
              ref={nomRef}
              required
              name="nom"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-6 w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="prenom"
            >
              Prénom *
            </label>
            <input
              id="prenom"
              ref={prenomRef}
              required
              type="text"
              name="prenom"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-5/12 mt-6">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="telephone"
            >
              Téléphone *
            </label>
            <input
              id="telephone"
              ref={telephoneRef}
              required
              type="text"
              name="telephone"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          <div className="mt-6 w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="email"
            >
              E-mail *
            </label>
            <input
              id="email"
              ref={emailRef}
              required
              type="email"
              name="email"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          <label
            class="text-gray-700 dark:text-gray-200 font-bold"
            for="message"
          >
            Message* (Maximum 300 caractères) *
          </label>
          <textarea
            rows={12}
            id="message"
            ref={messageRef}
            name="message"
            required
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
          />
        </div>

        <button
          type="submit"
          class="inline-block mt-6 mb-6 px-12 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
