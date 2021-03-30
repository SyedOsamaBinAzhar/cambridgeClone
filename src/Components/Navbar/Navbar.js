import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navBar heightWidthHundredPercent">
            <div className="formalShirt heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
    <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    FORMAL SHIRTS
     </button>
     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
       <a class="dropdown-item" href="#">Action</a>
       <a class="dropdown-item" href="#">Another action</a>
       <a class="dropdown-item" href="#">Something else here</a>
     </div>
    </div>
                {/* FORMAL SHIRTS */}
            <div className="line"></div>
            </div>

            <div className="casualShirts heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
  <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
  CASUAL SHIRTS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
{/* CASUAL SHIRTS */}
            <div className="line"></div>
            </div>

            <div className="jackets heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
  <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  JACKETS 
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                {/* JACKETS */}
            <div className="line"></div>
            </div>

            <div className="blazers heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
  <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  BLAZERS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                {/* BLAZERS */}
            <div className="line"></div>
            </div>

            <div className="sweaters heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
  <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  SWEATERS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                {/* SWEATERS */}
            <div className="line"></div>
            </div>

            <div className="trousers heightWidthHundredPercent flex cursorPointer fontSizeOneRem flex-col">
            <div class="dropdown">
  <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  TROUSERS
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                {/* TROUSERS */}
            <div className="line"></div>
            </div>


         
        </div>
    )
}

export default Navbar
