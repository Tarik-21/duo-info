import React, { useState } from "react";
import { Slider } from "@mui/material";


const Filter = () => {
  const minDistance = 10;

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const [value1, setValue1] = useState([20, 37]);
  return (
    <div className="w-1/5 mt-6 mr-10">
      <p className="text-xl w-full">Filter par prix</p>
      <div className="flex flex-row mt-2">
        <span class="inline w-16 h-1 bg-orange-500"></span>
        <span class="inline-block w-full h-1 bg-slate-50"></span>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        onChange={handleChange1}
        value={value1}
        valueLabelDisplay="auto"
        sx={{
          marginTop : '10px',
          color: 'warning.main',
        }}
        disableSwap
      />      
      <span className="text-slate-500">Prix : 1.590DHS — 6.500Dhs</span>
      <a
          class="inline-block mt-3 mb-6 px-8 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
          href="/download"
        >
          Filtrer
        </a>
    </div>
  );
};

export default Filter;
