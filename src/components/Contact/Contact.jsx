import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './Contact.css';

export default function Contact() {
  const whatsappUrl = 'https://wa.me/233261834931?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20enquire%20about%20your%20services.';

  return (
    <section id="contact" className="contact section pattern-bg">
      <div className="container">
        <SectionHeader
          label="Get In Touch"
          title="Contact Us"
          subtitle="We are here to assist you with any inquiries or to help you start planning your journey."
        />

        <div className="contact__content">
          <ScrollReveal direction="left">
            <div className="contact__info">
              <h3 className="contact__info-title">Reach Out To Us</h3>
              <p className="contact__info-desc">
                Whether you have a question about our packages, need assistance with your visa, or want to customize your journey, our dedicated team is ready to help.
              </p>

              <div className="contact__methods">
                <a href="tel:+233261834931" className="contact__method">
                  <div className="contact__method-icon">
                    <FaPhone size={20} />
                  </div>
                  <div className="contact__method-text">
                    <span className="contact__method-label">Call Us</span>
                    <span className="contact__method-value">0261834931 / 0206923199</span>
                  </div>
                </a>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__method">
                  <div className="contact__method-icon">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="contact__method-text">
                    <span className="contact__method-label">WhatsApp</span>
                    <span className="contact__method-value">0261834931 / 0206923199</span>
                  </div>
                </a>

                <a href="mailto:alhudatravels40@gmail.com" className="contact__method">
                  <div className="contact__method-icon">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="contact__method-text">
                    <span className="contact__method-label">Email Us</span>
                    <span className="contact__method-value">alhudatravels40@gmail.com</span>
                  </div>
                </a>

                <div className="contact__method">
                  <div className="contact__method-icon">
                    <FaLocationDot size={20} />
                  </div>
                  <div className="contact__method-text">
                    <span className="contact__method-label">Location</span>
                    <span className="contact__method-value">Mohiyabihi Banjida Junction</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact__map-placeholder">
              <div className="contact__map-inner">
                <FaLocationDot size={48} className="contact__map-icon" />
                <h3>Al-Huda Travel & Tours</h3>
                <p>Location Map Integration Pending</p>
                <p className="contact__map-note">A Google Maps integration will be added here once the physical address is provided.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
