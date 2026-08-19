import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import PackageCard from './PackageCard';
import hajjPackages from '../../data/hajjPackages';
import './Packages.css';

export default function HajjPackages() {
  return (
    <section id="hajj" className="section section-alt">
      <div className="container">
        <SectionHeader
          label="Sacred Pilgrimage"
          title="Hajj Packages"
          subtitle="Choose from our carefully curated Hajj packages designed for comfort, convenience and spiritual focus."
        />

        <div className="packages__grid">
          {hajjPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <PackageCard pkg={pkg} type="hajj" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
