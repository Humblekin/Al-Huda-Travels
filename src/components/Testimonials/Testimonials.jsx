import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Testimonial Placeholder',
    type: 'Hajj',
    rating: 5,
    review: 'This space is reserved for a real customer testimonial. Al-Huda Travel & Tours values authentic feedback from our pilgrims.',
  },
  {
    id: 2,
    name: 'Testimonial Placeholder',
    type: 'Umrah',
    rating: 5,
    review: 'This space is reserved for a real customer testimonial. We will add genuine pilgrim experiences as they are shared with us.',
  },
  {
    id: 3,
    name: 'Testimonial Placeholder',
    type: 'Hajj',
    rating: 5,
    review: 'This space is reserved for a real customer testimonial. We believe in sharing only authentic and verified experiences.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials section pattern-bg">
      <div className="container-narrow">
        <SectionHeader
          label="What Pilgrims Say"
          title="Your Trust Means Everything to Us"
          subtitle="Real experiences from real pilgrims — coming soon."
        />

        <ScrollReveal>
          <div className="testimonials__carousel">
            <button className="testimonials__nav" onClick={goPrev} aria-label="Previous testimonial">
              <FaChevronLeft size={18} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials__card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <FaQuoteLeft className="testimonials__quote-icon" size={36} />
                <p className="testimonials__review">{testimonials[current].review}</p>
                <div className="testimonials__stars">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <span className="testimonials__name">{testimonials[current].name}</span>
                    <span className="testimonials__type">{testimonials[current].type} Pilgrim</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button className="testimonials__nav" onClick={goNext} aria-label="Next testimonial">
              <FaChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="testimonials__dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
