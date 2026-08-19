import { motion } from 'framer-motion';
import { FaShieldHalved, FaPlaneCircleCheck, FaUserTie, FaComments, FaStar, FaMosque } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './WhyChoose.css';

const features = [
  { icon: FaShieldHalved, title: 'Trusted Service', desc: 'We build trust through transparency, reliability and consistent quality in everything we do.' },
  { icon: FaPlaneCircleCheck, title: 'Comfortable Journey', desc: 'Your comfort is our priority — from carefully selected hotels to reliable transportation.' },
  { icon: FaUserTie, title: 'Professional Support', desc: 'Our experienced team provides dedicated, knowledgeable support at every step.' },
  { icon: FaComments, title: 'Clear Communication', desc: 'We keep you informed and connected throughout your entire journey.' },
  { icon: FaStar, title: 'Memorable Experience', desc: 'We go beyond logistics to create a meaningful and memorable pilgrimage experience.' },
  { icon: FaMosque, title: 'Focused on Ibadah', desc: 'We handle the details so you can devote your heart and mind to your worship.' },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section section-alt">
      <div className="container">
        <SectionHeader
          label="Why Al-Huda"
          title="Why Choose Al-Huda"
          subtitle="Your pilgrimage deserves the best care. Here's what sets us apart."
        />

        <div className="why-choose__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="why-choose__card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="why-choose__icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="why-choose__title">{feature.title}</h3>
                  <p className="why-choose__desc">{feature.desc}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
