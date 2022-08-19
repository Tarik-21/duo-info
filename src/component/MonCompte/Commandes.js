import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Context/StateContext";
import { client } from "../../client";
import { AiFillEye } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import MonCompte from "../../Pages/MonCompte";

const Commandes = () => {
  const { user } = useStateContext();
  const [commandes, setCommandes] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const queryCommandes = `*[_type=="commandes" && orderBy._ref == "${user._id}"]{adresse,email,nom,orderBy,prenom,products[]{product->,qte,sousTotal},statut,telephone,totalPrice,ville,_createdAt,_id} | order(_createdAt desc)`;
    client.fetch(queryCommandes).then((data) => {
      setCommandes(data);
      setloading(false);
    });
  }, [user._id]);
  return (
    <div className="flex flex-row w-4/5 mx-auto my-4">
      <div className="w-1/4">
        <MonCompte active="commandes" />
      </div>
      <div className="w-3/4">
        <div className="px-6 py-4">
          {loading && (
            <div className="flex flex-row justify-center">
              <CircularProgress style={{ color: "orange" }} />
            </div>
          )}
          {loading === false && (
            <table className="table-fixed my-4 xt-my-auto w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    Commande
                  </th>
                  <th className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    Date
                  </th>
                  <th className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    État
                  </th>
                  <th className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    Total
                  </th>
                  <th className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {commandes.map((commande, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {commande._id}
                    </td>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {commande._createdAt.split("T")[0]}
                    </td>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {commande.statut}
                    </td>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {Intl.NumberFormat("de-DE").format(commande.totalPrice)}{" "}
                      Dhs
                    </td>
                    <Link
                      to={`/mon-compte/orders/${commande._id}`}
                      state={{ commande: commande }}
                    >
                      <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 flex flex-row justify-center bg-slate-200 hover:cursor-pointer">
                        Voir <AiFillEye className="ml-2 text-xl" />
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commandes;
