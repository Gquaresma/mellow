/**   @jsxImportSource @emotion/react */

// import React from "react"
import {css} from "@emotion/react"
import leftArrow from "../img/left-arrow.svg"
import rightArrow from "../img/right-arrow.svg"

function Arrow({direction, handleClick}){
    return(
            <div 
            onClick={handleClick}
            css={css`
                display: flex;
                position: absolute;
                top: 45%;
                ${direction === 'right' ? `right: 25px` : `left: 25px`};
                height: 50px;
                width: 50px;
                justify-content: center;
                background:  rgb(0, 234, 135);
                border-radius: 50%;
                cursor: pointer;
                align-items: center;
                transition: transform ease-in 0.1s;
                &:hover{
                    transform: scale(1.1);
                }
                
                img{
                    transform: translateX(${direction === 'left' ? '-2' : '2'}px);
                    &:focus{
                        outline: 0;
                    }
                }

            `}
        >
            {direction === 'right' ? <img className="arrowImg" src={rightArrow} alt="food"/> : <img className="arrowImg" src={leftArrow} alt="food"/>}

        </div>
    )
} 
       



export default Arrow;

//