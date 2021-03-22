import React, { useEffect } from 'react'
import "./LoginForm.css"

import { Link } from 'react-router-dom'
import {connect} from "react-redux"

const LoginForm = (props) => {

    return (
        <div className="loginFormDiv">
            <form>
            <p>Email Address</p>
            <input className="inputFieldsStyling" type="text" placeholder="Enter Email"/>
            <p>Password</p>
            <input className="inputFieldsStyling" type="password" placeholder="Enter Password"/>
            <button className="loginFormBtnsStyling  cursorPointer loginBtn">LOGIN</button>
            <h4 className="forgotYourPassword cursorPointer">Forgot Your Password?</h4>
            <button className="loginFormBtnsStyling cursorPointer createAnAccount"><Link to='/page/Signup' style={{ textDecoration: 'none'}}>CREATE AN ACCOUNT</Link></button>

            </form>
        </div>

    )
}



export default LoginForm
