import React from "react";
import { useStateContext } from "../../Context/StateContext";
import MonCompte from "../../Pages/MonCompte";

const Dashboard = () => {
  const { user } = useStateContext();

  return (
    <>
      {user !== null && (
        <div className="flex flex-row w-4/5 mx-auto my-4">
          <div className="w-1/4">
            <MonCompte active="dashboard"/>
          </div>
          <div className="w-3/4">
            <div className="px-6 py-4 leading-10">
              Bonjour <span className="font-bold">{user.prenom}</span>
              <br />
              Nous sommes heureux de vous compter parmi nos clients.!
              <br />
              Nous vous souhaitons un bon shopping sur notre site!
              <br />
              L'équipe Duo Info
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
