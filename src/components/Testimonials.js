'use client';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Pooja Rajpoot",
    type: "Theme Birthday",
    text: "Fabulous work by Guru Art & Events! They made our celebration truly special with their creative ideas and precision. Very happy with the results!",
    initial: "P",
    color: "primary"
  },
  {
    name: "Rahul Sharma",
    type: "Baby Shower",
    text: "Excellent experience! The team is very professional and precise. The baby shower decoration was exactly what we envisioned.",
    initial: "R",
    color: "secondary"
  },
  {
    name: "Sneha Gupta",
    type: "Children's Party",
    text: "Best event organizers in Kalyan! Their attention to detail and ability to customize according to our inputs is amazing.",
    initial: "S",
    color: "primary"
  },
  {
    name: "Amit Kumar",
    type: "First Birthday",
    text: "Highly satisfied with their services. They are very creative and professional. Our daughter's birthday was magical.",
    initial: "A",
    color: "secondary"
  },
  {
    name: "Meera Deshmukh",
    type: "Anniversary",
    text: "Precise work and great hosting. They understand the client's vision and bring it to life beautifully.",
    initial: "M",
    color: "primary"
  },
  {
    name: "Karan Singh",
    type: "Special Event",
    text: "Professional, creative, and fab work! Highly recommended for any theme-based events in Kalyan.",
    initial: "K",
    color: "secondary"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // Scroll every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = activeIndex === 0 ? reviews.slice(0, 3) : reviews.slice(3, 6);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Happy Families Say</h2>
          <p className="section-subtitle">Real feedback from our top-rated Google & Justdial reviews for <strong>Guruartevents</strong>.</p>
        </div>
        
        <div className="testimonials-slider-container">
          <div className="testimonials-grid fade-in-active">
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
              aria-label="Set 1"
            ></button>
            <button 
              className={`dot ${activeIndex === 1 ? 'active' : ''}`} 
              onClick={() => setActiveIndex(1)}
              aria-label="Set 2"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}
