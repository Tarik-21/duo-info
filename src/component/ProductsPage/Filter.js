import React from "react";
import { Slider } from "@mui/material";

const Filter = ({ valueFilter, setValueFilter, min, max, FilterHandler }) => {
  const minDistance = 20;

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValueFilter([
        Math.min(newValue[0], valueFilter[1] - minDistance),
        valueFilter[1],
      ]);
    } else {
      setValueFilter([
        valueFilter[0],
        Math.max(newValue[1], valueFilter[0] + minDistance),
      ]);
    }
  };
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
        value={valueFilter}
        valueLabelDisplay="auto"
        max={max}
        min={min}
        sx={{
          marginTop: "10px",
          color: "warning.main",
        }}
        disableSwap
      />
      <span className="text-slate-500">
        Prix : {valueFilter[0]}DHS — {valueFilter[1]}Dhs
      </span>
      <button
        onClick={() => {
          FilterHandler(valueFilter);
        }}
        class="inline-block mt-3 mb-6 px-8 py-2 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
      >
        Filtrer
      </button>
    </div>
  );
};

export default Filter;
