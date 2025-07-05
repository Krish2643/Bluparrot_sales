import React from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Girl from "./Images/Girl.png";
import Right from "./Images/Right.png";
import { useState, useEffect } from "react";
import Cube from "./Images/cube-in-circle.gif";
import Data from './Images/Data_AI.png'
import icon1 from "./Images/barcode-read_8770739 1.png";
import icon2 from "./Images/function-process_14530005 1.png";
import icon3 from "./Images/hands-usd_9795531_1.png";
import CloudeIcon from "./Images/cloud-connect_15594424.gif";
import Security from "./Images/protection_17489699.gif";
import World_png from "./Images/Home_bg_world.png";
import Digital from "./Images/Group1.png";
import Cloude from "./Images/Group_6.png";
import REal_icon from "./Images/RealEstate.png";
import Data_as from "./Images/Group_8.png";
import EdTech from "./Images/EdTech.png";
import Sports from "./Images/Sports.png";
import Automobile from "./Images/Automobile.png";
import Recurtment from "./Images/Recurtment.png";
import medical from "./Images/doctor_15863653 1.png";
import { FaArrowRightLong } from "react-icons/fa6";

import LatestUpdatesandBlogs from "./LatestUpdatesandBlogs.jsx";

import Navbar from "./Navbar.jsx";
import Bright from '../assets/Sponser/Bright.png'
import Delight from '../assets/Sponser/Delight.png'
import SHRM_N from '../assets/Sponser/SHRM.png'
import Instalimb from '../assets/Sponser/Instalimb.png'
import Future_fo from '../assets/Sponser/future_fo.png'
import Scottish from '../assets/Sponser/Scottish.png'
import Givery from '../assets/Sponser/Givery.png'
import Suzuki from '../assets/Sponser/Suzuki.png'
import Zoomm from '../assets/Sponser/zoom.png'
import Edureka from '../assets/Sponser/edureka.png'
import Bajaj from '../assets/Sponser/Bajaj.png'
import BackgroundVideo from "./Images/573258_Business_Stock_3840x2160.mp4"; // Import the video file
import { useNavigate } from "react-router-dom";
const coreBusinessData = [
  {
    id:1,
    title: "AI in Legal",
    description: [
      "An AI-powered platform that streamlines legal document review by providing concise case summaries and enabling users to ask specific, case-related questions after uploading a file.", "An AI-driven tool that generates customized contracts based on user input, allowing interactive edits to specific clauses or terms to ensure the final document meets precise requirements."
    ],
    BackgroundImage: Digital,
    impact: "Enhancing customer experience, operational efficiency, decision-making, and internal processes with AI-driven real-time insights",
    path: "/Vertical",
    links: ['www.google.com', 'www.google.com'],
    icon: Cube,
    link: [{name: "Case Summary", url: "http://40.71.186.18:7000/"}, 
      {name: "Contract Draft", url: "http://20.193.128.47:5000/"}]
  },
  {
    id:2,
    title: "AI in Real Estate",
    description: [
      "A property price prediction model estimates property values based on various factors like location, features, market trends, and images. It combines structured data, textual descriptions, and visual data to predict prices more accurately"
      // , `Username:test_user_1, password: Bluparrot123`  
    ],
    BackgroundImage: Data_as,
    cred: [{'UserName': 'test_user_1', 'Password': 'Bluparrot123'}],
    impact: "Empowering clients to enhance their marketing strategies and business decisions with data-driven insights.",
    path: "/Data_AI",
    icon: Data, // Replace with actual path,
    link: [{name: "Inferred Theorem", url: "http://130.250.171.74/"}, 
      ]
  },
  {
    id:3,
    title: "AI in ESG",
    description: [
      "We deliver global open-source datasets and publicly available data to train AI models, analyze trends, and extract insights for strategic decision-making.","Our OSINT services enable sentiment analysis, pattern recognition, and deep analysis of open-source media, ensuring GDPR compliance throughout. "
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "ESG Datalake", url: "https://www.worldesgdatalake.com"}, 
      ]
  },
  {
    id:7,
    title: "AI in Recruitment",
    description: [
      "AI-Driven Recruitment Marketplace: Shiftz connects companies with a network of verified freelance recruiters, enabling faster and more efficient hiring through automated candidate screening, smart job matching, and integrated video interviews—all within a single platform.", "Flexible, Scalable Hiring Solution: Designed for startups and growing teams, Shiftz offers on-demand recruitment support, making it easy to scale hiring without the overhead of a full HR team."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "Shiftz", url: "https://www.Shiftz.in"}, 
      {name: "Recruiit", url: "https://www.Shiftz.in"}
      ]
  },
  {
    id:8,
    title: "AI in Operations",
    description: [
      "Structured Role Management: The system streamlines project workflows by assigning clear roles—Admins manage access and templates, Managers handle task planning and team performance, while Team Members focus on execution.", "Productivity-Driven Features: Built-in KPIs, reusable templates, calendar integration, and activity tracking help improve accountability, reduce delays, and standardize project execution across teams."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "Blusunday", url: "https://www.blusunday.com"}, 
      ]
  },
  {
    id:9,
    title: "AI in Open Source Intelligence",
    description: [
      "Social media listening platform uses google and twitter api to fetch real time latest news and tweets for a specific keyword entered by the user for dubai region.", "Ai driven sentiment analysis, trending topics extraction and top influencers, hashtags,  along with Ai generated strategic insights; sentiment score with emotion of the tweet."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "Dashboard", url: "http://172.178.60.98:8030/"}, 
      ]
  },
  {
    id:9,
    title: "AI in Air Quality Management",
    description: [
      "Data Pipeline and SQL Integration: The air quality data, along with pollutant levels, is extracted from Excel files and automatically pushed into a SQL database through an ETL pipeline. This ensures the data is cleaned, structured, and stored efficiently for querying and analysis.",
      //  "UserName: admin@uae.gov, password: Admin@123"
    ],
    cred: [{'UserName': 'admin@uae.gov', 'password': 'Admin@123'}],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "MOCCAE", url: "https://dashboard-uae.netlify.app/"}, 
      ]
  },
  {
    id:12,
    title: "AI in Education",
    description: [
      "Internship and Scholarship Applications:Kareer offers a centralized platform for students to find and apply for internships and scholarships. Smart filters and personalized recommendations help match opportunities to their skills and goals.", "Mentorship and Guidance: Students can connect with industry professionals for one-on-one mentorship. This provides career advice, networking support, and insights to make better career decisions."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    // link: [{name: "Dashboard", url: "http://172.178.60.98:8030/"}, 
    //   ]
  },
  {
    id:13,
    title: "Bhagwat Gita",
    description: [
      "A user calls feeling overwhelmed by work pressure and indecision; Aishwarya listens empathetically and shares a Gita shloka about letting go of attachment to outcomes, helping the user feel understood and calm.", "A user expresses sadness over a personal loss; Aishwarya validates their emotions and offers a relevant Gita shloka on acceptance, fostering a sense of comfort and connection."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "+19033453472", url: ""}, 
      ]
  },
  {
    id:13,
    title: "Samrat Motors Agent:",
    description: [
      "A user inquires about the Yamaha R15; Ayushi clarifies the model version, enthusiastically explains its features, and books a test ride at Samrat Superbikes for a confirmed date.", "A user expresses interest in an FZ bike but can’t visit soon; Ayushi provides detailed model information and sends product details via WhatsApp, ensuring the user stays engaged."
    ],
    BackgroundImage: Cloude,
    impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
    path: "/Cloud_Services",
    icon: CloudeIcon,
    link: [{name: "+17373246081", url: ""}, 
      ]
  },
  // {
  //   id:14,
  //   title: "AI in Education",
  //   description: [
  //     "Internship and Scholarship Applications:Kareer offers a centralized platform for students to find and apply for internships and scholarships. Smart filters and personalized recommendations help match opportunities to their skills and goals.", "Mentorship and Guidance: Students can connect with industry professionals for one-on-one mentorship. This provides career advice, networking support, and insights to make better career decisions."
  //   ],
  //   BackgroundImage: Cloude,
  //   impact: "Achieve enhanced scalability, reduced operational costs, and improved cloud performance, while ensuring security and business continuity across all major cloud platforms.",
  //   path: "/Cloud_Services",
  //   icon: CloudeIcon,
  //   // link: [{name: "Dashboard", url: "http://172.178.60.98:8030/"}, 
  //   //   ]
  // },
 
];
const statsData = [
  { title: "Team Size", value: "100+" },
  { title: "Nationalities", value: "20+" },
  { title: "AI Models Delivered", value: "100+" },
  { title: "Continents", value: "4+" },
  { title: "AI Products", value: "10+" },
  { title: "Successful Projects in India, US, MENA, and APAC Regions", value: "50+" },
  { title: "Global Capability Centers Advisory for Digital Transformation and Innovation", value: "10+" },
  { title: "IoT Automation Flagship Solutions", value: "20+" },
];
const industries = [
  {
    icon: icon1,  // Replace with the actual icon path or SVG
    title: 'FMCG',
    description: `Designed AI models for risk mitigation and pricing strategies using open-source publicly available data. `,
    description1: `Provided an AI guiding tool that empowered the client to refine their pricing strategies, enhancing their market positioning and profitability. `,
  },
  {
    icon: icon3,
    title: 'Fintech',
    description: `Developed cross-selling, up-selling, lead scoring, RAG risk assessment models, and a fraud analytics module for the largest Fintech company. `,
    description1: `Significantly increased sales while streamlining the operational process, resulting in substantial business growth. `,
  },
  {
    icon: icon2,
    title: 'Manufacturing',
    description: `Automated the entire manufacturing process using IoT automation, including smart assets and smart mobility solutions. `,
    description1: `Boosted operational efficiency, reducing downtime and increasing overall productivity. `,
  },
  {
    icon: REal_icon,
    title: 'Real Estate',
    description: `Created LLM based AI models to capture and analyze KPIs from publicly available web data, driving informed real-estate decision-making. `,
    description1: `Improved operational processes and significantly enhanced customer experience, leading to better business outcomes. `,
  },
  {
    icon: Automobile,
    title: 'Automobiles',
    description: `Designed a look-alike model leveraging open-source data to identify new potential prospects.  `,
    description1: `Achieved a significant increase in ROI on performance marketing campaigns, driving growth and revenue. `,
  },
  {
    icon: EdTech,
    title: 'Ed-Tech',
    description: `Developed AI models to analyze online calls, predict conversion likelihood, assess sentiment, tone, and confidence scores, and recommend next steps. `,
    description1: `Substantially increased conversion rates, contributing to the client’s growth and success in the Ed-Tech sector. `,
  },
  {
    icon: Sports,
    title: 'Sports',
    description: `Designed an AI-based Sports Index to demonstrate how increased sports expenditure correlates with economic growth by analyzing internal and publicly available data.  `,
    description1: `Served as a critical tool in driving data-driven decisions, supporting the growth and development of the sports sector. `,
  },
  {
    icon: Recurtment,
    title: 'Recruitment',
    description: `Developed an AI-driven candidate screening platform that provides AI matching scores and coordinates next steps in the hiring process. `,
    description1: `Significantly increased operational efficiency, enabling faster and more effective hiring decisions. `,
  },
  {
    icon: medical,
    title: 'Medical',
    description: `Designed an IoT-driven AI platform for real-time tracking and alerting of patients and doctors. `,
    description1: `Boosted operational efficiency, productivity, and performance, resulting in improved healthcare delivery and patient satisfaction. `,
  },
];

