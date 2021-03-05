import React from "react"
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest} from "react-icons/fa"

function Footer(){
    let iconStyles = {color: "#fff", marginRight: "1.8rem", fontSize: "1rem"}

    return(
        <footer className="footer">
            <nav className="navFooter">
               <a href="/">ABOUT US</a> 
               <a href="/">CONTACT</a> 
               <a href="/">GO GREEN</a> 
               <a href="/">TERMS & CONDITIONS</a> 
            </nav>

            <img className="mellowLogo" src="./images/logo.png" alt="Mellow logo"/>

            <div className="footerText">
                <h1>Cool phrase goes here</h1>
                <h1 className="greenH1">Maybe in two lines</h1>
            </div>

            <div className="subscribe">
                <input type="email" placeholder="Email Adress" />
                <button>SUBSCRIBE</button>
            </div>

            <div className="socialLogo">
                <FaFacebookF style={iconStyles} />
                <FaTwitter   style={iconStyles} />
                <FaInstagram style={iconStyles} />
                <FaPinterest style={iconStyles} />

                <p>Lorem ipsum dolor sit amet, consectetur adispiscing</p>
            </div>

        </footer>
    )
}

export default Footer