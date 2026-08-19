import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import guideData from '../../data/guideData';
import './Guide.css';

export default function Guide() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', ...new Set(guideData.map(item => item.category))];

  const filteredGuides = activeCategory === 'All'
    ? guideData
    : guideData.filter(item => item.category === activeCategory);

  const openArticle = (article) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  return (
    <section className="guide section pattern-bg">
      <div className="container">
        <SectionHeader
          label="Preparation & Knowledge"
          title="Hajj & Umrah Guide"
          subtitle="Educational resources to help you prepare spiritually and practically for your journey."
        />

        {/* Categories */}
        <ScrollReveal>
          <div className="guide__categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`guide__category-btn ${activeCategory === category ? 'guide__category-btn--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Guide Grid */}
        <div className="guide__grid">
          <AnimatePresence mode="popLayout">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="guide__card"
                onClick={() => openArticle(guide)}
              >
                <div className="guide__card-header">
                  <FaBookOpen className="guide__card-icon" />
                  <span className="guide__card-category">{guide.category}</span>
                </div>
                <h3 className="guide__card-title">{guide.title}</h3>
                <p className="guide__card-summary">{guide.summary}</p>
                <span className="guide__card-readmore">Read More</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="guide__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeArticle}
          >
            <motion.div
              className="guide__modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="guide__modal-close" onClick={closeArticle}>&times;</button>
              <div className="guide__modal-header">
                <span className="guide__modal-category">{selectedArticle.category}</span>
                <h2 className="guide__modal-title">{selectedArticle.title}</h2>
              </div>
              <div className="guide__modal-body">
                <p>{selectedArticle.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
