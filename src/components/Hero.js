export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Event Planner in Kalyan
          </h1>
          <p className="hero-text">
            We design unforgettable weddings, corporate events & celebrations—handled end-to-end so you can enjoy stress-free moments.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/919619801373" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Get Free Quote on WhatsApp
            </a>
            <a href="#contact" className="btn btn-secondary">
              Check Availability
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src="/hero.png" alt="Vibrant balloon decor" className="hero-img" />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="floating-accent">
            <p className="accent-number">50+</p>
            <p className="accent-text">Events Curated in Kalyan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
