import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Recipes from "./Recipes";
import Gogreen from "./Gogreen";
import HowWorks from "./HowWorks";
import Experiment from "./Experiment";
import Footer from "./Footer";

function App(){
    return(
        <div>
            <NavBar />
            <Header />
            <Recipes />
            <Gogreen />
            <HowWorks />
            <Experiment />
            <Footer />

        </div>
    );
}

export default App;