import React from 'react';
import './TeamSection.css';
import Chirag from "../assets/Team/Chirag.png";
import Rohit from "../assets/Team/Rohit.png";
import saha_nawas from "../assets/Team/Shah nawaz.png";
import priyanshi from "../assets/Team/Priyanshi.png";
import nimrit from "../assets/Team/Nirmit.png";
import Krish from "../assets/Team/Krish (1).png";
import Parshant from "../assets/Team/Prashant.png";
import Harpreet from "../assets/Team/Harpreet.png";
import Sesh from "../assets/Team/sesh sukh.png";
import Rachit from "../assets/Team/Rachit.png";
import Koji from "../assets/Team/Koji.png";
import Jagjet from "../assets/Team/Jagjit.png";
import Divyanshi from "../assets/Team/Divyanshi.png";
import Rahul from "../assets/Team/Rahul.png";
import Imran from "../assets/Team/Imraan.png";
import Abhisek from "../assets/Team/Abhisek.png";
import Alok from "../assets/Team/Alok.png";
import Daisy from "../assets/Team/Daisy.png";
import Deepa from "../assets/Team/Deepa.png";
import Deepak from "../assets/Team/Deepak.png";
import Nandini from "../assets/Team/Nandini.png";
import Ravi from "../assets/Team/Ravi.png";
import Vikrant from "../assets/Team/Vikrant.jpg";
import Simran from '../assets/Team/Simran.png'
import Ansh from '../assets/Team/Ansh.png'
import Ajit from '../assets/Team/Ajit.png'
import Ankit from '../assets/Team/Ankit.png'
import Arbaz from '../assets/Team/Arbaz.png'
import Badal from '../assets/Team/Badal.png'
import Gautam from '../assets/Team/Gautam.png'
import Kareem from '../assets/Team/KareemAshraf.png'
import Rajan from '../assets/Team/Rajan.png'
import Ramashish from '../assets/Team/Ramashish.png'
import Sakshi from '../assets/Team/sakshi.png'
import Satyendra from '../assets/Team/Satyendra.png'
import Sanjeev from '../assets/Team/Sanjeev.png'
import Amit from '../assets/Team/Amit.jpeg'
import AnuChadha from '../assets/Team/anuChadha.png'

const teamData = {
  advisory: [
    { name: 'Sesh Sukhdeo', imgSrc: Sesh },
    { name: 'Rachit Mathur',imgSrc: Rachit },
    { name: 'Koji Murata', imgSrc: Koji },
    {name: 'Anu Chadha', imgSrc: AnuChadha}
  ],
  departmentHeads: [
    { name: 'Chirag Thakur', role: 'Director - Technology & Operations', imgSrc: Chirag },
    { name: 'Jagjit kaur', role: 'Human Resource Manager', imgSrc: Jagjet },
    { name: 'Divyanshi', role: 'Content & Creative Head', imgSrc: Divyanshi },
    { name: 'Rahul', role: 'Cybersecurity Expert ', imgSrc: Rahul },


  ],
  Social_Media_Marketing:[
    { name: 'Simran', role: 'Social Media Manager', imgSrc: Simran },
    { name: 'Divyanshi', role: 'UI/UX Designer', imgSrc: Divyanshi },

  ],
  technology: [
    { name: 'Chirag Thakur', role: 'Director - Technology & Operations ', imgSrc: Chirag },
    { name: 'Nirmit', role: 'AI ML Expert', imgSrc: nimrit },
    { name: 'Imran', role: 'Data Scientist', imgSrc: Imran },
    { name: 'Rahul', role: 'Cybersecurity Expert ', imgSrc: Rahul },
    { name: 'Rohit', role: 'Full-Stack Developer', imgSrc: Rohit },
    { name: 'Krish', role: 'Full-Stack Developer', imgSrc: Krish },
    { name: 'Ravi', role: 'Data Analyst', imgSrc: Ravi },
    { name: 'Ansh', role: 'AI ML Expert', imgSrc: Ansh },

    { name: 'Harpreet', role: 'Back-end Lead', imgSrc: Harpreet },
    { name: 'Priyanshi', role: 'Back-end Lead', imgSrc: priyanshi },
    { name: 'Prashant', role: 'Back-end Developer', imgSrc: Parshant },
    { name: 'Saha Nawaz', role: 'Back-end Developer', imgSrc: saha_nawas },

    { name: 'Vikrant', role: 'Data Analyst', imgSrc: Vikrant },
    { name: 'Abhisek', role: 'Data Analyst', imgSrc: Abhisek },
    { name: 'Alok', role: 'Data Analyst', imgSrc: Alok },
    
    { name: 'Daisy', role: 'Data Analyst', imgSrc: Daisy },
    { name: 'Deepa', role: 'Data Analyst', imgSrc: Deepa },
    { name: 'Deepak', role: 'Data Analyst', imgSrc: Deepak },
   
    { name: 'Nandini', role: 'Data Analyst', imgSrc: Nandini },
    { name: 'Sanjeev', role: 'Data Analyst', imgSrc: Sanjeev },
    { name: 'Ajit', role: 'Data Analyst', imgSrc: Ajit },
    { name: 'Ankit', role: 'Data Analyst', imgSrc: Ankit },
    { name: 'Arbaz', role: 'Data Analyst', imgSrc: Arbaz },
    { name: 'Badal', role: 'Data Analyst', imgSrc: Badal },
    { name: 'Gautam', role: 'Data Analyst', imgSrc: Gautam },
    { name: 'Kareem', role: 'Data Analyst', imgSrc: Kareem },
    { name: 'Rajan', role: 'Data Analyst', imgSrc: Rajan },
    { name: 'Ramashish', role: 'Data Analyst', imgSrc: Ramashish },
    { name: 'Sakshi', role: 'Data Analyst', imgSrc: Sakshi },
    { name: 'Satyendra', role: 'Data Analyst', imgSrc: Satyendra },
    { name: 'Amit', role: 'Full Stack Developer', imgSrc: Amit },
   
  ],
};

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container advisory-team">
        <h2>#Advisory Board</h2>
        <div className="team-grid Advisory">
          {teamData.advisory.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.imgSrc} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-container department-heads">
        <h2>#Department Heads</h2>
        <div className="team-grid">
          {teamData.departmentHeads.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.imgSrc} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-container technology-team">
        <h2>#Technology Team</h2>
        <div className="team-grid">
          {teamData.technology.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.imgSrc} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="team-container Social_media">
        <h2>#Social Media Marketing</h2>
        <div className="team-grid">
          {teamData.Social_Media_Marketing.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.imgSrc} alt={member.name} loading="lazy" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
