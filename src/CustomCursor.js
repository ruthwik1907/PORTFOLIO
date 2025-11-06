import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x, y: position.y, scale: isHovering ? 2 : 1 }}
      transition={{ // Use a different transition for position vs. scale
        x: { type: 'tween', ease: 'linear', duration: 0.05 }, // Make position tracking almost instant
        y: { type: 'tween', ease: 'linear', duration: 0.05 }, // Make position tracking almost instant
        scale: { type: 'spring', stiffness: 300, damping: 20 } // Keep a nice spring effect for scaling
      }}
    />
  );
};

export default CustomCursor;