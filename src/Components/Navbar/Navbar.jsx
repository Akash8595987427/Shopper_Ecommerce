import React, {useContext, useState} from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
// import cart from "../Images/cart_icon.png"
import { Link } from 'react-router-dom'                  //changes done yesterday 
import { ShopContext } from '../../Context/ShopContext'
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import { IoCartSharp } from "react-icons/io5";




const Navbar = (props) => {

  const {getTotalCartItems} = useContext(ShopContext)
  const [mode, setMode] = useState("black");

  const toggleMode=(mode)=>{
    if(mode === "black"){
      document.body.style.backgroundColor = "black";
      return props.getMode("black");
      
    }
    else{
      document.body.style.backgroundColor = "white";
      return props.getMode("white");
    }
  }



  return (
    <>
    <div className="navbar" style={{ backgroundColor : mode==="black"?"white":"black"}}>
      <Link to="/">
          <div className="nav-logo">
              <img src= {logo} alt="navbar logo" /> 
              <p style={{color : (mode==="white")?"yellow":"black"}}>Ecomm</p>
          </div>
      </Link>

        <div className="nav-menu ">
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none"}}   to="/" > Shop  </Link> </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none"}}   to="/mens" > Men  </Link> </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none"}}  to="/womens" >  Women  </Link>  </li>
          <li> <Link  style={{ color : (mode==="white")?"yellow":"black", textDecoration: "none"}}  to="/kids" > Kids </Link>  </li> 
        </div>

        <div className="nav-login-cart ">
          <Link to="/signup">  <button style={{backgroundColor : (mode==="white")?"yellow":"white"}}>LOG IN</button>  </Link>          {/*  //changes done yesterday */}
          <Link to="/cart"> <IoCartSharp style={{color : (mode==="white")?"yellow":"black", fontSize : "1.5rem"}} />  </Link>
          <div className="nav-cart-count" > {getTotalCartItems()} </div>

          <DarkModeIcon onClick={()=>{
            if(mode === "black"){
              setMode("white");
              toggleMode(mode);
            }
            else if(mode === "white"){
              setMode("black");
              toggleMode(mode)
            }
          }} style={{color : (mode==="white")?"yellow":"black"}}></DarkModeIcon>

         

          
        </div>
    </div>
    
    </>
  )
}

export default Navbar
