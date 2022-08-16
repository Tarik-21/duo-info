import React from "react";
import { AiFillEye } from "react-icons/ai";

const Commandes = () => {
  return (
    <div className="px-6 py-4">
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
          <tr>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              n°84157
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              14 août 2022
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              En cours de traitement
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
              86Dhs pour 1 article
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 flex flex-row justify-center bg-slate-200 hover:cursor-pointer ">
              Voir <AiFillEye className="ml-2 text-xl"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Commandes;
