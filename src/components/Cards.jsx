import React from "react";

function Cards(props){
    const imgClass = `img${props.id}`;

    return(
        
        <div className="card">
            <h1>Plan {"0" + props.id}</h1>  
            <p>7 days trial</p>

            <div className="cardImg">
                <img  className={imgClass} src={props.img} alt="card plan"/>
            </div>
            

            <ul>
                {props.options.map((option, index )=> {
                    return (
                        <li key={index}> 
                            {option}
                            <span>-</span>
                        </li> 
                    );
                })}
            </ul>

            <button className="cardBtn">LET'S TRY</button>

        </div>
        
    
    );
}

export default Cards;