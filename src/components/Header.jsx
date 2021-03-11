import React from "react";
import Cards from "./Cards";
import cardPlan from "../cardPlan";

function Header(){
    return(
        <div className="header">
        
          <img className="sideImage" src="./images/side.jpg" alt="food" />

            <div className="content">
                <h1>Your subscription has expired...</h1>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>

                
                <div className="plan">
                    {cardPlan.map((card, index) => {
                        return <Cards key={card.id} id={index + 1} img={card.img} options={card.options} />
                    })}
                
                </div>
            

                

            </div>

            


        </div>
    );
}

export default Header;