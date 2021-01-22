import React from 'react'
import "./HomeNewsContent.css"
import WinterClearanceSale from "../../Assets/WinterClearanceSale.jpg"

const HomeNewsContent = () => {
    return (
        <div className="homeCoverImage">
                <img className="coverImage" src={WinterClearanceSale}></img>
        </div>
    )
}

export default HomeNewsContent
