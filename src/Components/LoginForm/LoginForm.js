import React from 'react'
import "./LoginForm.css"


const LoginForm = () => {
    return (
        <div className="loginFormDiv">
            <form>
            <p>Email Address</p>
            <input className="inputFieldsStyling" type="text" placeholder="Enter Email"/>
            <p>Password</p>
            <input className="inputFieldsStyling" type="password" placeholder="Enter Password"/>
            <button className="loginFormBtnsStyling  cursorPointer">LOGIN</button>
            <h4 className="forgotYourPassword cursorPointer">Forgot Your Password?</h4>
            <button className="loginFormBtnsStyling cursorPointer createAnAccount">CREATE AN ACCOUNT</button>
            </form>

        </div>
    )
}

export default LoginForm
