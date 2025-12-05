import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import WelcomePage from './WelcomePage'; // Import the new WelcomePage
import CustomCursor from './CustomCursor';
import ThemeSwitcher from './ThemeSwitcher';
import BackToTopButton from './BackToTopButton'; // Import the new button
import LoadingSpinner from './LoadingSpinner'; // Import the new spinner
import Chatbot from './Chatbot'; // Import the new chatbot

// Lazy load the main page sections for better initial performance
const Hero = React.lazy(() => import('./Hero'));
const About = React.lazy(() => import('./About'));
const Skills = React.lazy(() => import('./Skills'));
const Experience = React.lazy(() => import('./Experience'));
const Projects = React.lazy(() => import('./Projects'));
const Education = React.lazy(() => import('./Education'));
const Certifications = React.lazy(() => import('./Certifications'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  const [theme, setTheme] = useState('light');
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
          <BackToTopButton />
          <Chatbot />
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
