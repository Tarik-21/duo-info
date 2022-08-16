import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Commandes from "../component/MonCompte/Commandes";
import Dashboard from "../component/MonCompte/Dashboard";
import InfosPersonel from "../component/MonCompte/InfosPersonel";

import { useStateContext } from "../Context/StateContext";
const MonCompte = () => {
  const [active, setActive] = useState("dashboard");
  const { deconnectUser } = useStateContext();
  return (
    <div class="flex flex-row w-4/5 mx-auto my-4">
      <div className="w-1/4">
        <ul className="list-none divide-y">
          <li className={`${active==="dashboard" ? 'font-bold text-orange-500' : ''} px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`} onClick={()=>(setActive('dashboard'))}>
            Tableau de bord <AiFillDashboard />
          </li>
          <li className={`${active==="commandes" ? 'font-bold text-orange-500' : ''} px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`} onClick={()=>(setActive('commandes'))}>
            Commandes <BsFillCartFill />
          </li>
          <li className={`${active==="infos" ? 'font-bold text-orange-500' : ''} px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`} onClick={()=>(setActive('infos'))}>
            Détails du compte <FaUserAlt />
          </li>
          <li className="px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75" onClick={deconnectUser} >
            Déconnexion <RiLogoutBoxRFill />
          </li>
        </ul>
      </div>
      <div className="w-3/4">
        {active==='dashboard' && <Dashboard />}
        {active === 'commandes' && <Commandes />}
        {active ==='infos' && <InfosPersonel />}

      </div>
    </div>
  );
};

export default MonCompte;
