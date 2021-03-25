import React, { useEffect, useState } from 'react'
import './IconNavbar.css'

import Vector from "../../Assets/Vector.png"
import {connect} from "react-redux";

import {displayLoginComp} from "../../Redux/UiUxFunctionality/UiUxFunctionalityActions"
import {openCartDiv} from "../../Redux/CartDivState/CartDivStateActions" 
import { Link } from 'react-router-dom';


const IconNavbar = ({displayLoginComp,openCartDiv,openLoginBox,cartDivStateReducer}) => {

  
 
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
                        <div className="btn-group">
                          <button type="button" className="btn dropdown-toggle" style={{padding:0,backgroundColor:"#fff",outline:0}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PKR
                          </button>
                          <div className="dropdown-menu" style={{padding:0,outline:0,border:0}} >
                            <Link className="dropdown-item" to="" style={{padding:0,width:"40px",overflowX:"hidden",border:"0.1px solid lightgrey",padding:"0 0.5rem"}}>USD</Link>
                            <Link className="dropdown-item" to="" style={{padding:0,width:"40px",overflowX:"hidden",border:"0.1px solid lightgrey",padding:"0 0.5rem"}}>PKR</Link>
                            <Link className="dropdown-item" to="" style={{padding:0,width:"40px",overflowX:"hidden",border:"0.1px solid lightgrey",padding:"0 0.5rem"}}>AED</Link>
                          </div>
                        </div>
                    </div>    
                    <div className="loginLogoDiv heightWidthHundredPercent flex  navIconsSize" onClick={()=>{displayLoginComp(!openLoginBox)}}><i className="fas fa-user" ></i></div>
                    <div className="cartLogoDiv heightWidthHundredPercent flex navIconsSize" onClick={()=>{openCartDiv(!cartDivStateReducer)}}><i className="fas fa-shopping-cart" ></i></div>    
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


var actions = {
    displayLoginComp,
    openCartDiv
}
export default connect(mapState,actions)(IconNavbar)
