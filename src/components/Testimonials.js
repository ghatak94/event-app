export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Happy Families Say</h2>
          <p className="section-subtitle">The joy of our clients is the true measure of our success.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card border-primary">
            <div className="quote-icon text-primary">&quot;</div>
            <p className="testimonial-text">&quot;Guruar Events made my daughter&apos;s first birthday absolutely magical. The unicorn theme was executed flawlessly. Highly recommend!&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar bg-primary text-primary">A</div>
              <div className="author-info">
                <h4>Anjali M.</h4>
                <p className="text-secondary">First Birthday</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card border-secondary">
            <div className="quote-icon text-secondary">&quot;</div>
            <p className="testimonial-text">&quot;Our baby shower was everything we dreamed of and more. The pastel decor was so elegant and chic. Thank you for a wonderful day!&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar bg-secondary text-secondary">R</div>
              <div className="author-info">
                <h4>Rahul &amp; Sneha</h4>
                <p className="text-primary">Baby Shower</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card border-primary">
            <div className="quote-icon text-primary">&quot;</div>
            <p className="testimonial-text">&quot;Celebrating our 25th anniversary with Guruar Events was the best decision. The floral arrangements and lighting were breathtaking.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar bg-primary text-primary">P</div>
              <div className="author-info">
                <h4>Priya K.</h4>
                <p className="text-secondary">25th Anniversary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
