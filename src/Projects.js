import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const projectData = [
  {
    title: 'TravelMate – Smart India Hackathon 2024',
    tech: 'ReactJS, Flask, Python, MongoDB, IoT',
    description: 'A full-stack travel companion app connecting solo travelers with groups, integrating rental commerce for travel gear and real-time safety features.',
    codeLink: 'https://github.com/ruthwik1907/TravelMate-Smart-India-Hackathon-2024' // Replace with actual GitHub repo URL
  },
  {
    title: 'HAACKMEGADON 2024 – Smart Governance Using AI',
    tech: 'Python, Flask, NLP, Sentiment Analysis, Firebase',
    description: 'Designed an AI-powered civic platform for citizens to post and upvote local issues, with sentiment analysis and an AI chatbot for engagement.',
    codeLink: 'https://github.com/ruthwik1907/HAACKMEGADON-2024-Smart-Governance-Using-AI' // Replace with actual GitHub repo URL
  },
  {
    title: 'IPL Match Winner Prediction',
    tech: 'Python, Pandas, Scikit-learn, Random Forest',
    description: 'Built a predictive model analyzing player and venue statistics to forecast match outcomes, deployed with a real-time prediction dashboard.',
    codeLink: 'https://github.com/ruthwik1907/IPL-Match-Winner-Prediction' // Replace with actual GitHub repo URL
  },
  {
    title: 'Transportation Feedback System',
    tech: 'ReactJS, Azure App Services, Python, GenAI',
    description: 'Created a cloud-hosted feedback system for passengers with modules for lost & found, bus details, and an integrated GenAI-based chatbot.',
    codeLink: 'https://github.com/ruthwik1907/Transportation-Feedback-System' // Replace with actual GitHub repo URL
  },
  {
    title: 'Attendance & Performance Tracking Automation',
    tech: 'UiPath, Python, Excel Automation, AI Center',
    description: 'Automated attendance and academic performance tracking using RPA and AI to eliminate manual data entry and generate automated reports.',
    codeLink: 'https://github.com/ruthwik1907/Attendance-Performance-Tracking-Automation' // Replace with actual GitHub repo URL
  },
  {
    title: 'Edge-Based Face Recognition System – AttendanceX (Ongoing)',
    tech: 'Raspberry Pi 5, TinyML, OpenCV, Python',
    description: 'Developing an Edge AI-powered face recognition system for real-time, privacy-preserving classroom attendance using multi-camera synchronization.',
    codeLink: 'https://github.com/ruthwik1907/AttendanceX' // Replace with actual GitHub repo URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {projectData.map((project, index) => (
          <motion.div key={index} className="project-card" variants={itemVariants}>
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link-button"><span>View Code</span><i className="fab fa-github"></i></a>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;