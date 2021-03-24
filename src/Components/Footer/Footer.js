import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer fontFam">
            <h6 className="fontFam">All Rights Reserved</h6>
            <div className="aboutCol flex flex-col">
               <div>
               <h3>About</h3>
                <p>Masrhiq</p>
                <p>Junior</p>
                <p>Cambridge</p>

               </div>
            </div>
            <div className="infoCol flex flex-col">
              <div>
              <h3>Info</h3>
                <p>Help</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
              </div>
            </div>
            <div className="connectWithUsCol flex flex-col">
              <div>
              <h3>Connect With Us</h3>
                 <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>

            </div>
            <div className="subscribeCol flex ">
            <div>
            <h3>BE A PART OF CAMBRIDGE FAMILY</h3>
                <p>Subscribe to our newsletter updates and exclusive deals</p>
                <div className="">
                <form className="subscriptionForm">
                <input className="formField" type="text" placeholder=" email address"/>
                <button className="subscribeBtn fontFam">Subscribe</button>
                </form>
                

                </div>
            </div>
            </div>

        </div>
    )
}

export default Footer
