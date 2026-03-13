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
    // Simulate sending form data
    alert('Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.');
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
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-float reveal delay-3" aria-label="Chat on WhatsApp">
        <MessageCircle size={32} />
      </a>
    </section>
  );
};

export default Contact;
