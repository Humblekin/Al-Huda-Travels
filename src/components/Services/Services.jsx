import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import services from '../../data/services';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services section pattern-bg">
      <div className="container">
        <SectionHeader
          label="What We Offer"
          title="Our Services"
          subtitle="Comprehensive support for your pilgrimage journey — from preparation to your safe return home."
        />

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <motion.div
                  className="service-card"
                  whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="service-card__icon-wrap">
                    <Icon className="service-card__icon" />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <div className="service-card__accent" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
