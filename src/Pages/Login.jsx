import React from 'react'
import "./Login.css"                                 // This page created yester 

const Login = () => {
  return (
    <div>
         <div>
      
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Login Up</h1>

          <div className="loginsignup-fields">
          {/* <input type="text" placeholder='Your Name' /> */}
          <input type='email' placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          </div>

          <button>Continue</button>

          <div className="loginsignup-agree">
          {/* <input type="checkbox" /> */}
          <p>By continuing I agree to the terms of use & privacy policy</p>
          </div>

        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
