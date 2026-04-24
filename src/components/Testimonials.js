'use client';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Anjali M.",
    type: "First Birthday",
    text: "Guru Art & Events made my daughter's first birthday absolutely magical. The unicorn theme was executed flawlessly. Highly recommend!",
    initial: "A",
    color: "primary"
  },
  {
    name: "Rahul & Sneha",
    type: "Baby Shower",
    text: "Our baby shower was everything we dreamed of and more. The pastel decor was so elegant and chic. Thank you for a wonderful day!",
    initial: "R",
    color: "secondary"
  },
  {
    name: "Priya K.",
    type: "25th Anniversary",
    text: "Celebrating our 25th anniversary with Guru Art & Events was the best decision. The floral arrangements and lighting were breathtaking.",
    initial: "P",
    color: "primary"
  },
  {
    name: "Pooja R.",
    type: "Theme Birthday",
    text: "Absolutely fabulous work! They made my son's birthday party so creative and precise. The balloon decor was top-notch. Very happy!",
    initial: "P",
    color: "secondary"
  },
  {
    name: "Amit S.",
    type: "Baby Shower",
    text: "Professional and creative! They handled our baby shower decoration with so much elegance. The hosting was also great.",
    initial: "A",
    color: "primary"
  },
  {
    name: "Karan M.",
    type: "Surprise Party",
    text: "The best event management team! They turned a simple space into a magical one. Their attention to detail is amazing.",
    initial: "K",
    color: "secondary"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = activeIndex === 0 ? reviews.slice(0, 3) : reviews.slice(3, 6);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Happy Families Say</h2>
          <p className="section-subtitle">Real feedback from our Google and Justdial reviews.</p>
        </div>
        
        <div className="testimonials-slider-container">
          <div className={`testimonials-grid fade-in-active`}>
            {visibleReviews.map((review, idx) => (
              <div key={idx} className={`testimonial-card border-${review.color}`}>
                <div className={`quote-icon text-${review.color}`}>&quot;</div>
                <p className="testimonial-text">&quot;{review.text}&quot;</p>
                <div className="testimonial-author">
                  <div className={`author-avatar bg-${review.color} text-${review.color}`}>{review.initial}</div>
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <p className={`text-${review.color === 'primary' ? 'secondary' : 'primary'}`}>{review.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            <button 
              className={`dot ${activeIndex === 0 ? 'active' : ''}`} 
              onClick={() => setActiveIndex(0)}
            ></button>
            <button 
              className={`dot ${activeIndex === 1 ? 'active' : ''}`} 
              onClick={() => setActiveIndex(1)}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
