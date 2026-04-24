export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Making Every <br />
            <span className="text-gradient">Celebration</span> Special
          </h1>
          <p className="hero-text">
            Bespoke event planning in Kalyan. From magical birthdays to elegant baby showers, we turn your dreams into unforgettable memories.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View Our Work
            </a>
            <a href="#cta" className="btn btn-secondary">
              Book Your Event
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src="/hero.png" alt="Vibrant balloon decor" className="hero-img" />
            <div className="hero-image-overlay"></div>
          </div>
          <div className="floating-accent">
            <p className="accent-number">500+</p>
            <p className="accent-text">Events Curated in Kalyan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
