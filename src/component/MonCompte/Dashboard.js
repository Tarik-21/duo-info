import React from "react";
import { useStateContext } from "../../Context/StateContext";

const Dashboard = () => {
  const { user } = useStateContext();
  return (
    <div className="px-6 py-4 leading-10">
      Bonjour <span className="font-bold">{user.prenom}</span> 
      <br />
      Nous sommes heureux de vous compter parmi nos clients.!
      <br/>
      Nous vous souhaitons un bon shopping sur notre site!
      <br/>
      L'équipe Duo Info
    </div>
  );
};

export default Dashboard;
