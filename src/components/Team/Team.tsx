import React from 'react';
import './Team.css';
import { Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'Tato Crocco',
    role: 'Fotógrafo, Filmmaker & Editor',
    description: 'Creador de contenido audiovisual. Apasionado por la narrativa visual y especializado en capturar la emoción pura de cada momento con un enfoque cinemático.',
    image: './tato1.jpeg',
    socials: { instagram: 'https://www.instagram.com/tatocrocco.ph' }
  },
  {
    name: 'Jorge Valido',
    role: 'Filmmaker & Piloto de Drone',
    description: 'Especialista en narrativa audiovisual y tomas aéreas impresionantes. Con su ojo cinematográfico y destreza técnica, Jorge eleva la perspectiva de cada evento para crear películas únicas e inolvidables.',
    image: './jorge1.jpeg',
    socials: { instagram: 'https://www.instagram.com/enfoque_9' }
  },
  {
    name: 'Nacho Giovannetti',
    role: 'Fotografía & Producción',
    description: 'Enfocado en documentar la espontaneidad y belleza de cada evento. Experto en iluminación y composición dinámica para resultados impactantes.',
    image: './nacho1.jpeg',
    socials: { instagram: 'https://www.instagram.com/ignacio_giovannetti_foto_arte' }
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <h2 className="section-title reveal">
          Conoce al <span className="text-accent">Equipo</span>
        </h2>
        <p className="section-subtitle reveal delay-1">
          Los profesionales apasionados detrás de IMAGINA. Tres miradas distintas unidas por un mismo propósito: contar tu historia de la mejor manera.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className={`team-card reveal delay-${index + 1}`} key={member.name}>
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-socials">
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="team-social-link"><Instagram size={18} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
