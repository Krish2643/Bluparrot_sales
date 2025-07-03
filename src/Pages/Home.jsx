import React from "react";
import Navbar2 from "../components/Navbar2.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import "./Home.css"

const Home = ()=>{
    return(
        <div className="home-container">
        <Navbar2/>
        {/* <ContactSection/> */}
        <Footer/>
        </div>
    )

}
export default Home;