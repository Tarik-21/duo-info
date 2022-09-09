import React from "react";
import Logo from "../assets/images/logo.png";

const QuiSommeNous = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center my-5">
      <div className="flex flex-row justify-center w-1/3">
        <img src={Logo} alt="logo" />
      </div>
      <p className="text-orange-500 text-3xl mb-2">
        Duo Info : Une Expérience qui inspire et engage !
      </p>
      <span className="w-1/3 h-0.5 bg-orange-500"></span>
      <div className="text-slate-600 text-sm mt-5 mb-5">
        <video width="750" height="500" controls>
          <source src="./videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default QuiSommeNous;
