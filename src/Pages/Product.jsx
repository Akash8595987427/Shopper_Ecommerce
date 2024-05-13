import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplays/ProductDisplay";


const Product = (props) => {
  const [size, setSize] = useState();
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  const getSizeFunction=(size)=>{
    setSize(size);
    console.log(size);
  }
  return (
    <div>
       <Breadcrum product = {product} mode = {props.mode} />
       <ProductDisplay product={product} mode = {props.mode} getSize={getSizeFunction}/>                
    </div>
  );
};

export default Product;
