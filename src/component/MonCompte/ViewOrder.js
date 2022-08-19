import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MonCompte from "../../Pages/MonCompte";

const ViewOrder = () => {
  const [commande, setCommande] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setCommande(location.state.commande);
  }, [location.state.commande]);

  return (
    <>
      {commande !== null && (
        <div className="flex flex-row w-4/5 mx-auto my-4">
          <div className="w-1/4">
            <MonCompte active="commandes" />
          </div>
          <div className="w-3/4 px-6 py-4">
            <div>
              La commande <span className="font-bold">n°{commande._id}</span> a
              été passée le{" "}
              <span className="font-bold">
                {commande._createdAt.split("T")[0]}
              </span>{" "}
              est actuellement{" "}
              <span className="font-bold">{commande.statut}</span>.
            </div>
            <p className="text-2xl font-bold mt-3 text-orange-500">
              Adresse de facturation
            </p>
            <div className="text-sm font-bold ml-4 mt-3">
              {commande.nom} {commande.prenom} <br />
              {commande.adresse} <br />
              {commande.ville} <br />
              {commande.telephone} <br />
              {commande.email}
            </div>
            <p className="text-2xl font-bold mt-3 text-orange-500">
              Détails de la commande
            </p>
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
                {commande.products.map((product, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {product.product.title}
                      <span className="font-bold"> x {product.qte}</span>
                    </td>
                    <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                      {Intl.NumberFormat("de-DE").format(product.sousTotal)} Dhs
                    </td>
                  </tr>
                ))}

                
                <tr>
                  <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                    Sous total :
                  </td>
                  <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                    {Intl.NumberFormat("de-DE").format(commande.totalPrice -45)} Dhs
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
                    {Intl.NumberFormat("de-DE").format(commande.totalPrice)} Dhs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewOrder;
