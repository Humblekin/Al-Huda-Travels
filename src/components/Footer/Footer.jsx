import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer pattern-bg-dark">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-icon">☪</span>
              <div className="footer__logo-text">
                <span className="footer__logo-name">AL-HUDA</span>
                <span className="footer__logo-sub">Travel & Tours</span>
              </div>
            </a>
            <p className="footer__tagline">We Plan, You Worship.</p>
            <p className="footer__desc">
              Your trusted partner for a comfortable and spiritually fulfilling Hajj and Umrah experience. Based in Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#hajj">Hajj Packages</a></li>
              <li><a href="#umrah">Umrah Packages</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#pilgrim-stories">Pilgrim Stories</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__title">Contact Info</h4>
            <ul>
              <li>
                <FaPhone className="footer__icon" />
                <a href="tel:+233261834931">0261834931 / 0206923199</a>
              </li>
              <li>
                <FaEnvelope className="footer__icon" />
                <a href="mailto:alhudatravels40@gmail.com">alhudatravels40@gmail.com</a>
              </li>
              <li>
                <FaLocationDot className="footer__icon" />
                <span>Mohiyabihi Banjida Junction</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__social">
            <h4 className="footer__title">Follow Us</h4>
            <div className="footer__social-links">
              <a href="https://www.facebook.com/share/1D8Rxq6qLw/" aria-label="Facebook" className="footer__social-link" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="footer__social-link"><FaInstagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="footer__social-link"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Al-Huda Travel & Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
