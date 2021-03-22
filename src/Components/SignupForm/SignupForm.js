import React from 'react'
import "./SignupForm.css"
const SignupForm = () => {
    return (
        <div className="signup-form">
         <form className="form flex-col">
         First Name   <input className="signupField" type="text"/>   
         Last Name   <input className="signupField" type="text" />      
         Email Address  <input className="signupField" type="text"  />      
         Password    <input className="signupField" type="text"  /> 
         <button className="createAnAccountBtn">CREATE AN ACCOUNT</button>        
        </form>  

        </div>
    )
}

export default SignupForm
