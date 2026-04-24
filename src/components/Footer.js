'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">GuruarEvents</h3>
            <p className="footer-desc">
              Crafting extraordinary celebrations with meticulous attention to detail and a touch of luxury.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="material-symbols-outlined">thumb_up</span>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <span className="material-symbols-outlined">push_pin</span>
              </a>
            </div>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Our Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonials">Testimonials</a>
            </div>
          </div>
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <p className="contact-title">Office</p>
                  <p className="contact-subtitle">Kalyan West, Maharashtra 421301</p>
                </div>
              </li>
              <li>
                <span className="material-symbols-outlined text-primary">phone</span>
                <div>
                  <p className="contact-title">Phone</p>
                  <p className="contact-subtitle"><a href="tel:09619801373">09619801373</a></p>
                </div>
              </li>
              <li>
                <span className="material-symbols-outlined text-primary">mail</span>
                <div>
                  <p className="contact-title">Email</p>
                  <p className="contact-subtitle"><a href="mailto:hello@guruarevents.com">hello@guruarevents.com</a></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-desc" style={{ marginBottom: '1rem' }}>
              Subscribe for party inspiration and exclusive offers.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Guruar Events. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
