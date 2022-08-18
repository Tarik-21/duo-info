import React from "react";
import MonCompte from "../../Pages/MonCompte";

const ViewOrder = () => {
  return (
    <div className="flex flex-row w-4/5 mx-auto my-4">
      <div className="w-1/4">
        <MonCompte active="commandes" />
      </div>
      <div className="w-3/4 px-6 py-4">
        <div>
          La commande <span className="font-bold">n°84157</span> a été passée le{" "}
          <span className="font-bold">14 août 2022</span> est actuellement{" "}
          <span className="font-bold">Annulée</span>.
        </div>
        <p className="text-2xl font-bold mt-3 text-orange-500">Adresse de facturation</p>
        <div className="text-sm font-bold ml-4 mt-3">
          Mouhouch Tarik <br />
          116 Hay qods bensouda Fès <br />
          Fès <br />
          0612110821 <br />
          mas.fes123@gmail.com
        </div>
        <p className="text-2xl font-bold mt-3 text-orange-500">Détails de la commande</p>
        <table className="table-fixed my-4 xt-my-auto w-full">
          <tbody>
            <tr className="font-bold">
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                Produit
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                Total
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                Seven Deadly Sins Tome 3 <span className="font-bold">x 1</span>
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                41 Dhs
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                Seven Deadly 3 <span className="font-bold">x 2</span>
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                80 Dhs
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                Sous total :
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                200 Dhs
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                Expédition :
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                45 Dhs <span className="text-xs">via Frais de service</span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                Moyen de paiement :
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                Paiement à la livraison
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                Total :
              </td>
              <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                250 Dhs
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrder;
