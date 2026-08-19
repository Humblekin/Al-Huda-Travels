import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import HajjPackages from './components/Packages/HajjPackages';
import UmrahPackages from './components/Packages/UmrahPackages';
import Details from './components/Details/Details';
import PilgrimStories from './components/PilgrimStories/PilgrimStories';
import About from './components/About/About';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Testimonials from './components/Testimonials/Testimonials';
import EnquiryForm from './components/EnquiryForm/EnquiryForm';
import FAQ from './components/FAQ/FAQ';
import Guide from './components/Guide/Guide';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <HajjPackages />
        <UmrahPackages />
        <Details />
        <PilgrimStories />
        <About />
        <WhyChoose />
        <Testimonials />
        <EnquiryForm />
        <FAQ />
        <Guide />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
