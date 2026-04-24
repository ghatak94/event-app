export default function Portfolio() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
      alt: "Luxury baby shower decoration"
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
      alt: "Bespoke birthday balloon backdrop"
    },
    {
      src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=800&auto=format&fit=crop",
      alt: "First birthday marquee sign"
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      alt: "Thematic birthday setup"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
      alt: "Children's party magic show"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      alt: "Sophisticated anniversary stage"
    },
    {
      src: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop",
      alt: "Vibrant floral decor from recent event"
    },
    {
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop",
      alt: "Elegant lighting setup"
    },
    {
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
      alt: "Bespoke table centerpiece"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Recent Celebrations</h2>
          <p className="section-subtitle">A glimpse into the magical moments we&apos;ve created for our clients, including images from our happy reviewers.</p>
        </div>
        <div className="portfolio-grid">
          {images.map((img, idx) => (
            <div key={idx} className="portfolio-item">
              <img src={img.src} alt={img.alt} className="portfolio-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
