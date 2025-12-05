import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    degree: 'Bachelor of Technology - Computer Science',
    institution: 'Rajalakshmi Engineering College, Chennai',
    date: 'Nov 2022 - June 2026',
    details: 'CGPA: 7.57/10. Coursework in Data Structures, Algorithms, AI, and Full-Stack Development.',
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Narayana Olympiad School, Chennai',
    date: '2022',
    details: 'Completed with a focus on Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Narayana eTechno-School, Chennai',
    date: '2020',
    details: 'Achieved a score of 92% in the CBSE board examinations.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <motion.div className="timeline" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {educationData.map((item, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution} | {item.date}</p>
              <p>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Education);