const logoData = [
  Bright,
  Delight,
  SHRM_N,
  Instalimb,
  Future_fo ,
  Scottish,
  Givery , 
  Suzuki ,
  Zoomm , 
  Edureka , 
  Bajaj ,
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};


const Navbar2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); 
  const [isAnimating, setIsAnimating] = useState(false); 
  const [animationClass, setAnimationClass] = useState('');
  const itemsPerPage = 3;

  const navigate = useNavigate();


 
  const totalSlides = Math.ceil(industries.length / itemsPerPage); // Calculate total number of slides

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    // Add any additional settings if needed
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 857,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  const new_settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Default number of slides visible
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      
    ],
  };

  return (
    <div className="Home-container">
      <Navbar/>
      <div className="Header">
        {/* Background Video */}
        <img src={World_png} alt="Background Image" className="background-image" loading="lazy" />
        <video className="background-video" autoPlay muted loop>
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        

        {/* Hero Section */}
        <section className="hero-section">
          <h1>
             <span className="highlight">Blu</span><span style={{ color: '#FBC726' }}> Parrot</span> AI Sandbox
          </h1>
          
          <p>Sandbox provides a platform to showcase all the AI based development done by Bluparrot </p>
        </section>
      </div>

      <div className="core-businesses">
        <h2>Industry-Specific AI Development</h2>
        <div className="business-cards-wrapper" >
        {coreBusinessData?.map((business, index)=>(
          <div key={index} className="business-card-containers" >
            <div className="business-card-content"  >
              <div className="business-card-header" >
             <img src={Cube} alt="" />
             <p className="heading" >{business?.title}</p>
              </div>
              <div className="business-card-points" > 
                <ul>
                  {business.description.map((item, ind)=> <li key={ind} >
                    {item}
                  </li>)}
                </ul>
              </div>

              {business?.cred && <div className="credentails" >        
                  {business?.cred?.map((item, ind)=> (
                    <div key={ind} >
                      <p>UserName: {item.UserName}</p> 
                      <p>Password: {item.password}</p>
                    </div>
                  ))}
              </div>}
                
            </div> 
            <div className="business-card-links" > 
               <p className="demo-link" >Demo Link</p>
               <div className="links" >
                {business?.link?.map((item, ind)=> <a href={item?.url} target="_blank"  className="live-link" key={ind} ><p>{item.name}</p>  <p className="arrow"  > <FaArrowRightLong />
 </p> </a> )}
               </div>
            </div>
         </div>
        ))}
        </div>
      
        {/* <div className="business-grid">
          {coreBusinessData.map((business, index) => (
            <div style={{ backgroundImage: `url(${business.BackgroundImage})` }} key={index} className="business-card card-${business.id}`">
              <div className="business-title">
                <img src={business.icon} alt={business.title} className="business-icon" loading="lazy" />
                <h3>{business.title}</h3>
              </div>

              <div>
                <ul>
                  {business.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div className={`impact-section impact-section-${business.id}`}>
                <h4>Demo Link</h4>
                <div className="impact-section-links" >
                  {business?.link?.map((link, idx) => {
                    console.log(link, "link");
                    return(
                      <div className="link-container" key={idx} >
                    <p>{link?.name} </p>
                    <a href={link?.url} target="_blank"  >Live Link</a>
                  </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}

        </div> */}
      </div>
      <div className="blu-parrot-today">
        <h2 style={{ textAlign: 'center' }}>
          <span className="highlight">BLU </span><span className="highlight1">PARROT</span> Today
        </h2>
        <div className="stats-grid">
          {statsData.map((item, index) => (
            <div key={index} className={`stats-card ${index>4 ? "stats-card2" : ""}`}>
              <p className='stats-title'>{item.title}</p>
              <p className={`stats-value`}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="client-partners-gap">
        <h3 className="clients-partners-title">Clients & Partners</h3>
        <Slider {...new_settings} className="logo-slider">
          {logoData.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Client ${index}`} loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="newsroom-container">
        {/* Contact Section */}
        <section className="Contact-section">
          <div style={{ padding: '0px', }} className="Contact-image">
            <img src={Girl} alt="Contact" loading="lazy" />
          </div>
          <div className="Contact-info">
            <h2>Turn your vision into reality with our expert guidance and seamless execution.</h2>
            <ul>
              <li style={{ alignItems: 'center', display: 'flex' }}><img style={{ marginRight: '20px' }} src={Right} alt="" loading="lazy" /> Reach Out to Us</li>
              <li style={{ alignItems: 'center', display: 'flex' }}><img style={{ marginRight: '20px' }} src={Right} alt="" loading="lazy"/>Consult with Our Technology Experts</li>
              <li style={{ alignItems: 'center', display: 'flex' }}><img style={{ marginRight: '20px' }} src={Right} alt="" loading="lazy"/>Get Cost Estimates & Start Implementation</li>
            </ul>
            <p style={{ marginTop: "50px", fontSize: '24px', fontWeight: 'bold', color: '#008D84' }}>We’re here to ensure 100% success!</p>
          </div>
        </section>
      </div>

    </div>

  );
};

export default Navbar2;