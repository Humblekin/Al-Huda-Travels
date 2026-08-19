import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaCheck, FaXmark, FaChevronDown, FaChevronUp, FaHotel, FaBus, FaClock } from 'react-icons/fa6';
import './Packages.css';

export default function PackageCard({ pkg, type = 'hajj' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappUrl = `https://wa.me/233261834931?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20enquire%20about%20your%20${pkg.name}.`;

  const tierColors = {
    Economy: '#0D7A4A',
    Standard: '#1A8A5A',
    Premium: '#C5A355',
    VIP: '#B8860B',
    Family: '#0A5C36',
  };

  return (
    <motion.div
      className={`package-card ${isExpanded ? 'package-card--expanded' : ''}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      layout
    >
      {/* Image */}
      <div className="package-card__image-wrap">
        <img src={pkg.image} alt={pkg.name} className="package-card__image" loading="lazy" />
        <div className="package-card__image-overlay" />
        <span
          className="package-card__tier"
          style={{ background: tierColors[pkg.tier] || tierColors.Standard }}
        >
          {pkg.tier}
        </span>
      </div>

      {/* Content */}
      <div className="package-card__content">
        <h3 className="package-card__name">{pkg.name}</h3>
        <p className="package-card__description">{pkg.description}</p>

        {/* Quick Info */}
        <div className="package-card__quick-info">
          <div className="package-card__info-item">
            <FaClock size={14} />
            <span>{pkg.duration}</span>
          </div>
          <div className="package-card__info-item">
            <FaHotel size={14} />
            <span>Makkah & Madinah</span>
          </div>
          <div className="package-card__info-item">
            <FaBus size={14} />
            <span>{pkg.transport}</span>
          </div>
        </div>

        {/* Expand/Collapse */}
        <button
          className="package-card__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? 'Hide Details' : 'View Package'}</span>
          {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="package-card__details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="package-card__hotels">
                <h4>Accommodation</h4>
                <p><strong>Makkah:</strong> {pkg.makkahHotel}</p>
                <p><strong>Madinah:</strong> {pkg.madinahHotel}</p>
              </div>

              <div className="package-card__included">
                <h4>What's Included</h4>
                <ul>
                  {pkg.included.map((item, i) => (
                    <li key={i}>
                      <FaCheck size={12} className="icon-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="package-card__not-included">
                <h4>Not Included</h4>
                <ul>
                  {pkg.notIncluded.map((item, i) => (
                    <li key={i}>
                      <FaXmark size={12} className="icon-x" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Price & CTA */}
        <div className="package-card__footer">
          <div className="package-card__price">
            <span className="package-card__price-label">Starting from</span>
            <span className="package-card__price-value">{pkg.price}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp package-card__enquiry"
          >
            <FaWhatsapp size={16} />
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
