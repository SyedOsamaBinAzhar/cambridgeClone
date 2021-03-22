import React, { useEffect,useState } from 'react'
import './Home.css'
import Header from "../../Components/Header/Header"
import IconNavbar from "../../Components/IconNavbar/IconNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm"
import HomeNewsContent from "../../Components/HomeNewsContent/HomeNewsContent"
import { connect } from 'react-redux';

// import {closeBtnAction} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"

const Home = (props) => {
   

    return (
        <div className="homeContWrapper">
            {
                props.openLoginBox?
            <div className="loginForm">
                <div className="loginHeader ">
                    <h1>CUSTOMER LOGIN</h1>
                    <h5 className="cursorPointer">CLOSE</h5>
                </div>
                <div className="loginContent">
                    <LoginForm/>
                </div>
            </div>
            :
            null
            }

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

var mapStateToProps = (state) => {
    return {
        openLoginBox: state.UiUxFunctionality.openLoginBox
    }
}

// var actions={
//     closeBtnAction,
// }
export default connect(mapStateToProps,null)(Home)