import React from "react";

const Contact = () => {
  return (
    <div className="w-4/5 mx-auto">
      <span class="inline-block w-16 h-1 bg-orange-500"></span>
      <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
        Laissez un message
      </h2>
      <form className="w-full">
        <div className="flex flex-row justify-between">
          <div className="w-5/12 mt-6">
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
          <div className="mt-6 w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="password"
            >
              Prénom *
            </label>
            <input
              id="password"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-5/12 mt-6">
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
          <div className="mt-6 w-5/12">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="password"
            >
              E-mai *
            </label>
            <input
              id="password"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>
          
        </div>
        <div className="mt-6 w-full">
            <label
              class="text-gray-700 dark:text-gray-200 font-bold"
              for="password"
            >
              Message* (Maximum 300 caractères) *
            </label>
            <textarea 
            rows={12}
              id="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-orange-500 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-orange-600 focus:border-blue-400 focus:ring-orange-600 focus:ring-opacity-40 focus:border-orange-600 focus:outline-none focus:ring"
            />
          </div>

        <a
          class="inline-block mt-6 mb-6 px-12 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
          href="/download"
        >
          Envoyer
        </a>
      </form>
    </div>
  );
};

export default Contact;
