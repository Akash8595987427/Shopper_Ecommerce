import React from "react";
import Hero from "../Components/Hero/Hero";
import Item from "../Components/Items/Item";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";



const Shop = (props) => {
  return (
    <>
      {console.log("Hello I am the Shop.jsx mode = ", props.mode)}
      <Hero mode={props.mode} />
      <Item mode={props.mode} />
      <Popular mode = {props.mode}  />
      <Offers mode={props.mode} />
      <NewCollections mode = {props.mode} />
      <Newsletter mode={props.mode}/>
    </>
  );
};

export default Shop;
