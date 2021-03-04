// import React from "react";
import styled from "@emotion/styled"

const SliderContent = styled.div`
    transform: translatex(-${props => props.translate}rem);
    transition: transform ease-out ${props => props.transition}s;
    width: ${props => props.variableWidth * props.width}rem;
    display: flex;
    
`

export default SliderContent;