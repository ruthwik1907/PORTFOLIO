import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css'; // Make sure this CSS file is imported

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false); // To track hover over interactive elements

  const updatePosition = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e) => {
    if (e.target.closest('a, button')) {
      setIsPointer(true);
    }
  }, []);

  const handleMouseOut = useCallback((e) => {
    if (e.target.closest('a, button')) {
      setIsPointer(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [updatePosition, handleMouseOver, handleMouseOut]);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="custom-cursor"
      variants={{
        default: { scale: 1 },
        pointer: { scale: 1.2, rotate: -15 }, // Add a slight tilt on hover
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M6.9,2.5l12.5,10.2l-5.1,5.1L6.9,2.5z" />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;