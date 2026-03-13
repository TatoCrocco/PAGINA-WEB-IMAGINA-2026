import React from 'react';
import './Testimonials.css';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carolina & Martín',
    event: 'Boda',
    text: 'Imagina logró captar la esencia de nuestra boda de una manera mágica. El video nos hizo llorar de nuevo. Profesionales de principio a fin, una calidad cinematográfica increíble.',
  },
  {
    name: 'Familia Rossi',
    event: '15 Años - Martina',
    text: 'Las fotos de los 15 de nuestra hija superaron todas las expectativas. Tienen un ojo tremendo para los detalles y te hacen sentir súper cómodos frente a la cámara.',
  },
  {
    name: 'Empresa Innova',
    event: 'Evento Corporativo',
    text: 'Necesitábamos un registro elegante para nuestra gala anual y el resultado fue impecable. Muy recomendados para cualquier evento que requiera un estándar alto.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <h2 className="section-title text-center reveal">
          Lo que dicen de <span className="text-accent">Nosotros</span>
        </h2>
        
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div className={`testimonial-card reveal delay-${index % 3 + 1}`} key={index}>
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{test.name}</h4>
                <span className="author-event">{test.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
