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

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificationData.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p>{cert.details}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;