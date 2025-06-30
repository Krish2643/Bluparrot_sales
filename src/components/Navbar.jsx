// import React from 'react';
// import './Navbar.css';
// import Logo from "./Images/LOGO white bg png 3.png";
// import { useNavigate } from 'react-router-dom';
 
// const Navbar = () => {

//     const navigate = useNavigate();
//     const handleClick = (path)=>{
//        navigate(path);
//     }

//     return (
//         <nav className="navbar">
//             <div onClick={()=>handleClick('/')} className="navbar-logo"><img src={Logo} alt='Blu Parrot' /></div>
//             <ul className="navbar-links">
//                 <li><a href="/">Our Verticals</a></li>
//                 <li><a href="/Our_products">Our Products</a></li>
//                 <li><a href="/Global_capability">Global Capability Centers Advisory</a></li>


//                 <li><a href="/team">Team</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#contact">Contact Us</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;
import React from 'react';
import './Navbar.css';
import Logo from "../assets/Images/Blu_Parrot_logo.png";
import { useNavigate } from 'react-router-dom';
import { Link,useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import expend from "../components/Images/Expend.svg";
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // Track nav visibility
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Track submenu visibility
    const [navBackground, setNavBackground] = useState(false);
    const [isSubmenuActive, setIsSubmenuActive] = useState(false);

    const location = useLocation();
    useEffect(() => {
        const isSubMenuLinkActive = [
            '/Vertical', 
            '/IOT', 
            '/ESG', 
            '/AI-Driven', 
            '/Global_index', 
            '/Growth_marketing', 
            '/Cloud_Services', 
            '/Cyber_Security'
        ].includes(location.pathname);

        if (isSubMenuLinkActive) {
            setIsSubmenuActive(true);
        } else {
            setIsSubmenuActive(false);
        }
    }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      if (scrollPosition > 50) { // Change background when scrolled down 50px
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);


    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle navbar visibility
    };

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen); // Toggle submenu visibility
    
      };
      const closesubmenu = ()=>{
        setIsSubMenuOpen(false)
      }

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <nav className={`Navbar ${navBackground ? 'navbar-scrolled' : ''}`}>
            <div onClick={() => handleClick('/')} className="navbar-logo"><img src={Logo} alt='Blu Parrot' loading="lazy" /></div>


            {/* Hamburger Icon for Mobile */}
            

            {/* Navbar Links */}
            <div className="nav-container">
            <div className="hamburger">
                <div className={`line ${isNavOpen ? "open" : ""}`} onClick={toggleNav}></div>
                <div className={`line ${isNavOpen ? "open" : ""}`} onClick={toggleNav}></div>
                <div className={`line ${isNavOpen ? "open" : ""}`} onClick={toggleNav}></div>
            </div>
            
                
                
            </div>
        </nav>
    );
};

export default Navbar;

