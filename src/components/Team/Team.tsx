import React from 'react';
import './Team.css';
import { Instagram, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Tato Crocco',
    role: 'Fotógrafo, Filmmaker & Editor',
    description: 'Creador de contenido audiovisual. Apasionado por la narrativa visual y especializado en capturar la emoción pura de cada momento con un enfoque cinemático.',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop',
    socials: { instagram: '#', mail: '#' }
  },
  {
    name: 'Jorge Valido',
    role: 'Fotografía & Producción',
    description: 'Especialista en fotografía social y dirección de arte. Su gran ojo para el detalle garantiza que ningún recuerdo valioso pase desapercibido.',
    image: 'https://images.unsplash.com/photo-1556103255-44ab3bc82e53?q=80&w=1965&auto=format&fit=crop',
    socials: { instagram: '#', mail: '#' }
  },
  {
    name: 'Nacho Giovanetti',
    role: 'Fotografía & Producción',
    description: 'Enfocado en documentar la espontaneidad y belleza de cada evento. Experto en iluminación y composición dinámica para resultados impactantes.',
    image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop',
    socials: { instagram: '#', mail: '#' }
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
                  <a href={member.socials.instagram} className="team-social-link"><Instagram size={18} /></a>
                  <a href={member.socials.mail} className="team-social-link"><Mail size={18} /></a>
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
