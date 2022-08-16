import React from "react";
import CommandeCard from "../component/Commande/CommandeCard";
import Facturation from "../component/Commande/Facturation";

const Commande = () => {
  return (
    <div className="w-4/5 mx-auto mb-5">
      <div className="flex flex-row justify-between items-start my-5">
        <Facturation />
        <CommandeCard />
      </div>
    </div>
  );
};

export default Commande;
