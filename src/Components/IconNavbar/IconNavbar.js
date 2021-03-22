import React, { useEffect, useState } from 'react'
import './IconNavbar.css'

import Vector from "../../Assets/Vector.png"
import {connect} from "react-redux";

import {displayLoginComp} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"
import {openCartDiv} from "../../Redux/CartDivState/CartDivStateActions" 


const IconNavbar = ({displayLoginComp,openCartDiv}) => {

    const [loginDivStatus, SetLoginDivStatus] = useState(false)
    const [cartDivStatus, SetCartDivStatus] = useState(false)
    
    
     
    useEffect(() => {
        handleLoginDiv()
        handleCartDiv()
        return () => {
        
        }
    }, [loginDivStatus,cartDivStatus])

    var handleLoginDiv=()=>{
        displayLoginComp(loginDivStatus)
    }
    var handleCartDiv=() => {
        openCartDiv(cartDivStatus)
    }

 
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
                    <div className="searchBarDiv heightWidthHundredPercent flex navIconsSize"><input className="searchField" type="text" placeholder="Search"></input><i className="fas fa-search searchIcon"></i></div>
                    <div className="currencyDiv heightWidthHundredPercent flex navIconsSize">
                    
                        
                    </div>    
                    <div className="loginLogoDiv heightWidthHundredPercent flex  navIconsSize"><i className="fas fa-user" onClick={()=>SetLoginDivStatus(!loginDivStatus)}></i></div>
                    <div className="cartLogoDiv heightWidthHundredPercent flex navIconsSize"><i className="fas fa-shopping-cart" onClick={()=>SetCartDivStatus(!cartDivStatus)}></i></div>    
                </div> 
        </div>
    )
}


var actions = {
    displayLoginComp,
    openCartDiv
}
export default connect(null,actions)(IconNavbar)
