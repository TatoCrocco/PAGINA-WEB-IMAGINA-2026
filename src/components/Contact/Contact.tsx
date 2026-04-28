import React, { useState } from 'react';
import './Contact.css';
import { Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Bodas',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear mensaje para WhatsApp
    const whatsappMessage = `Hola IMAGINA! 👋
Mi nombre es: ${formData.name}
Tipo de evento: ${formData.eventType}
Fecha: ${formData.eventDate || 'A confirmar'}
Teléfono: ${formData.phone}
Email: ${formData.email}

Mensaje:
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/543414024527?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    // Limpiar formulario después de enviar
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: 'Bodas',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h2 className="section-title text-left" style={{ marginBottom: '1rem' }}>
              Hablemos de tu <span className="text-accent">Evento</span>
            </h2>
            <p className="contact-subtitle">
              Queremos conocer los detalles de tu próximo gran día. Escríbenos y comencemos a planear cómo inmortalizar esos momentos inolvidables.
            </p>
            <div className="contact-details" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <div className="contact-detail-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--accent-color)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Ubicación</h4>
                  <p style={{ margin: 0, opacity: 0.8 }}>Villa Constitución, Santa Fe</p>
                </div>
              </div>
              <div className="contact-detail-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-color)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Teléfono</h4>
                  <p style={{ margin: 0, opacity: 0.8 }}>341 402 4527</p>
                </div>
              </div>
            </div>
            <div className="contact-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop" 
                alt="Imagina Contact Equipment" 
                className="contact-image"
              />
            </div>
          </div>

          <div className="contact-form-container reveal delay-1">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group row">
                <div className="input-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Teléfono *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              
              <div className="form-group row">
                <div className="input-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label htmlFor="eventType">Tipo de Evento</label>
                  <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="Bodas">Bodas</option>
                    <option value="15 Años">15 Años</option>
                    <option value="Evento Social">Evento Social</option>
                    <option value="Corporativo">Corporativo</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="eventDate">Fecha (Aproximada)</label>
                  <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="message">Cuéntanos más *</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Enviar Mensaje <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/543414024527" target="_blank" rel="noopener noreferrer" className="whatsapp-float reveal delay-3" aria-label="Chat on WhatsApp">
        <MessageCircle size={32} />
      </a>
    </section>
  );
};

export default Contact;
