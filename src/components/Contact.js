'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', eventType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title text-primary">Get in Touch</h1>
            <p className="section-subtitle">
              We&apos;re here to help! Let&apos;s start planning your next big moment together. We&apos;re here to listen, plan, and celebrate.
            </p>
          </div>
        </div>
        <div className="hero-background-overlay"></div>
      </section>

      {/* Contact & Inquiry Section */}
      <section className="contact-main" id="contact">
        <div className="container">
          <div className="contact-grid-wrapper">
            <div className="contact-container">
              {/* Left Column: Contact Info */}
              <div className="contact-info-panel">
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon-wrapper bg-purple-light">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <h4 className="contact-item-title">Visit Us</h4>
                      <p className="contact-item-text">
                        Murbad Rd, near Purnima Stop, Bhavani Rd, Kalyan, Maharashtra 421301
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper bg-pink-light">
                      <span className="material-symbols-outlined text-secondary">call</span>
                    </div>
                    <div>
                      <h4 className="contact-item-title">Call Us</h4>
                      <p className="contact-item-text">
                        <a href="tel:09619801373">09619801373</a>
                      </p>
                      <p className="contact-item-subtext">Mon-Sat, 9am - 7pm</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon-wrapper bg-yellow-light">
                      <span className="material-symbols-outlined text-tertiary">mail</span>
                    </div>
                    <div>
                      <h4 className="contact-item-title">Email Us</h4>
                      <p className="contact-item-text">
                        <a href="mailto:hello@guruarevents.com">hello@guruarevents.com</a>
                      </p>
                      <p className="contact-item-subtext">We reply within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="contact-map">
                  <iframe
                    src="https://maps.google.com/maps?q=Murbad%20Rd,%20near%20Purnima%20Stop,%20Bhavani%20Rd,%20Kalyan,%20Maharashtra%20421301&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Guruar Events Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Inquiry Form (Glassmorphism) */}
              <div className="contact-form-panel">
                <h3 className="form-title">Plan an Inquiry</h3>
                {status === 'success' ? (
                  <div className="form-success-message">
                    <span className="material-symbols-outlined">check_circle</span>
                    <p>Thank you! Your inquiry has been sent successfully. We will get back to you shortly.</p>
                    <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another Inquiry</button>
                  </div>
                ) : (
                  <>
                    <p className="form-subtitle">
                      Fill out the details below, and our curation team will reach out.
                    </p>

                    <form className="inquiry-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter your full name" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            placeholder="Enter your phone number" 
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <select 
                          id="eventType" 
                          required 
                          value={formData.eventType}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select an event
                          </option>
                          <option value="birthday">Birthday Party</option>
                          <option value="babyshower">Baby Shower</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="other">Other Celebration</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Event Details</label>
                        <textarea
                          id="message"
                          rows="5"
                          placeholder="Tell us a little bit about what you have in mind..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      {status === 'error' && (
                        <p className="form-error-text">Something went wrong. Please try again or call us directly.</p>
                      )}

                      <button 
                        type="submit" 
                        className={`btn btn-primary form-submit-btn ${status === 'loading' ? 'loading' : ''}`}
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                        <span className="material-symbols-outlined icon-right">send</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
