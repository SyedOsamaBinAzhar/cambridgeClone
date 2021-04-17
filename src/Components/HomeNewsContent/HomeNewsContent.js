import React from 'react'
import "./HomeNewsContent.css"
import VB_Desktop from "../../Assets/VB_Desktop.mp4"
// import {} from "../../Assets"

const HomeNewsContent = () => {
    return (
        <div className="homeCoverImage">
                {/* <img className="coverImage" src={WinterClearanceSale}></img> */}
                <video width="100%" height="100%" controls >
          <source src={VB_Desktop} type="video/mp4"/>
        </video>
        </div>
    )
}

export default HomeNewsContent
