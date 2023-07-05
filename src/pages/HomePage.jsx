import React from "react";
import '../App.css'
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";


function HomePage () {
return(
    
 <div className="container">
    <div className="container main">
        <HeroSection/>
        <ImproveSkills/>
    </div>
 </div>
)
}
export default HomePage;