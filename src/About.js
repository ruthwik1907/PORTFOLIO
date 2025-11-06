import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <div className="about-image-container">
          {/* Replace with a different photo of you */}
          <img 
            src="/aboutme.jpg" 
            alt="About Sai Ruthwik" 
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            A forward-thinking Computer Science student passionate about developing scalable and intelligent digital solutions. With experience in full-stack development, machine learning, and automation, I enjoy turning complex problems into user-friendly applications.
          </p>
          <p>
            I am well-versed in modern technologies like React, Python, and cloud services, and I am strongly motivated to explore emerging fields and translate innovative ideas into impactful, real-world systems.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;