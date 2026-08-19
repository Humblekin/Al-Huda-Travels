import { FaBullseye, FaHandshake, FaHeart } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './About.css';

const values = [
  {
    icon: FaBullseye,
    title: 'Our Mission',
    text: 'To provide every pilgrim with a comfortable, well-organized and spiritually enriching Hajj and Umrah experience, allowing them to focus entirely on their worship.',
  },
  {
    icon: FaHandshake,
    title: 'Our Values',
    text: 'Trust, integrity, compassion and excellence. We treat every pilgrim like family and every journey as a sacred responsibility.',
  },
  {
    icon: FaHeart,
    title: 'Our Commitment',
    text: 'We are committed to supporting our pilgrims at every step — from the first enquiry to the safe return home — with professionalism and genuine care.',
  },
];

export default function About() {
  return (
    <section id="about" className="about section pattern-bg">
      <div className="container">
        <SectionHeader
          label="Who We Are"
          title="Serving with Trust. Travelling with Purpose."
          subtitle="At Al-Huda Travel & Tours, we understand that Hajj and Umrah are more than journeys. They are deeply meaningful experiences."
        />

        <div className="about__content">
          <ScrollReveal direction="left">
            <div className="about__image-wrap">
              <img src="/images/pilgrims-corridor.jpg" alt="Pilgrims in the grand corridors of Masjid al-Haram" loading="lazy" />
              <div className="about__image-accent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="about__text">
              <p className="about__intro">
                Our goal is to help pilgrims travel with comfort, confidence and peace of mind 
                while focusing on their worship. We handle the logistics so you can dedicate 
                your heart and mind to your Ibadah.
              </p>
              <p className="about__body">
                Based in Ghana, Al-Huda Travel & Tours has been serving pilgrims with dedication 
                and care. We believe that every pilgrim deserves a well-planned, stress-free 
                journey — regardless of their budget or experience level.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <div className="about__values">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="about__value-card">
                  <div className="about__value-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="about__value-title">{value.title}</h3>
                  <p className="about__value-text">{value.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
