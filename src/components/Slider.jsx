import React, {useState} from "react";

import carouselData from "../carouselData";
import greenSlide from "../goGreenCont";
import hWCarousel from "../hWCarousel";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import GoGreenSlide from "./GoGreenSlide";
import HowWorksSlide from "./HowWorksSlide";
import Arrow from "./Arrow";
import GoGreenArrow from "./GoGreenArrow";

function Carousel(props){

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const {activeIndex, translate, transition} = state;
    
    let section = props.minhaQueridaVariavelInvariavel;
    let length, variableWidth, slideItem;

    if(section === "Recipes"){
        length = carouselData.length;
        variableWidth = 17;
        slideItem = 4;
    }
    else if(section === "GoGreen"){
        length = greenSlide.length;
        variableWidth = 30;
        slideItem = 1;
    }
    else if(section === "HowItWorks"){
        length = hWCarousel.length;
        variableWidth = 68;
        slideItem = 1;
    }

    function nextSlide(){
        if(section === "Recipes"){
            if(activeIndex >= slideItem){
                return setState({
                    ...state,
                    translate: 0,
                    activeIndex: 0
                })
            }
        }
        else if(section === "GoGreen"){
            if(activeIndex === slideItem + 1){
                return setState({
                    ...state,
                    translate: 0,
                    activeIndex: 0
                })
            }
        }
        

        setState({
            ...state,
            activeIndex: activeIndex + slideItem,
            translate: ((activeIndex + slideItem) * variableWidth) 
        })
    }

    function prevSlide(){
        if(activeIndex === 0){
            return setState({
                ...state,
                translate: ((length - 1) * variableWidth),
                activeIndex: length - 1
            })
            
        }

            setState({
                ...state,
                activeIndex: activeIndex - 1,
                translate: ((activeIndex - 1) * variableWidth) - 100
            })
        
        
    }

    return (
        <div className="carousel">
            <div className="slider">
                <SliderContent translate={translate} transition={transition} width={length} variableWidth={variableWidth}>
                
                    {(section === "Recipes") && (
                        carouselData.map((carouselImg, index) =>{
                            return <Slide key={index} content={carouselImg} />
                        })
                    )}
                    
                    {(section === "GoGreen") && (
                        greenSlide.map((info, index) =>{
                            return <GoGreenSlide key={index} title={info.title}  content={info.content} />
                        })
                    )}

                    {(section === "HowItWorks") && (
                        hWCarousel.map((content, index) =>{
                            return <HowWorksSlide 
                                        key={index} 
                                        title={content.title} 
                                        image={content.imgURL} 
                                        content={content.content}
                                    />
                        })
                    )}
                    
                
                    
                </SliderContent>

                {(section === "Recipes" || section === "HowItWorks") ?
                    (<div>
                        <Arrow direction="left" handleClick={prevSlide} />
                        <Arrow direction="right" handleClick={nextSlide} />
                    </div>
                    ) : null
                }

                {(section === "GoGreen") && <GoGreenArrow direction="right" handleClick={nextSlide} />}
                

           
            </div>
        </div>
        

    );
}

export default Carousel;