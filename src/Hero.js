import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

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
          <h1>Full-Stack Developer & AI Enthusiast</h1>
          <p>Crafting intelligent, scalable, and user-centric digital solutions from concept to deployment.</p>
          <div className="hero-buttons">
            <a href="#projects" className="hero-button primary">View My Work</a>
            <a href="#contact" className="hero-button secondary">Get In Touch</a>
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