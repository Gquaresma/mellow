import React from "react"
import Slider from "./Slider"

function Gogreen(){
    return(
        <div className="goGreen">
            <img className="pepper" src="./images/pepper.png" alt="pepper"/>

            <div className="goContainer">
                <div className="goGreenContent">
                    <Slider minhaQueridaVariavelInvariavel="GoGreen"/>

                    <div clasName="brandNames">
                        <img className="brand1" src="./images/logo1.png" alt="brand"/>
                        <img className="brand2" src="./images/logo2.png" alt="brand"/>
                        <img className="brand3" src="./images/logo3.png" alt="brand"/>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Gogreen;