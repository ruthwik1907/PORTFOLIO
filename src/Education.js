import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor of Technology - Computer Science and Engineering</h3>
        <p className="institution">Rajalakshmi Engineering College, Chennai | Nov 2022 - June 2026</p>
        <p>CGPA - 7.57 / 10</p>
      </div>
      <div className="education-item">
        <h3>Higher Secondary Education (Class XII)</h3>
        <p className="institution">Narayana Olympiad School, Chennai | 2022</p>
        <p>Percentage - 78%</p>
      </div>
      <div className="education-item">
        <h3>Secondary Education (Class X)</h3>
        <p className="institution">Narayana eTechno-School, Chennai | 2020</p>
        <p>Percentage - 92%</p>
      </div>
    </motion.section>
  );
};

export default Education;