import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

const Signup = (props) => {
  return (
    <div>
      
      <div className="loginsignups" style={{backgroundColor : (props.mode==="black")?"#5e0567":"#fce3fe"}}>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          </div>

          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account ? <Link to="/login"> <span> Login Here </span> </Link> </p>

          <div className="loginsignup-agree">
          {/* <input type="checkbox" /> */}
          <p style={{color : (props.mode === "black")?"white":""}}>By continuing I agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
