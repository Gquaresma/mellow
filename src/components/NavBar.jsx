import React from "react";

function NavBar(){
    return(
        <div className="navBar">

            <img className="logo" src="./images/logo.png" alt="logo"/>

            <nav>
                <a href="/">Recipes</a>
                <a href="/">Go Green</a>
                <a href="/">Pricing</a>
                <a href="/">How it works</a>
            </nav>

             <div className="borderProfile">
                <div className="image">
                    <img src="./images/profilee.png" alt="Profile" />
                </div>
            </div>
        </div> 



    );
}




export default NavBar;