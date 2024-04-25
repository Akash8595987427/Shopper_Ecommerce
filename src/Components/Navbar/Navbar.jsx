import React, {useContext, useState} from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import cart from "../Images/cart_icon.png"
import { Link } from 'react-router-dom'                  //changes done yesterday 
import { ShopContext } from '../../Context/ShopContext'
import DarkModeIcon from '@mui/icons-material/DarkMode'; 




const Navbar = (props) => {

  const {getTotalCartItems} = useContext(ShopContext)
  const [mode, setMode] = useState("black");

  const toggleMode=(mode)=>{
    if(mode === "black"){
      document.body.style.backgroundColor = "#042743";
      return props.getMode("black");
      
    }
    else{
      document.body.style.backgroundColor = "white";
      return props.getMode("white");
    }
  }



  return (
    <>
    <div className="navbar" style={{ backgroundColor : mode==="black"?"white":"#042743"}}>
      <Link to="/">
          <div className="nav-logo">
              <img src= {logo} alt="navbar logo" /> 
              <p>Ecomm</p>
          </div>
      </Link>

        <div className="nav-menu ">
          <li> <Link  style={{ textDecoration: "none"}}   to="/" > Shop  </Link> </li>
          <li> <Link  style={{ textDecoration: "none"}}   to="/mens" > Men  </Link> </li>
          <li> <Link  style={{ textDecoration: "none"}}  to="/womens" >  Women  </Link>  </li>
          <li> <Link  style={{ textDecoration: "none"}}  to="/kids" > Kids </Link>  </li> 
        </div>

        <div className="nav-login-cart ">
          <Link to="/signup">  <button>LOG IN</button>  </Link>          {/*  //changes done yesterday */}
          <Link to="/cart">  <img src={cart} alt="cart icon" />  </Link>
          <div className="nav-cart-count"> {getTotalCartItems()} </div>

          <DarkModeIcon onClick={()=>{
            if(mode === "black"){
              setMode("white");

            }
            mode==="black"?setMode("white"):setMode("black");
            // console.log(mode);
            toggleMode(mode);
          }}></DarkModeIcon>

         

          
        </div>
    </div>
    
    </>
  )
}

export default Navbar
