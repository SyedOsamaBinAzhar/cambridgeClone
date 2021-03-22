import React, { useEffect,useState } from 'react'
import './Home.css'
import Header from "../../Components/Header/Header"
import IconNavbar from "../../Components/IconNavbar/IconNavbar";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm"
import HomeNewsContent from "../../Components/HomeNewsContent/HomeNewsContent"
import { connect } from 'react-redux';

import {openCartDiv} from "../../Redux/CartDivState/CartDivStateActions"
import {displayLoginComp} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"
// import {closeBtnAction} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"

const Home = ({openCartDiv,openLoginBox,cartDivStateReducer,displayLoginComp}) => {

    var [cartBoxStatus,setCartBoxStatus] = useState(cartDivStateReducer)
    var [loginComp,setLoginComp] = useState(openLoginBox)


    useEffect(() => {
        // cartWindowHandler()
        loginWindowHandler()
        return () => {
            
        }
    }, [cartBoxStatus,loginComp])

    
    var cartWindowHandler = () => {
        openCartDiv(cartBoxStatus)
    }
    var loginWindowHandler = () => {
        displayLoginComp(loginComp)

    }

    return (
        <div className="homeContWrapper">
            {
                openLoginBox?
            <div className="loginForm">
                <div className="loginHeader ">
                    <h1>CUSTOMER LOGIN</h1>
                    <button className="cursorPointer" onClick={()=>{setLoginComp(!openLoginBox)}}>CLOSE</button>
                </div>
                <div className="loginContent">
                    <LoginForm/>
                </div>
            </div>
            :
            null
            }
            {
                cartDivStateReducer?
                <div className="cartWindowBox">
                <div className="headingRow">
                    <button onClick={() => {console.log("hi")}}>CLOSE</button>
                    <h3 className="fontFam">SHOPPING CART</h3>
                </div>
                <div className="cartContentRow">
                    <div>

                        <button className="continueShoppingBtn">CONTINUE SHOPPING</button>
                    </div>
                    
                </div>
        

            </div>
            : null
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

var mapState = (state) => {
    return {
        openLoginBox: state.UiUxFunctionality.openLoginBox,
        cartDivStateReducer: state.cartDivStateReducer
    }
}

var actions={
    openCartDiv,
    displayLoginComp
}
export default connect(mapState,actions)(Home)