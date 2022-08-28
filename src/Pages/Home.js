import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useStateContext } from "../Context/StateContext";
import FirstSlide from "../component/Home/FirstSlide";
import Marque from "../component/Home/Marque";
import ProductList from "../component/ProductList";
import Logo from "../assets/images/logo.png";

import { client } from "../client";

const Home = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [bannerData, setBannerData] = useState([]);
  const [openModal, setOpenModal] = useState(true);

  const handleClose = () => setOpenModal(false);

  const { products } = useStateContext();
  useEffect(() => {
    const querybanner = '*[_type == "banner"]';
    client.fetch(querybanner).then((data) => {
      setBannerData(data);
    });
  }, []);

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <imag
            src={Logo}
            id="modal-modal-description"
            alt="image"
          />
        </Box>
      </Modal>
      <div className="banner flex flex-row mx-auto w-4/5 mt-5 px-10 py-4 rounded-2xl">
        <FirstSlide width="w-full" bannerData={bannerData} />
      </div>
      <div className="w-4/5 mx-auto">
        <Marque />
        <ProductList
          title="Iphone"
          category="Iphone"
          products={products}
          slidesToShow={3}
        />
        <ProductList
          title="Ipad"
          category="Ipad"
          products={products}
          slidesToShow={3}
        />
        <ProductList
          title="Mac"
          category="Mac"
          products={products}
          slidesToShow={3}
        />
      </div>
    </>
  );
};

export default Home;
