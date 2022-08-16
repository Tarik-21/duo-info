import React, { useEffect } from "react";
import Login from "../component/Compte/Login";
import Signup from "../component/Compte/Signup";

const Compte = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="flex flex-row w-4/5 mx-auto  divide-x">
        <Login />
        <Signup />
      </div>
    </>
  );
};

export default Compte;
