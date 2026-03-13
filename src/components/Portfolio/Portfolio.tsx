import React, { useState } from 'react';
import './Portfolio.css';

const portfolioItems = [
  { id: 1, type: 'image', category: 'Bodas', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop', title: 'Boda de Ana & Carlos' },
  { id: 2, type: 'image', category: '15 Años', url: 'https://images.unsplash.com/photo-1571556391901-7649d28e75db?q=80&w=2070&auto=format&fit=crop', title: 'Mis 15 Sofía' },
  { id: 3, type: 'image', category: 'Bodas', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', title: 'Boda de Laura & Marcos' },
  { id: 4, type: 'image', category: 'Eventos', url: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop', title: 'Fiesta de Fin de Año' },
  { id: 5, type: 'image', category: '15 Años', url: 'https://images.unsplash.com/photo-1621528434685-d8c9735d568c?q=80&w=1974&auto=format&fit=crop', title: 'Mis 15 Valentina' },
  { id: 6, type: 'video', category: 'Cinematografía', url: 'https://images.unsplash.com/photo-1604928140439-01258832a829?q=80&w=2070&auto=format&fit=crop', title: 'Reel 2025' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Bodas', '15 Años', 'Eventos', 'Cinematografía'];

  const filteredItems = filter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <h2 className="section-title text-center reveal">
          Nuestro <span className="text-accent">Portfolio</span>
        </h2>
        
        <div className="portfolio-filters reveal delay-1">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div className={`portfolio-item reveal delay-${index % 3 + 1}`} key={item.id}>
              <img src={item.url} alt={item.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <h3 className="portfolio-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-outline reveal delay-3">Ver Galería Completa</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
