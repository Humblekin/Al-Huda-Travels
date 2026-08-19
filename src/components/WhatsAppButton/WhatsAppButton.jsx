import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/233261834931?text=Assalamu%20Alaikum.%20I%20would%20like%20to%20enquire%20about%20your%20Hajj%20and%20Umrah%20services.';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={28} />
      <span className="whatsapp-float__pulse" />
    </motion.a>
  );
}
