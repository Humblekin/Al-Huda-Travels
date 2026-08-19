import { FaWhatsapp } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import PackageCard from './PackageCard';
import umrahPackages from '../../data/umrahPackages';
import './Packages.css';

export default function UmrahPackages() {
  const customWhatsappUrl = 'https://wa.me/233261834931?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20request%20a%20custom%20Umrah%20package.';

  return (
    <section id="umrah" className="section pattern-bg">
      <div className="container">
        <SectionHeader
          label="Year-Round Worship"
          title="Umrah Packages"
          subtitle="Perform Umrah at your convenience with our flexible packages available throughout the year."
        />

        <div className="packages__grid">
          {umrahPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <PackageCard pkg={pkg} type="umrah" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="packages__custom-cta">
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-medium)' }}>
              Looking for something specific? We can create a package tailored to your needs.
            </p>
            <a
              href={customWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp size={18} />
              Request a Custom Umrah Package
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
