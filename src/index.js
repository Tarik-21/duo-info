import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StateContext } from "./Context/StateContext";
import {Toaster} from 'react-hot-toast'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <Toaster />
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
