import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaHotel, FaBus, FaPassport, FaIdCard, FaBookOpen, FaHeadset } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './Details.css';

const details = [
  { icon: FaPlaneDeparture, title: 'Flights', desc: 'Flight booking assistance and coordination for your journey.' },
  { icon: FaHotel, title: 'Accommodation', desc: 'Carefully selected hotels in Makkah and Madinah.' },
  { icon: FaBus, title: 'Transportation', desc: 'Reliable ground transport between airports, hotels and holy sites.' },
  { icon: FaPassport, title: 'Passport Support', desc: 'Help with passport applications, renewals and documentation.' },
  { icon: FaIdCard, title: 'Visa Assistance', desc: 'Professional support with visa applications and procedures.' },
  { icon: FaBookOpen, title: 'Guidance', desc: 'Spiritual and practical guidance for Hajj and Umrah rituals.' },
  { icon: FaHeadset, title: 'Customer Support', desc: '24/7 dedicated support before, during and after your journey.' },
];

export default function Details() {
  return (
    <section className="details section">
      <div className="details__bg">
        <img src="/images/madinah-mosque.jpg" alt="Masjid an-Nabawi in Madinah" />
        <div className="details__bg-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader
          label="End-to-End Support"
          title="We Take Care of the Details"
          subtitle="From preparation to your return journey, we are here to support you every step of the way."
          light
        />

        <div className="details__grid">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <motion.div
                  className="details__card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="details__card-icon">
                    <Icon size={24} />
                  </div>
                  <h4 className="details__card-title">{item.title}</h4>
                  <p className="details__card-desc">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
