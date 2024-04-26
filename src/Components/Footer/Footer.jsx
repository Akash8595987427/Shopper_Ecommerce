import React from 'react'
import "./Footer.css" 
import logo from "../Images/logo.png"
 

const Footer = (props) => {

    const changeTheme = {
        color : (props.mode === "black")?"white":"",
    }
  return (
    <>

    <div className="footer" style={changeTheme}>
        {console.log(props.mode)}
        <div className="panel_1">
            <div className="panel_1_info">
                <img src={logo} alt="ecommerce_logo" />
                <h2 >Shopper</h2>
            </div>

            <div className="panel_info">
               <p > Wear the premium tshirts, hoddies, sweatshirts, zipper and apparals </p>
            </div>
        </div>

        <div className="panel_2">
            <h4> Shop </h4>
            <p>SweatShirts</p>
            <p>Hoddies</p>
            <p>Zipper Hoddies</p>
        </div>

        <div className="panel_3">
            <h4> CUSTOMER SERVICE </h4>
            <p>Contact US</p>
            <p>About Us</p>
            <p>Return Policy</p>

        </div>

        <div className="panel_4">
            <h4> POLICY </h4>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Reserved All Right</p>
        </div>
    </div>

    <div className="copyright" style={changeTheme}>
        Copyright &copy;  2023  -  All Right Reserved 
    </div>
      
    </>
  )
}

export default Footer
