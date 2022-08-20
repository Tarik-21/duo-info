import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";

import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { useStateContext } from "../Context/StateContext";
import { villes } from "../utils/ville";
import { client } from "../client";

const Commande = () => {
  const navigate = useNavigate();
  const { user, cartItems, totalPrice, viderCart } = useStateContext();
  const emailRef = useRef();
  const nomRef = useRef();
  const prenomRef = useRef();
  const villeRef = useRef();
  const adresseRef = useRef();
  const telephoneRef = useRef();
  const form = useRef();

  const [loading, setloading] = useState(false);

  const formhandler = () => {
    setloading(true);
    let products = [];
    cartItems.map((product) => {
      products.push({
        product: {
          _ref: product._id,
          _type: "reference",
        },
        qte: product.quantity,
        sousTotal: product.quantity * product.price,
        _key: uniqid(),
        _type: "cart",
      });
      return products;
    });
    const doc = {
      _id: uniqid(),
      _type: "commandes",
      adresse: adresseRef.current.value,
      email: emailRef.current.value,
      nom: nomRef.current.value,
      prenom: prenomRef.current.value,
      orderBy: {
        _ref: user._id,
        _type: "reference",
      },
      products: products,
      statut: "En cours de traitement",
      telephone: telephoneRef.current.value,
      ville: villeRef.current.value,
      totalPrice: totalPrice + 45,
    };
    let productCommande = [];
    cartItems.map((product) => {
      productCommande.push({
        product: { ...product },
        qte: product.quantity,
        sousTotal: product.quantity * product.price,
        _key: uniqid(),
        _type: "cart",
      });
      return productCommande;
    });

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    client.createIfNotExists(doc).then(() => {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE2_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY_EMAILJS
        )
        .then(
          () => {
            viderCart();
            toast.success("Votre commande est en cours de traitement");
            navigate(`/mon-compte/orders/${doc._id}`, {
              state: {
                commande: {
                  ...doc,
                  products: productCommande,
                  _createdAt: today.toISOString(),
                },
              },
            });
          },
          () => {
            viderCart();
            navigate(`/mon-compte/orders/${doc._id}`, {
              state: {
                commande: {
                  ...doc,
                  products: productCommande,
                  _createdAt: today.toISOString(),
                },
              },
            });
          }
        );
    });
  };
  return (
    <>
      {user !== null && (
        <div className="w-4/5 mx-auto mb-5">
          <div className="flex flex-row justify-between items-start my-5">
            <div className="w-2/3 px-5">
              <p className="text-3xl w-full">Facturation & Expédition</p>
              <div className="flex flex-row mt-2">
                <span class="inline w-24 h-1 bg-orange-500"></span>
                <span class="inline-block w-full h-1 bg-slate-100"></span>
              </div>

              <form ref={form}>
                <div className="flex flex-row justify-between mt-3">
                  <div className="w-5/12">
                    <label
                      class="text-gray-700 dark:text-gray-200 font-bold"
                      for="nom"
                    >
                      Nom *
                    </label>
                    <input
                      defaultValue={user.nom}
                      ref={nomRef}
                      name="nom"
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
                      name="prenom"
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
                  <label
                    class="text-gray-700 dark:text-gray-200 font-bold"
                    for="email"
                  >
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
            <div className="w-1/3 bg-zinc-100 py-5 px-4 rounded-2xl">
              <p className="text-2xl w-full">Votre commande</p>
              <div className="flex flex-row mt-2">
                <span class="inline w-24 h-1 bg-orange-500"></span>
                <span class="inline-block w-full h-1 bg-slate-200"></span>
              </div>
              <div className="flex flex-col mt-4">
                <div className="flex flex-row justify-between font-bold">
                  <p>Produit</p>
                  <p>Sous-total</p>
                </div>
                <span class="inline-block w-full h-0.5 bg-zinc-200"></span>
                <div className="my-2">
                  {cartItems.map((product, index) => (
                    <div
                      className="flex flex-row justify-between text-sm my-1"
                      key={index}
                    >
                      <p className="mb-0">
                        {product.title}
                        <span className="font-bold"> x{product.quantity}</span>
                      </p>
                      <p>
                        {Intl.NumberFormat("de-DE").format(
                          product.price * product.quantity
                        )}{" "}
                        Dhs
                      </p>
                    </div>
                  ))}
                </div>

                <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
                <div className="flex flex-row justify-between text-sm my-2">
                  <p className="mb-0 font-bold">Sous-total</p>
                  <p>{Intl.NumberFormat("de-DE").format(totalPrice)} Dhs</p>
                </div>
                <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
                <div className="my-2">
                  <div className="font-bold">Expédition</div>
                  <div className="flex flex-row justify-between text-sm my-1">
                    <p className="mb-0 ml-1">Frais de service:</p>
                    <p>{Intl.NumberFormat("de-DE").format(45)} Dhs</p>
                  </div>
                </div>

                <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
                <div className="flex flex-row justify-between font-bold my-2">
                  <p className="mb-0 ml-1">Total</p>
                  <p>
                    {Intl.NumberFormat("de-DE").format(totalPrice + 45)} Dhs
                  </p>
                </div>
                <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
                <button
                  onClick={formhandler}
                  class="inline-block mt-6 mb-6 px-12 py-3 text-center text-base font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
                >
                  {loading === true ? (
                    <CircularProgress style={{ color: "white" }} />
                  ) : (
                    <p>Commander</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Commande;
