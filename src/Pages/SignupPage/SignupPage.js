import React from 'react'
import "./SignupPage.css"

import Header from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar"
import IconNavbar from "../../Components/IconNavbar/IconNavbar"
import SignupForm from '../../Components/SignupForm/SignupForm'
// import HomeNewsContent from "../../Components/HomeNewsContent/HomeNewsContent"


const SignupPage = () => {
    return (
        <div className="signupContWrapper">
            <div className="headerDiv"><Header/></div>
            <div className="iconNavbar"><IconNavbar/></div>
            <div className="Navbar"><Navbar/></div>
            <div className="headingRow fontFam flex"><h1>CREATE AN ACCOUNT</h1></div>
            <div className="signupFormRow" ><SignupForm/></div>
        </div>
    )
}

export default SignupPage
