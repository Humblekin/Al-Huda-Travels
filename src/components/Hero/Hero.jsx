import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiChevronDown } from 'react-icons/hi';
import useScrollPosition from '../../hooks/useScrollPosition';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScrollPosition();
  const whatsappUrl = 'https://wa.me/233261834931?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20enquire%20about%20your%20Hajj%20and%20Umrah%20services.';

  const handleScrollDown = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image with Parallax */}
      <motion.div
        className="hero__bg"
        style={{ y: scrollY * 0.3 }}
      >
        <img src="/images/hero-kaaba.jpg" alt="Masjid al-Haram and the Kaaba in Makkah during golden hour" />
        <div className="hero__overlay" />
      </motion.div>

      {/* Content */}
      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.span
            className="hero__label"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Hajj & Umrah Specialist
          </motion.span>

          <motion.h1
            className="hero__title"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            AL-HUDA <br />
            <span className="hero__title-accent">Travel & Tours</span>
          </motion.h1>

          <motion.div
            className="hero__divider"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
          />

          <motion.p
            className="hero__tagline"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Your Journey of Faith, Our Privilege to Serve
          </motion.p>

          <motion.p
            className="hero__description"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            We make your Hajj and Umrah journey smooth, comfortable and stress-free,
            so you can focus on what truly matters — your Ibadah.
          </motion.p>

          <motion.div
            className="hero__ctas"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <a href="#hajj" className="btn btn-primary hero__cta">
              Explore Packages
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero__cta"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={handleScrollDown}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <HiChevronDown size={24} />
        </motion.span>
      </motion.button>

      {/* Bottom Tagline Banner */}
      <motion.div
        className="hero__bottom-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <span className="hero__bottom-text">We Plan, You Worship.</span>
      </motion.div>
    </section>
  );
}
