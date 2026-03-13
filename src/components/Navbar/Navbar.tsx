import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Equipo', href: '#team' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#home" className="navbar-logo">
          <img src="/logo.png" alt="IMAGINA Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">{link.name}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Contacto</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="mobile-nav-link" onClick={toggleMenu}>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={toggleMenu}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
