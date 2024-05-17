import React, { useEffect, useState } from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";

const Item = (props) => { 

    const [dark, setDark] = useState(false);


    useEffect(()=>{
      if(props.mode){
        if(props.mode === "black"){
          setDark("black");
        }
        else if(props.mode === "white"){
          setDark("white");
        }
      }
    }, [props.mode])


  return (
      <div className="item">
            {console.log('The mode at item.jsx is ',dark)}
        <div className="item-img">
        
        { (props.id)?<NavLink to={`/product/${props.id}`}> <img src={props.image} alt="" onClick={()=>{ window.scrollTo(0, 0)}} /> </NavLink>:""}
        
         {/* {console.log(props.id)} */}
         {console.log("Hello I am the Item.jsx new mode value " ,dark)}
       
        </div>
        {console.log('The mode at item.jsx is ',dark)}
        <div className="item-heading">
        {(props.id)?<NavLink to={`/product/${props.id}`}>  <p id="title" style={{color : (dark)?"white":"black"}}>{props.name}</p>  </NavLink>:""}
        </div>
        
        {console.log(dark)}

        <div className="item-prices">
        {  (props.id)?<div className="item-price-new"> ${props.new_price}</div>:""}

          {(props.id)?<div className="item-price-old"> ${props.old_price}</div>:""}
        </div>
        
      </div>

  );
};

export default Item;
