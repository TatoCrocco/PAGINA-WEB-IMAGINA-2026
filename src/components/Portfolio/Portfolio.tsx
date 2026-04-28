import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categories = ['Todos', 'Bodas', '15 Años', 'Eventos', 'Cinematografía'];

  const filteredItems = filter === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const nextSlide = () => {
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredItems.length - 1); // Loop to end
    }
  };

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

        <div className="portfolio-carousel-wrapper reveal delay-2">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={32} />
          </button>
          
          <div className="portfolio-slider-container">
            <div 
              className="portfolio-slider" 
              style={{ transform: `translateX(-${currentIndex * (100 / filteredItems.length)}%)`, width: `${(filteredItems.length * 100)}%` }}
            >
              {filteredItems.map((item) => (
                <div className="portfolio-slide" key={item.id} style={{ width: `${100 / filteredItems.length}%` }}>
                  <div className="portfolio-item">
                    <img src={item.url} alt={item.title} className="portfolio-img" />
                    <div className="portfolio-overlay">
                      <span className="portfolio-category">{item.category}</span>
                      <h3 className="portfolio-item-title">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#" className="btn btn-outline reveal delay-3">Ver Galería Completa</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
