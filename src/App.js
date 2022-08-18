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
import Dashboard from "./component/MonCompte/Dashboard";
import Commandes from "./component/MonCompte/Commandes";
import InfosPersonel from "./component/MonCompte/InfosPersonel";
import ViewOrder from "./component/MonCompte/ViewOrder";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compte" element={<Compte />} />
        <Route path="/mon-compte" element={<Dashboard />} />
        <Route path="/mon-compte/orders" element={<Commandes />} />
        <Route path="/mon-compte/orders/:num" element={<ViewOrder />} />
        <Route path="/mon-compte/edit-account" element={<InfosPersonel />} />
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
