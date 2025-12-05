import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BackToTopButton.css';

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12.814,3.013c0.129-0.34,0.49-0.543,0.853-0.452c3.451,0.863,6.565,3.977,7.428,7.428c0.091,0.363-0.112,0.724-0.452,0.853l-3.333,1.27c-0.293,0.111-0.623-0.033-0.734-0.326L12.814,3.013z" />
    <path d="M11.186,20.987c-0.129,0.34-0.49,0.543-0.853,0.452c-3.451-0.863-6.565-3.977-7.428-7.428c-0.091-0.363,0.112-0.724,0.452-0.853l3.333-1.27c0.293-0.111,0.623,0.033,0.734,0.326L11.186,20.987z" />
    <path d="M12,2c-0.827,0-1.5,0.673-1.5,1.5S11.173,5,12,5s1.5-0.673,1.5-1.5S12.827,2,12,2z" />
  </svg>
);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFiring, setIsFiring] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    setIsFiring(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset the animation state after it has finished
    // The CSS animation takes 1.2s
    setTimeout(() => {
      setIsFiring(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top-button"
          data-firing={isFiring}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Go to top"
        >
          <RocketIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;