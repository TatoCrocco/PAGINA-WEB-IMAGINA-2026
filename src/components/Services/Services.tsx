import React from 'react';
import './Services.css';
import { Camera, Video, Sparkles, Film, Users } from 'lucide-react';

const servicesList = [
  {
    title: 'Fotografía de Bodas',
    description: 'Documentamos cada instante de tu gran día, capturando miradas, abrazos y sonrisas para que revivas la emoción una y otra vez.',
    icon: <Camera className="service-icon" />,
  },
  {
    title: 'Filmación de Bodas',
    description: 'Películas de boda que cuentan tu historia de amor con una estética cinematográfica, música envolvente y un montaje impecable.',
    icon: <Video className="service-icon" />,
  },
  {
    title: 'Fotografía de 15 Años',
    description: 'Sesiones únicas y cobertura total del evento, reflejando tu estilo y personalidad en una noche inolvidable.',
    icon: <Sparkles className="service-icon" />,
  },
  {
    title: 'Video Cinematográfico',
    description: 'Producciones de alta gama con equipos de cine, drones y estabilizadores para darle a tu evento un look digno de Hollywood.',
    icon: <Film className="service-icon" />,
  },
  {
    title: 'Cobertura de Eventos',
    description: 'Eventos sociales, corporativos o familiares. Nos aseguramos de documentar la atmósfera y cada detalle clave de la ocasión.',
    icon: <Users className="service-icon" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <h2 className="section-title text-center reveal">
          Nuestros <span className="text-accent">Servicios</span>
        </h2>
        <p className="section-subtitle reveal delay-1">
          Ofrecemos un registro visual completo para tus eventos más importantes, fusionando técnica, arte y una profunda conexión emocional.
        </p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className={`service-card reveal delay-${index % 3 + 1}`} key={service.title}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
