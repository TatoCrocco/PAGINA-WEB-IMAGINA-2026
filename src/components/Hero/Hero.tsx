import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {/* Placeholder image for cinematic background. We can replace this with a local video or high-quality asset if provided */}
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
          alt="Wedding Cinematic Background" 
          className="hero-img"
        />
      </div>
      
      <div className="hero-content container">
        <img src="./logo.png" alt="IMAGINA Logo" className="hero-logo fade-in-up" />
        <h1 className="hero-title fade-in-up delay-1">
          Capturamos los momentos que vas a querer recordar <span className="text-accent">toda la vida</span>
        </h1>
        <div className="hero-actions fade-in-up delay-2">
          <a href="#portfolio" className="btn btn-primary">Ver Trabajos</a>
          <a href="#contact" className="btn btn-outline">Contáctanos</a>
        </div>
      </div>
      
      <div className="scroll-indicator fade-in delay-3">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
