import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';

const certificationData = [
  {
    name: 'IELTS – Overall Band 7',
    issuer: 'IDP Education Ltd | Aug 2025',
    details: 'Listening 8.5, Reading 7, Speaking 6, Writing 7.5',
  },
  {
    name: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL | Nov 2024',
    details: 'Scored 76% (Elite)',
  },
  {
    name: 'Automation Developer Associate Training (v2023.10)',
    issuer: 'ICT Academy',
    details: 'Completed training for design and implementation.',
  },
  {
    name: 'Design & Implementation of Human-Computer Interfaces',
    issuer: 'NPTEL',
    details: 'Course completion.',
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

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <motion.div className="timeline" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {certificationData.map((cert, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-content">
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p>{cert.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(Certifications);