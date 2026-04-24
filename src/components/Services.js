export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">We bring a touch of luxury and meticulous planning to every celebration, big or small.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-bg-accent primary"></div>
            <span className="material-symbols-outlined service-icon text-primary">cake</span>
            <h3 className="service-title">Birthday Parties</h3>
            <p className="service-desc">Bespoke themes and stunning balloon artistry for all ages.</p>
          </div>
          <div className="service-card">
            <div className="service-bg-accent secondary"></div>
            <span className="material-symbols-outlined service-icon text-secondary">child_care</span>
            <h3 className="service-title">Baby Showers</h3>
            <p className="service-desc">Elegant, pastel-perfect setups to welcome your little one.</p>
          </div>
          <div className="service-card">
            <div className="service-bg-accent tertiary"></div>
            <span className="material-symbols-outlined service-icon text-tertiary">celebration</span>
            <h3 className="service-title">Anniversaries</h3>
            <p className="service-desc">Romantic, sophisticated decor to celebrate your milestone.</p>
          </div>
          <div className="service-card">
            <div className="service-bg-accent primary"></div>
            <span className="material-symbols-outlined service-icon text-primary">toys</span>
            <h3 className="service-title">Children&apos;s Party</h3>
            <p className="service-desc">Fun, vibrant environments designed to spark joy and imagination.</p>
          </div>
          <div className="service-card md-span-2 lg-span-1">
            <div className="service-bg-accent secondary"></div>
            <span className="material-symbols-outlined service-icon text-secondary">diversity_3</span>
            <h3 className="service-title">Theme Parties & Magic</h3>
            <p className="service-desc">Immersive thematic setups paired with engaging entertainment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
