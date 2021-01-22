import React from 'react'
import './Home.css'
import Header from "../../Components/Header/Header"
import IconNavbar from "../../Components/IconNavbar/IconNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm"
import HomeNewsContent from "../../Components/HomeNewsContent/HomeNewsContent"

const Home = () => {
    return (
        <div className="homeContWrapper">

            <div className="loginForm" style={{display:"none"}}>
                <div className="loginHeader ">
                    <h1>CUSTOMER LOGIN</h1>
                    <h5 className="cursorPointer">CLOSE</h5>
                </div>
                <div className="loginContent">
                    <LoginForm/>
                </div>

            </div>

            <div className="headerDiv">
                <div className="paraDiv"><Header/></div>
            </div>

            <div className="iconNavbar">
                <IconNavbar/>
            </div>

            <div className="Navbar">
                <Navbar/>
            </div>

            <div className="homeNewsImage">
                <HomeNewsContent/>
            </div>

        </div>
    )
}

export default Home