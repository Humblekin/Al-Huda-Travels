import ScrollReveal from './ScrollReveal';
import './common.css';

export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''}`}>
      {label && (
        <ScrollReveal>
          <span className="section-header__label">{label}</span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="section-header__title">{title}</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="gold-divider" />
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="section-header__subtitle">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
