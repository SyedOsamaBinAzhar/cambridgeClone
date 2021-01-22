import React from 'react'
import './IconNavbar.css'

import Vector from "../../Assets/Vector.png"
import {connect} from "react-redux";

import displayLoginComp from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"

const IconNavbar = () => {
   

    return (
        <div className="iconNavBarContainerWrapper">
                         <div className="cambridgeMashriqJuniorCont flex"> 
                    <div  className="cambridgeBtn flex heightWidthHundredPercent ">Cambridge</div>
                    <div className="mashriqBtn flex heightWidthHundredPercent">Mashriq</div>
                    <div className="juniorBtn flex heightWidthHundredPercent">Junior</div>

                </div>
                
                <div className="cambridgeLogoCont flex">
                  <div className="cambridgeLogoDiv heightWidthHundredPercent flex">
                  <img height="40px" width="200px" className="" src={Vector}></img>
                  </div>
                </div>

                <div className="searchCartCont flex">
                    <div className="searchBarDiv heightWidthHundredPercent flex navIconsSize"><input className="searchField" type="text" placeholder="Search"></input><i class="fas fa-search searchIcon"></i></div>
                    <div className="currencyDiv heightWidthHundredPercent flex navIconsSize">PKR</div>    
                    <div className="loginLogoDiv heightWidthHundredPercent flex  navIconsSize"><i class="fas fa-user"></i></div>
                    <div className="cartLogoDiv heightWidthHundredPercent flex navIconsSize"><i class="fas fa-shopping-cart"></i></div>    
                </div> 
        </div>
    )
}



export default IconNavbar
