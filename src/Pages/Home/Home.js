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
import Footer from '../../Components/Footer/Footer';
import HorizontalCategoryCard from '../../Components/HorizontalCategoryCard/HorizontalCategoryCard';
// import {closeBtnAction} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"

const Home = ({openCartDiv,openLoginBox,cartDivStateReducer,displayLoginComp}) => {



    useEffect(() => {
        return () => {
            
        }
    }, [])

    
    var cartWindowHandler = () => {
    }
    var loginWindowHandler = () => {

    }

    return (
        <div className="homeContWrapper">
            {
                openLoginBox?
            <div className="loginForm">
                <div className="loginHeader ">
                    <h1>CUSTOMER LOGIN</h1>
                    <button className="cursorPointer" onClick={()=>{displayLoginComp(!openLoginBox)}}>CLOSE</button>
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
                    <button onClick={() => {openCartDiv(!cartDivStateReducer)}}>CLOSE</button>
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

            <div className="displayCategoriesDiv">
                <div className="categrow1">
                    <div className="categ1"><HorizontalCategoryCard/></div>
                    <div className="categ2"><HorizontalCategoryCard/></div>

                </div>
                <div className="categrow2"></div>

            </div>
            
            <div className="footerRow">
                <Footer/>
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