import React from 'react'
import "./Login.css"                                 // This page created yester 

const Login = (props) => {
  const changeBackground={
    backgroundColor : (props.mode === "black")?"#f3e5e57b":"white",
  }

  const changeColor={
    color : (props.mode === "black")?"white":"black",
  }
  return (
    <div>
         <div>
      
      <div className="loginsignup" style={{backgroundColor : (props.mode === "black")?"#042743":"#829bff"}}>
        {/* {console.log(props.mode)} */}
        <div className="loginsignup-container" style={changeBackground} >
          <h1 style={changeColor}>Login Up</h1>

          <div className="loginsignup-fields">
          {/* <input type="text" placeholder='Your Name' /> */}
          <input type='email' placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          </div>

          <button>Continue</button>

          <div className="loginsignup-agree">
          {/* <input type="checkbox" /> */}
          <p style={changeColor}>By continuing I agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
