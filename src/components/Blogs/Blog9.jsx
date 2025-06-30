import React from "react";
import blog9 from "../../assets/Blogs/blog-9.jpg"
import { FaPen } from "react-icons/fa";
import "./Blog1.css";
import { FaCalendar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

const Blog9 = () => {
//   const data = {
//     title: "Empowering Your Business; Leveraging Data and AI",
//     img: blog1,
//     "category Name": "Category Name",
//     description: ` ${(
//       <p>
//         In today’s fast-evolving digital landscape, data and artificial
//         intelligence (AI) have become the cornerstones of innovation and
//         business growth. Nitin Kalra, Founder and CEO of Blu Parrot Ventures,
//         shares his journeya nd expertise in leveraging these transformative
//         technologies to empower businesses worldwide{" "}
//       </p>
//     )} ${(<br />)} ${(<h1>hello world</h1>)} `,
//   };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <div className="blog-page-container">

        <NavLink to={'/blogs'} className="nav-link" > Home / Blogs / Strategic Talent Leadership </NavLink>

        <p className="heading">
        Meet the Strategist Behind Blu Parrot’s Talent Engine – Saumya Agarwal, CHRO        </p>
        <p className="category-name"> Strategic Talent Leadership </p>
        <div className="blog-image">
          <img src={blog9} alt="blog-image" />
        </div>
        <div className="paragraph2" >
            <p className="sub-text">
            At Blu Parrot, we believe that our people are our greatest strength. Behind every high-performing team and successful hire is a thoughtful strategy — and leading that strategy is our <b>Chief Human Resources Officer, Saumya Agarwal. </b>
            </p>
        </div>
        <div className="paragraph" >
        {/* <p className="text"> Why Data is Like Air  </p> */}
        <p className="sub-text">
        With a passion for building dynamic teams and a deep understanding of how people drive performance,<b> Saumya Agarwal brings a future-forward HR approach to Blu Parrot,</b> transforming the way we think about talent acquisition, development, and culture. 
        <br />
        
        </p>
        </div>

        <div className="paragraph2" >
        <p className="text">
        More Than Just Hiring — It's About Building Legacy                 </p>
        </div>
        
        <div className="paragraph2" >
        {/* <p className="text"> Nitin Kalra’s Vision: Breathing Life into Data   </p> */}
        <p className="sub-text">
        For Saumya, hiring is not just about filling a role — it’s about <b>finding the right talent that fits seamlessly into a company’s vision, culture, and long-term goals.</b> Her approach goes beyond skills and resumes; it’s centered on people who bring value, innovation and alignment to the workplace. 
       <br/>
        </p>
       </div>
       <div className="paragraph" >
        {/* <p className="text"> Why Data is Like Air  </p> */}
        <p className="sub-text">
        “I believe the strongest businesses are built by the right people. And the right people aren’t just skilled — they are purpose-driven,” says Saumya. 
        <br />
        
        </p>
        </div>
       

       <div className="paragraph2">
             <p className="text">
             Her Role at Blu Parrot              </p>
        </div>

        <div className="paragraph" >
        {/* <p className="text"> Nitin Kalra’s Vision: Breathing Life into Data   </p> */}
        <p className="sub-text">
        At Blu Parrot, Saumya oversees key HR functions that contribute directly to business success: 
        <br/>
        <br/>
        </p>
        <p className="sub-text">
            <b>✔ Key Account Management</b> – Aligning recruitment with business strategy
            <br/><br/>
            <b>✔ Talent Acquisition & Development</b> – Sourcing and nurturing exceptional professionals 
            <br/><br/>
            <b>✔ HR Policy & Culture Strategy</b> – Building inclusive, growth-oriented environments 
            <br/><br/>
            <b>✔ Manpower Outsourcing</b> – Offering scalable workforce solutions to growing teams 
            <br/><br/>
            <b>✔ Leadership Advisory</b> – Guiding organizations with insights on team performance and structure 
            <br/><br/>

            With a well-connected network across sectors such as <b>retail, IT, fashion, hospitality, telecom, AI and design </b>, Saumya helps Blu Parrot deliver top-tier talent solutions across India. 
        </p>

       </div>

       <div className="paragraph2">
       <p className="text">
       Driving a People-First Vision                 </p>
        </div>
        
        <div className="paragraph2" >
        {/* <p className="text"> Nitin Kalra’s Vision: Breathing Life into Data   </p> */}
        <p className="sub-text">
        Under Saumya’s leadership, BluParrot has positioned itself not just as a hiring partner, but as a <b> people-focused organization </b>that sees talent as a long-term investment. Her commitment to meaningful recruitment is shaping the way our clients build and scale their teams. 
       <br/>
        </p>
       </div>

       <div className="paragraph2">
            <p className="sub-text">
            <b>At BluParrot, we’re proud to have a CHRO who champions talent with purpose.</b> If you’re an organization looking to hire right and grow smart — Saumya Agarwal is ready to help you build a workforce that wins.
            </p>
        </div>

        


        <div className="time-container" >
            {/* <div className="author" >
            <FaPen />
                <p className="time"> Nitin Kalra </p>
            </div> */}
            <div className="author" >
                <FaCalendar />
                 <p className="time" >May 13, 2025</p>
            </div>
        </div>

      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog9;
