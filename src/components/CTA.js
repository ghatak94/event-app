export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container relative-z">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Make Your Celebration Unforgettable?
            </h2>
            <p className="cta-text">
              Contact Guruar Events today for a free consultation and bespoke event planning in Kalyan.
            </p>
            <div className="cta-buttons">
              <a href="tel:09619801373" className="btn btn-white text-primary flex-center">
                <span className="material-symbols-outlined icon">call</span>
                Call Now
              </a>
              <a href="#cta" className="btn btn-outline-white flex-center">
                Request a Quote
              </a>
            </div>
          </div>
          <div className="cta-image-wrapper">
            <div className="cta-image-container">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" alt="Joyful celebration detail" className="cta-img" />
              <div className="cta-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
