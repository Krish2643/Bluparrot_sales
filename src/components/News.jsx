import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import { Link } from "react-router-dom";

const Newsroom = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://bluparrot.in:8000/get_news_bp/"); // API call
        setNewsItems(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!newsItems.length) {
    return <p>No news available</p>;
  }

  return (
    <div>
      <div style={{ backgroundColor: '#f0a623', height: '400px' }}></div>
      <div className="overlay"></div>
      <section className="newsroom-section">
        <div className="Button" >
          <h2>Newsroom: Data Science & AI</h2>
          <div>
            <button onClick={prevSlide} className="slider-btn left">
              &#8249;
            </button>
            <button onClick={nextSlide} className="slider-btn right">
              &#8250;
            </button>
          </div>
        </div>

        <div className="newsroom-grid">
          {/* Large news item */}
          <div
            className="news-item-large"
            style={{
              backgroundImage: `linear-gradient(
                rgb(244 238 238 / 2%), rgb(0 0 0 / 90%)), url(${newsItems[currentIndex]?.image_URL})`,
            }}
          >
            <div className="news-content">
              <p>{newsItems[currentIndex]?.title}</p>
              <a href={newsItems[currentIndex]?.Link} target="_blank" rel="noopener noreferrer">
              <span style={{fontWeight:'24px', marginRight:'5px'}}>→</span><p>Read More</p>
              </a>
            </div>
          </div>

          {/* Small news items */}
          <div className="news-item-small-container">
            {newsItems[currentIndex + 1] && (
              <div
                className="news-item-small"
                style={{
                  backgroundImage: `linear-gradient(
                 rgb(244 238 238 / 2%), rgb(0 0 0 / 90%)),
                url(${newsItems[currentIndex + 1]?.image_URL})`,
                  
                }}
              >
                <div className="news-content">
                  <p>{newsItems[currentIndex + 1]?.title}</p>
                  <a href={newsItems[currentIndex + 1]?.Link} target="_blank" rel="noopener noreferrer">
                  <span style={{fontWeight:'24px', marginRight:'5px'}}>→</span> <p>Read More</p>
                  </a>
                </div>
              </div>
            )}

            {newsItems[currentIndex + 2] && (
              <div
                className="news-item-small"
                style={{
                  backgroundImage: `linear-gradient(
                    rgb(244 238 238 / 2%), rgb(0 0 0 / 90%)),url(${newsItems[currentIndex + 2]?.image_URL})`,
                }}
              >
                <div className="news-content">
                  <p>{newsItems[currentIndex + 2]?.title}</p>
                  <a href={newsItems[currentIndex + 2]?.Link} target="_blank" rel="noopener noreferrer">
                  <span style={{fontWeight:'24px', marginRight:'5px', textDecoration:'none'}}>→</span><p>Read More</p>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="see-more-btn"><Link style={{textDecoration:"none", color:'black'}} to="/News">See More</Link></button>
      </section>
    </div>
  );
};

export default Newsroom;
