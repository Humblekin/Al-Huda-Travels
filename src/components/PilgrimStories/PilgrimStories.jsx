import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './PilgrimStories.css';

const galleryImages = [
  { id: 1, src: '/images/hero-kaaba.jpg', alt: 'Pilgrims performing Tawaf at the Kaaba' },
  { id: 2, src: '/images/madinah-mosque.jpg', alt: 'Masjid an-Nabawi in Madinah at twilight' },
  { id: 3, src: '/images/pilgrims-corridor.jpg', alt: 'Pilgrims walking through the grand corridors' },
  { id: 4, src: '/images/kaaba-night.jpg', alt: 'Aerial view of the Kaaba at night' },
  { id: 5, src: '/images/hotel-luxury.jpg', alt: 'Luxury hotel accommodation with mosque view' },
  { id: 6, src: '/images/pilgrims-group.jpg', alt: 'Pilgrims praying together near the Kaaba' },
];

export default function PilgrimStories() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="pilgrim-stories" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Real Experiences"
          title="Their Journey. Their Memories. Their Trust."
          subtitle="A visual journey through the sacred pilgrimage — captured by those who lived it."
        />

        {/* Gallery Grid */}
        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <motion.div
                className={`gallery__item gallery__item--${index + 1}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-view">View</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <button className="btn btn-emerald">View More Pilgrim Stories</button>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
              <HiX size={28} />
            </button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">
              <HiChevronLeft size={36} />
            </button>
            <motion.img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="lightbox__image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">
              <HiChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
