import { Routes, Route } from "react-router-dom";

import "xtendui";
import "xtendui/src/toggle";

import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./Pages/Home";
import Compte from "./Pages/Compte";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import CartPage from "./Pages/CartPage";
import Commande from "./Pages/Commande";
import QuiSommeNous from "./Pages/QuiSommeNous";
import MonCompte from "./Pages/MonCompte";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/produit/:slug" element={<ProductDetailsPage />} />
        <Route path="/produits/:slug" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="commande" element={<Commande />} />
        <Route path="qui-sommes-nous" element={<QuiSommeNous />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
