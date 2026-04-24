'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only calculate active section if we are on the home page
      if (pathname === '/') {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        });
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinksStyle = isMobileMenuOpen
    ? {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(24px)',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }
    : {};

  return (
    <header className="header" style={{ boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <div className="header-container">
        <Link href="/" className="logo">
          Guruar<span className="text-secondary">Events</span>
        </Link>

        <ul className="nav-links" style={navLinksStyle}>
          <li><Link href="/#home" className={`nav-link ${pathname === '/' && (activeSection === 'home' || !activeSection) ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="/#services" className={`nav-link ${pathname === '/' && activeSection === 'services' ? 'active' : ''}`} onClick={closeMobileMenu}>Services</Link></li>
          <li><Link href="/#portfolio" className={`nav-link ${pathname === '/' && activeSection === 'portfolio' ? 'active' : ''}`} onClick={closeMobileMenu}>Portfolio</Link></li>
          <li><Link href="/#testimonials" className={`nav-link ${pathname === '/' && activeSection === 'testimonials' ? 'active' : ''}`} onClick={closeMobileMenu}>Testimonials</Link></li>
          <li><Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        <div className="header-actions">
          <a href="tel:09619801373" className="phone-link">
            <span className="material-symbols-outlined icon">call</span>
            09619801373
          </a>
          <Link href="/contact" className="btn btn-primary btn-plan">
            Plan Your Event
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </header>
  );
}
