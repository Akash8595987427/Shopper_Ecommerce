import React from "react";
import Hero from "../Components/Hero/Hero";
import Item from "../Components/Items/Item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";



const Shop = (props) => {
  const modes = props.mode
  // console.log(props.mode);
  return (
    <>
    
      <Hero />
      <Item />
      <Popular mode = {modes}  />
      <Offers />
      <NewCollections mode = {modes} />
      <Newsletter />
    </>
  );
};

export default Shop;
