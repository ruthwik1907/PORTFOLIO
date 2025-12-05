import React, { useState, useEffect } from 'react';
import './Header.css';
import { motion } from 'framer-motion';

import resumePDF from './assets/RUTHWIK-RESUME.pdf'; // Assuming your resume is in src/assets
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the section is in the middle of the screen
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a>
      <a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Skills</a>
      <a href="#experience" className={activeLink === 'experience' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Experience</a>
      <a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projects</a>
      <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      id="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <div className="nav-brand">
          <a href="#header">SAI RUTHWIK V.C.V.N</a>
        </div>
        <button
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="header-actions">
          <nav id="main-nav" className={`main-nav ${menuOpen ? 'open' : ''}`}>
            {navLinks}
          </nav>
          <a href={resumePDF} download="RUTHWIK-RESUME.pdf" className="resume-button">Download Resume</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;