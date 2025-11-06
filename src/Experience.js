import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Professional Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Web Development Intern</h3>
            <p className="company">Prodigy InfoTech | Mar 2024 – Apr 2024</p>
            <ul>
              <li>Gained hands-on experience in front-end and back-end web development, contributing to live projects under professional mentorship.</li>
              <li>Enhanced practical understanding of web technologies, coding standards, and deployment workflows through real-world development tasks.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;