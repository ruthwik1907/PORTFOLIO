import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import About from './About';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Certifications from './Certifications';
import Contact from './Contact';
import WelcomePage from './WelcomePage'; // Import the new WelcomePage
import CustomCursor from './CustomCursor';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState('dark');
  const [showWelcome, setShowWelcome] = useState(true); // State to control welcome page visibility

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleEnterPortfolio = () => {
    setShowWelcome(false); // Hide welcome page, show main content
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <CustomCursor />
      <AnimatePresence>
        {showWelcome && <WelcomePage onEnter={handleEnterPortfolio} />}
      </AnimatePresence>
      {!showWelcome && (
        <>
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
