import React, { useState } from 'react';
import './Portfolio.css';

const portfolioItems = [
  { id: 1, type: 'image', category: 'Bodas', url: './boda-1.jpg', title: 'Momentos Épicos' },
  { id: 2, type: 'image', category: '15 Años', url: './15-anos-1.webp', title: '15 Años Inolvidables' },
  { id: 3, type: 'image', category: 'Bodas', url: './boda-2.webp', title: 'Amor y Emoción' },
  { id: 4, type: 'image', category: 'Eventos', url: './evento-1.webp', title: 'Cobertura Especial' },
  { id: 5, type: 'image', category: '15 Años', url: './15-anos-2.webp', title: 'Noche Mágica' },
  { id: 6, type: 'video', category: 'Cinematografía', url: './video-1.jpg', title: 'Nuestros Reels' },
  { id: 7, type: 'image', category: 'Bodas', url: './boda-3.webp', title: 'Conexión Única' },
  { id: 8, type: 'image', category: '15 Años', url: './15-anos-3.webp', title: 'Detalles Mágicos' },
  { id: 9, type: 'image', category: 'Eventos', url: './evento-2.webp', title: 'Energía y Fiesta' },
  { id: 10, type: 'image', category: 'Bodas', url: './boda-4.webp', title: 'Esencia y Estilo' },
  { id: 11, type: 'image', category: '15 Años', url: './15-anos-4.webp', title: 'Tu Gran Noche' },
  { id: 12, type: 'video', category: 'Cinematografía', url: './video-2.jpg', title: 'Historias en Movimiento' },
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
