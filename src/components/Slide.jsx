import React from "react";

function Slide({content}){
    return(
        <div className="carouselImage" style={{backgroundImage: `url(${content})`}} />
    );
}

export default Slide;