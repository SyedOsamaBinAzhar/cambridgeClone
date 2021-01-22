import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navBar heightWidthHundredPercent">
            <div className="formalShirt heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">FORMAL SHIRTS
            <div className="line"></div>
            </div>

            <div className="casualShirts heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">CASUAL SHIRTS
            <div className="line"></div>
            </div>

            <div className="jackets heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">JACKETS
            <div className="line"></div>
            </div>

            <div className="blazers heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">BLAZERS
            <div className="line"></div>
            </div>

            <div className="sweaters heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">SWEATERS
            <div className="line"></div>
            </div>

            <div className="trousers heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">TROUSERS
            <div className="line"></div>
            </div>


         
        </div>
    )
}

export default Navbar
