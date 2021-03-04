import React from "react"

function Experiment(){
    return (
        <div className="experiment">
            <div className="experimentContent">

                <div className="experimentText">
                    <h1>Delicious</h1> 
                    <h1>Planet-friendly food</h1>
                    <p>Culpa qui officia deserunt mollit anim id est laborum. Sed ut perpiciatis unde omnis istae natur error sit
                    </p>
                </div>

                <button className="experiment-btn">LEST'S TRY</button>

                <div className="download">
                    <p>Download on IOS and android fro free</p>
                    

                    <a href="/">
                        <img className="iosImg" src="./images/appstore.png" alt="App Store"/>
                    </a>
                    
                    <a href="/">
                        <img  className="androidImg" src="./images/playstore.png" alt="App Store"/>
                    </a>
                   

                </div>

             

            </div>

            <div className="greyImg"></div>

        </div>
    )
}

export default Experiment