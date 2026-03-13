import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop" 
              alt="IMAGINA Productora working" 
              className="rounded-image"
            />
            {/* Cinematic frame decoration */}
            <div className="decor-frame"></div>
          </div>
          
          <div className="about-content reveal">
            <h2 className="section-title text-left">
              Sobre <span className="text-accent">Nosotros</span>
            </h2>
            <div className="about-text">
              <p>
                En <strong>IMAGINA</strong>, creemos que cada evento tiene una historia única esperando ser contada. Somos una productora audiovisual apasionada por capturar la esencia, la emoción y la belleza de tus momentos más importantes.
              </p>
              <p>
                Nos especializamos en fotografía y filmación de bodas, fiestas de 15 años y eventos sociales. Nuestro enfoque es cinematográfico y elegante; no solo registramos imágenes, sino que creamos un legado visual que perdurará por generaciones.
              </p>
              <p>
                Trabajamos de manera cercana y personalizada, asegurándonos de que cada detalle de tu evento quede inmortalizado con la más alta calidad y sensibilidad artística.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Años de Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Eventos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
