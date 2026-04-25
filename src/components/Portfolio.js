export default function Portfolio() {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipNiKLuImFRUh-rEIJlYyHcZMGVSeESE6-lW-TFs=s680-w680-h510-rw",
      alt: "Luxury baby shower decoration by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOfbP9LCUwak9ELb9DB1r1O3STgARAzhu1mZ2_1=s680-w680-h510-rw",
      alt: "Bespoke birthday balloon backdrop by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF2xrNS07YkvHmlXvfwGR76INvtky-cPqixAi8MKnP2bEaxM7V-F-F3zCXatJ3zdgAQFkb9JFWAnKUgWdxHt3p4Gyes3d-HLoY4MNaoOLd3d0zIC81M2WXkSsgGL5uqOuqQjJtC=s680-w680-h510-rw",
      alt: "First birthday marquee sign by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE7bV2CHyOYW8owvv_hiV7Kp7n1OQCul-af9QK9v82OG3D6FZINNnPDIiwtbuqrK-f3J-BU72KuF6WdZYpnf00VlZ8WbSHeRr_GbiWiQ9BegNOAkZkl4SnDl6bGUuFZIyLq6jFFOw=s680-w680-h510-rw",
      alt: "Thematic birthday setup by Guruartevents"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
      alt: "Children's party magic show by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGGrs_v0nsFS3vag2CS3tOYawzTlImUZvMT7QTEtYNpVx2cQyTVNcYskHCKusJmzbyLBQOsnEHAFvtb8pzlKhrEc6aAn2FUhSNGm-rAOQGvc9W-J63xc-hdDmz-P-CR5-NhoDuk=s680-w680-h510-rw",
      alt: "Sophisticated anniversary stage by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMiPd2Ow8bSBLUQmhlL_bDIXdQ04h67FiZRFXHv=s680-w680-h510-rw",
      alt: "Vibrant floral decor from recent Guruartevents event"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEjAphaKbRT-aylz9CFaMBcbyhfiTfjpB705hXh89dkJKrne0_ajGK9Lw7mL1qk6o6Xvn7pVkc_lVmWZb9s3SVq3NP8SfMLgLHV_VAK-f-IzFQdSa85vuPZdOVOG1yUyGS1M7pv=s680-w680-h510-rw",
      alt: "Elegant lighting setup by Guruartevents"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHswm3tIZnRDBcUx6IpIEdjZRFcVLhqeFjpC5txLlPavSo8-fGBU_3TeCL20v3H8_t-K9VE0sJuKHA-09DXfhYBrbSsD28Xxvk21igSJtAtutGSw6TN-nGIglbuhWQCI2Ws2Xh8=s680-w680-h510-rw ",
      alt: "Bespoke table centerpiece by Guruartevents"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Recent Celebrations</h2>
          <p className="section-subtitle">A collection of magical moments created by <strong>Guruartevents</strong>, including photos shared by our happy clients.</p>
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
