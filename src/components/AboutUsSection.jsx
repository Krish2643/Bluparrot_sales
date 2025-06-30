import React from 'react';
import './AboutUsSection.css';
import about_us from "../assets/Images/weekday-business-team-strutting-confidently.gif";

const AboutUsSection = () => {
    return (
        <section id="about" style={{  backgroundColor: '#023047', }} className="about-us-section">
            <div className='about-1st-container'>
                <div className='we_are'><h1 className="split-text">
                    <span className="line-one">Who</span>
                    <span className="line-two">We Are</span>
                </h1></div>

                <div className='image-container' >
                    <img className='image-us'src={about_us} alt='Our Team' loading="lazy" />
                </div>
            </div>
    
        </section>
    );
};

export default AboutUsSection;
