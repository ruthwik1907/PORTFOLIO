import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    role: 'Web Development Intern',
    company: 'Prodigy InfoTech',
    date: 'Mar 2024 - Apr 2024',
    description: [
      'Gained hands-on experience in front-end and back-end web development, contributing to live projects under professional mentorship.',
      'Enhanced practical understanding of web technologies, coding standards, and deployment workflows through real-world development tasks.',
    ],
  },
  // You can add more experience items here in the future
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

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <motion.div className="timeline" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {experienceData.map((item, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="company">{item.company} | {item.date}</p>
              <ul>
                {item.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Experience);