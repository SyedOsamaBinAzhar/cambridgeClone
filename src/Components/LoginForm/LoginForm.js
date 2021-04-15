import React, { useEffect, useState } from 'react'
import "./LoginForm.css"

import { Link } from 'react-router-dom'
import {connect} from "react-redux"
import { loginUser } from '../../Redux/Auth/AuthActions'

const LoginForm = ({loginUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleLoginForm = (e) => {
        e.preventDefault();
        var userLoginInfo = {
            email,password
        }
        loginUser(userLoginInfo)

    }

    return (
        <div className="loginFormDiv">
            <form onSubmit={handleLoginForm}>
            <p>Email Address</p>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="inputFieldsStyling" type="text" placeholder="Enter Email"/>
            <p>Password</p>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="inputFieldsStyling" type="password" placeholder="Enter Password"/>
            <button className="loginFormBtnsStyling  cursorPointer loginBtn">LOGIN</button>
            <h4 className="forgotYourPassword cursorPointer">Forgot Your Password?</h4>
            <button className="loginFormBtnsStyling cursorPointer createAnAccount"><Link to='/page/Signup' style={{ textDecoration: 'none'}}>CREATE AN ACCOUNT</Link></button>

            </form>
        </div>

    )
}

var actions = {
    loginUser
}

export default connect(null,actions) (LoginForm)
