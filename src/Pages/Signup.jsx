import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

const Signup = (props) => {
  const changeBackground = {
    backgroundColor : (props.mode==="black")?"#f3e5e57b":"white",
  }

  const changeColor={
    color : (props.mode==="black")?"white":"black"
  }
  return (
    <div>
      
      <div className="signupPage" style={{backgroundColor : (props.mode==="black")?"#1f2937":"#fce3fe"}}>
        <div className="signupPage-container" style={changeBackground}>
          <h1 style={changeColor}>Sign Up</h1>
          <div className="signupPage-fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          </div>

          <button>Continue</button>
          <p className='signupPage-login' style={changeColor}>Already have an account ? <Link to="/login"> <span> Login Here </span> </Link> </p>

          <div className="signupPage-agree">
          {/* <input type="checkbox" /> */}
          <p style={{color : (props.mode === "black")?"white":""}}>By continuing I agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
