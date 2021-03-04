import React from "react";
import Slider from "./Slider";

function Recipes(){
    return(
        <div className="recipes">
            <div className="recipesContent">
                <h1>Recipes</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
            </div>
            
            <Slider minhaQueridaVariavelInvariavel="Recipes"/>

        </div>
    );
}

export default Recipes;