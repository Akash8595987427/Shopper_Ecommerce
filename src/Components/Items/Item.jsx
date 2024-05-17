import React, { useEffect, useState } from "react";
import "./Item.css";
import { Link } from 'react-router-dom'

const Item = (props) => { 


  return (
      <div className="item">
      
        <div className="item-img">
        
        { (props.id)?<Link to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={()=>{ window.scrollTo(0, 0)}} /> </Link>:""}
        
         {/* {console.log(props.id)} */}
         {/* {console.log(mode)} */}
        </div>
        <div className="item-heading">
        <Link to={`/product/${props.id}`}>  <p id="title">{props.name}</p>  </Link>
        </div>
        

        <div className="item-prices">
        {  (props.id)?<div className="item-price-new"> ${props.new_price}</div>:""}

          {(props.id)?<div className="item-price-old"> ${props.old_price}</div>:""}
        </div>
        
      </div>

  );
};

export default Item;
