import React from "react";
import "./LeaderSection.css";
import Candidate1 from "../components/Images/Rectangle 5798.png";
import Line from "../components/Images/Line 14.png";
import Nitin from "../assets/Team/nitin.png";
import Aarushi from "../assets/Team/aarushi.png"

const LeaderSection = () => {
  return (
    <div
      className="leaders-section"
      style={{
        padding: "20px",
        maxWidth: "1300px",
        margin: "70px auto auto auto",
        justifyContent: "space-between",
      }}
    >
      {/* About Us Section */}
      <div className="about-container">
      <div className="about-page"     
      >
        <h1>About Us</h1>
        <p
          style={{ lineHeight: "1.5", marginBottom: "20px", textAlign: "left" }}
        >
          Blu Parrot Ventures is where intelligent automation, agentic AI, and data-driven innovation converge to drive transformative growth. Our team specializes in cutting-edge digital transformation solutions, leveraging AI-powered automation, predictive analytics, and advanced machine learning models. We enable businesses to unlock the full potential of their data, optimize performance, and scale sustainable solutions. From performance marketing to AI-driven ESG innovations, we empower our clients to stay ahead in an increasingly digital and intelligent world, fostering long-term success and sustainability.
        </p>
      </div>
      </div>

      {/* Leaders Section */}

      <div
        className="leaders-content"
        
      >
        {/* Profiles Section */}
        <div className="leaders-profiles">
          {/* Founder Profile */}
          <div
            className="profile-card nitin"
            style={{
              display: "flex",
              alignItems: "center",
              
            }}
          >
            <img
              src={Nitin}
              alt="Nitin Kalara"
              className="profile-image nitin-image"
              loading="lazy"
              
            />
            <div
              style={{
                marginTop: "-160px",
                display: "flex",
                flexDirection: "row",
              }}
              className="profile-info"
            >
              <div>
                <img style={{ marginLeft: "-50px" }} src={Line} alt="Line" loading="lazy" />
              </div>
              <div>
                <div
                  className="profile-name"
                  
                >
                  Nitin Kalra
                </div>
                <div
                  className="profile-title"
                  style={{ fontSize: "16px", color: "gray" }}
                >
                  Founder
                </div>
              </div>
            </div>
          </div>
          {/* Co-Founder Profile */}
          <div
            className="profile-card aarushi"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "-70px",
              justifyContent: "space-around",
              
            }}
          >
            <div
              className="profile-info aarushi-info"
              
            >
              <div>
                <div
                  className="profile-name"
                  
                >
                  Aarushi Malhotra
                </div>
                <div
                  className="profile-title"
                  style={{ fontSize: "16px", color: "gray" }}
                >
                  Co-Founder
                </div>
              </div>
              <div>
                <img style={{ marginRight: "-50px" }} src={Line} alt="Line" loading="lazy" />
              </div>
            </div>
            <img
              src={Aarushi}
              alt="Aarushi Malhotra"
              className="profile-image aarushi-image"
              loading="lazy"
              
            />
          </div>
        </div>

        {/* Description Section */}
        
        <div className="leaders-section">
        <div className="leaders-description" style={{ padding: '0 10px', display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
        <h2 className="leaders-title" style={{ marginTop: '40px' }}>Leaders</h2>
          <h3 style={{ marginBottom: '10px', color:'#0082A1' }}>Mission</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '20px', textAlign:'left'}}>
          At Blu Parrot, our mission is to empower our clients with cutting-edge innovations in digital transformation, automation, data science, performance marketing, and ESG. We fuel progress, growth, and sustainability, transforming challenges into opportunities for a brighter and rising future.           </p>
          <h3 style={{ marginBottom: '10px', color:'#0082A1'  }}>Vision</h3>
          <p style={{ lineHeight: '1.6', textAlign:'left' }}>
          We envision Blu Parrot rising high in the innovation space, where our commitment to excellence meets groundbreaking technology. We aim to shape a world where possibilities are limitless, and every flight leads to a new horizon.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderSection;
