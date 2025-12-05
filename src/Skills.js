import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <motion.div className="skills-container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </motion.div>
        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Web Development</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>REST APIs</li>
          </ul>
        </motion.div>
        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Data Science & ML</h3>
          <ul>
            <li>Pandas</li>
            <li>Scikit-learn</li>
            <li>NLP</li>
          </ul>
        </motion.div>
        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Databases & Cloud</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Azure</li>
          </ul>
        </motion.div>
        <motion.div className="skill-category" variants={itemVariants}>
          <h3>Tools</h3>
          <ul>
            <li>GitHub</li>
            <li>Figma</li>
            <li>UiPath</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(Skills);