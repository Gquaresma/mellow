import React from "react";

function HowWorksSlide({title, image, content}){
    return(
        <div className="hwSlide">
            <div className="fruitSlide">
                <img src={image} alt="fruit"/>
            </div>
            
            

            <div className="hwContent">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>

        </div>
    )
}

export default HowWorksSlide;