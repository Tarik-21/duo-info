import React, { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const SerachInput = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const SearchHandler = (event) => {
    event.preventDefault();
    navigate({
      pathname: "produits/all",
      search: createSearchParams({
        search: searchRef.current.value,
      }).toString(),
    });
    searchRef.current.value =""
  };
  return (
    <form className="w-1/2 pl-3 search-input" onSubmit={SearchHandler}>
      <input
        type="text"
        ref={searchRef}
        required
        className="outline-none focus:outline-none px-3 py-2"
        placeholder="Rechercher des produits"
      />
      <button type="submit">
        <BiSearchAlt color="#F2881B" size={24} />
      </button>
    </form>
  );
};

export default SerachInput;
