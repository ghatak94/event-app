export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "palette",
      title: "Personalized Event Planning",
      description: "Every event is customized to your vision and budget. We don't believe in one-size-fits-all—we believe in uniquely yours."
    },
    {
      icon: "groups",
      title: "Experienced Team",
      description: "Our professionals ensure smooth coordination from start to finish, handling every detail with precision and care."
    },
    {
      icon: "hub",
      title: "Vendor Network",
      description: "Access to our curated network of trusted decorators, caterers, and premium venues to ensure quality at every step."
    },
    {
      icon: "auto_awesome",
      title: "Stress-Free Execution",
      description: "You enjoy the event—we handle everything else. From setup to cleanup, we manage the chaos so you don't have to."
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="text-gradient">Guruartevents?</span></h2>
          <p className="section-subtitle">We don&apos;t just plan events; we create experiences that last a lifetime.</p>
        </div>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card">
              <div className="why-icon-wrapper">
                <span className="material-symbols-outlined why-icon">{reason.icon}</span>
              </div>
              <div className="why-content">
                <h3 className="why-title">{reason.title}</h3>
                <p className="why-text">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
