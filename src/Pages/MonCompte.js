import React  from "react";
import { useNavigate } from "react-router-dom";

import { AiFillDashboard } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";


import { useStateContext } from "../Context/StateContext";
const MonCompte = ({active}) => {
  const { deconnectUser } = useStateContext();
  const navigate = useNavigate();
  return (
    <ul className="list-none divide-y">
      <li
        className={`${
          active === "dashboard" ? "font-bold text-orange-500" : ""
        } px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`}
      onClick={()=>navigate('/mon-compte')}
      >
        Tableau de bord <AiFillDashboard />
      </li>
      <li
        className={`${
          active === "commandes" ? "font-bold text-orange-500" : ""
        } px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`}
        onClick={()=>navigate('/mon-compte/orders')}
      >
        Commandes <BsFillCartFill />
      </li>
      <li
        className={`${
          active === "infos" ? "font-bold text-orange-500" : ""
        } px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75`}
        onClick={()=>navigate('/mon-compte/edit-account')}

      >
        Détails du compte <FaUserAlt />
      </li>
      <li
        className="px-2 py-4 flex flex-row justify-between items-center hover:cursor-pointer hover:font-bold hover:text-orange-500 duration-75"
        onClick={deconnectUser}
      >
        Déconnexion <RiLogoutBoxRFill />
      </li>
    </ul>
  );
};

export default MonCompte;
