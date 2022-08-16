import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const TopHeader = () => {
  return (
    <div className="bg-black flex flex-row py-2 px-10 justify-between items-center">
      <div className="flex flex-row">
        <div className="mr-10">
          <BsFillTelephoneFill
            size={20}
            color="white"
            className="inline-block mr-2"
          />
          <p className="text-white inline-block">(+212) 0535 94 41 23</p>
        </div>
        <div className="">
          <MdEmail size={20} color="white" className="inline-block mr-2" />
          <p className="text-white inline-block">contact@duoinfomaroc.com</p>
        </div>
      </div>
      <nav>
        <ul className="list-none	">
          <Link to="/">
            <li className="text-white inline-block mr-3">Accueil</li>
          </Link>
          <Link to="qui-sommes-nous">
            <li className="text-white inline-block mr-5">Qui sommes nous ?</li>
          </Link>
          <Link to="contact">
            <li className="text-white inline-block mr-5">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
