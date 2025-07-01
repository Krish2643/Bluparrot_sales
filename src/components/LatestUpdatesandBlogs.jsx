import React from "react";
import { Link } from "react-router-dom";
import styles from "./LatestUpdatesandBlogs.module.css";
import Blog1 from '../assets/Blogs/blog-1.png'
import Blog2 from '../assets/Blogs/blog-2_1.jpg'
import Blog3 from '../assets/Blogs/blog-3.png'
import Blog4 from '../assets/Blogs/blog-4.jpg'
import Blog5 from '../assets/Blogs/blog-5.jpg'

const LatestUpdatesandBlogs = () => {
  const cards = [
    
    {
        id: 1,
        image: Blog2,
        title: "Data is Like Air and AI is the Breath that Powers Innovation",
        description: "In the digital age, data has become the invisible force driving every decision, innovation and breakthrough. Much like air, it surrounds us—unseen yet essential for...",
    },
    {
        id: 3,
        image: Blog3,
        title: "Blu Parrot Forges Powerful Partnership with Bright ...",
        description: "Blu Parrot is proud to announce a solution partnership with Bright Data, the world's #1 public web data platform. This collaboration marks a significant step forward in Blu...",
    },
        {
          id: 5,
          image: Blog5,
          title: "Exploring Agentic AI Systems ",
          description: "AI Agents are systems that independently accomplish tasks on your behalf. These agents adapt to feedback from their surroundings, optimizing their...",
        }
    
    
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Updates & Insights</h1>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={card.image} alt="Business person working" />
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {/* <Link to={`/blogs/${card.id}`}> */}
                <button className={styles.exploreButton}>
                  Explore Now →
                </button>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdatesandBlogs;