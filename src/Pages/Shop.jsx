import React from "react";
import Hero from "../Components/Hero/Hero";
import Item from "../Components/Items/Item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";



const Shop = () => {
  return (
    <>
      <Hero />
      <Item />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </>
  );
};

export default Shop;
