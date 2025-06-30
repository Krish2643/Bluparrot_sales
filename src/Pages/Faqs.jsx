import React, { useState } from 'react';
import './Faqs.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should Japanese companies expand to India with BluParrot? ",
      answer: "BluParrot simplifies expansion with expert talent acquisition, infrastructure support and regulatory compliance, ensuring a seamless entry into India's tech ecosystem. "
    },
    {
      question: "What kind of talent does BluParrot provide for Japanese companies?",
      answer: "We offer Japanese-speaking AI, ML and software engineers through our exclusive database, Arjunna, to support innovation and growth"
    },
    {
      question: "How does BluParrot assist in setting up a Global Capability Center (GCC) in India? ",
      answer: "We provide end-to-end GCC setup, including office space, IT infrastructure, legal compliance and operational support for smooth functioning"
    },
    {
      question: "What regulatory and compliance support does BluParrot offer?",
      answer: "BluParrot handles business registration, tax compliance, labor laws and data security, ensuring hassle-free operations for Japanese enterprises"
    },
    {
      question: "How is BluParrot different from other consulting firms? ",
      answer: "Unlike traditional consultants, we offer hands-on support in talent acquisition, infrastructure and operations, bridging Japan’s business needs with India's tech ecosystem. "
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item"
            >
              <button
                className="faq-question-button"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <svg 
                  className={`faq-arrow ${openIndex === index ? 'rotate' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;