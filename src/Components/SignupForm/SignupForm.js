import React, { useState } from 'react'
import { connect } from 'react-redux'
import "./SignupForm.css"
import {createUser} from "../../Redux/Auth/AuthActions"
const SignupForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let signupHandler = (e) => {
        e.preventDefault();
        let userDetailsObj = {
            firstName,
            lastName,
            email,
            password
        }
        createUser(userDetailsObj)
    }


    return (
         <form className="form flex-col signup-form" onSubmit={signupHandler}>
         First Name   <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="signupField" type="text"/>   
         Last Name   <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="signupField" type="text" />      
         Email Address  <input value={email} onChange={(e)=>setEmail(e.target.value)} className="signupField" type="text"  />      
         Password    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="signupField" type="text"  /> 
         <button className="createAnAccountBtn">CREATE AN ACCOUNT</button>        
        </form>  

    )
}

var actions = {
createUser
}

export default connect(null,actions)(SignupForm)
