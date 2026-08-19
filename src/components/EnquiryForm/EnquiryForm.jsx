import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRegCircleCheck } from 'react-icons/fa6';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import './EnquiryForm.css';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    service: 'Hajj Package',
    travellers: '1',
    month: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success message is shown
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          whatsapp: '',
          email: '',
          service: 'Hajj Package',
          travellers: '1',
          month: '',
          budget: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="enquiry" className="enquiry section">
      <div className="container-narrow">
        <SectionHeader
          label="Plan Your Journey"
          title="Start Your Journey With Us"
          subtitle="Fill out the form below and our team will get back to you with personalized options."
        />

        <ScrollReveal>
          <div className="enquiry__container">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  className="enquiry__success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <FaRegCircleCheck className="enquiry__success-icon" size={64} />
                  <h3>Enquiry Sent Successfully</h3>
                  <p>Jazakallah Khair. We have received your enquiry and will contact you shortly on WhatsApp.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="enquiry__form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="whatsapp">WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +233 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Optional"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="Hajj Package">Hajj Package</option>
                        <option value="Umrah Package">Umrah Package</option>
                        <option value="Hotel Accommodation">Hotel Accommodation</option>
                        <option value="Ground Transport">Ground Transport</option>
                        <option value="Passport Support">Passport Support</option>
                        <option value="Visa Assistance">Visa Assistance</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="travellers">Number of Travellers</label>
                      <input
                        type="number"
                        id="travellers"
                        name="travellers"
                        min="1"
                        value={formData.travellers}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="month">Preferred Travel Month</label>
                      <input
                        type="month"
                        id="month"
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget (Optional)</label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g. $2000 - $3000 per person"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Details or Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-emerald enquiry__submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send My Enquiry</span>
                      </>
                    )}
                  </button>
                  <p className="enquiry__note">
                    Note: Please do not send sensitive passport information through this form. Our team will request necessary documents securely via WhatsApp.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
