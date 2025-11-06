import React from 'react';
import { motion } from 'framer-motion';
import './WelcomePage.css';

const WelcomePage = ({ onEnter }) => {
  return (
    <motion.div
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.button
        onClick={onEnter}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="enter-button"
      >
        Enter Portfolio
      </motion.button>
    </motion.div>
  );
};

export default WelcomePage;