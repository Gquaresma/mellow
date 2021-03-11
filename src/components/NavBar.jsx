import React from "react";
import {FaBars} from "react-icons/fa";

function NavBar(){
    // let iconStyle =  {color: }
    return(
        <div className="navBar">

            <img className="logo" src="./images/logo.png" alt="logo"/>
            <input type="checkbox" id="check" />
            <label for="check" className="checkBtn"> <FaBars /> </label>

            <nav className="navHeader">
                <ul>
                   <li> 
                        <a href="/">Recipes</a> 
                   </li>

                   <li> 
                        <a href="/">Go Green</a> 
                   </li>

                   <li> 
                        <a href="/">Pricing</a> 
                   </li>

                   <li> 
                        <a href="/">How it works</a> 
                   </li>
                    
                
                </ul>
              
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