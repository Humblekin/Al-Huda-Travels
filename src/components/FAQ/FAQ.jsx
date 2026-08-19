import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import faqData from '../../data/faqData';
import './FAQ.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq section section-alt">
      <div className="container-narrow">
        <SectionHeader
          label="Answers"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, packages, and travel requirements."
        />

        <div className="faq__list">
          {faqData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <div className={`faq__item ${openId === item.id ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span>{item.question}</span>
                  <FaChevronDown
                    className={`faq__icon ${openId === item.id ? 'faq__icon--rotated' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      className="faq__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq__answer">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
