import React from 'react';
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="./logo.png" alt="IMAGINA Logo" className="footer-logo" />
          <p className="footer-description">
            Productora audiovisual especializada en fotografía y video cinematográfico para eventos sociales.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/imagina.film/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/Imagina.vc" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Contacto</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={16} />
              <span>Villa Constitución, Santa Fe</span>
            </li>
            <li>
              <Phone size={16} />
              <span>341 402 4527</span>
            </li>
            <li>
              <Mail size={16} />
              <span>contacto@imaginafilm.com.ar</span>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Servicios</h4>
          <ul>
            <li><a href="#services">Bodas</a></li>
            <li><a href="#services">15 Años</a></li>
            <li><a href="#services">Eventos Sociales</a></li>
            <li><a href="#services">Video Cinematográfico</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IMAGINA Productora Audiovisual. Todos los derechos reservados.</p>
        <p className="made-by">Diseñado para crear recuerdos de alta calidad</p>
      </div>
    </footer>
  );
};

export default Footer;
