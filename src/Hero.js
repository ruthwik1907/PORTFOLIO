import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import resumePDF from './assets/RUTHWIK-RESUME.pdf';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>CSE Undergrad Engineering Intelligent Systems for Real-World Impact</h1>
          <p>I specialize in crafting intelligent, scalable, and user-centric digital solutions from concept to deployment.</p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">View My Work</a>
            <a href={resumePDF} download="RUTHWIK-RESUME.pdf" className="hero-button secondary">Download Resume</a>
          </div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/me.jpg"
            alt="Sai Ruthwik V.C.V.N"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;