import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 12.5c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5zm3.5 4c-1.93 0-3.5-1.57-3.5-3.5h7c0 1.93-1.57 3.5-3.5 3.5zm3.5-4c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-0.67 1.5-1.5 1.5z"/>
  </svg>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I'm a bot based on Ruthwik's resume. Ask me anything about his skills, projects, or experience!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enhanced function to better understand natural language questions
  const getBotResponse = (userInput) => {
    const text = userInput.toLowerCase();

    // Greeting
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return "Hello! It's great to connect. How can I help you learn more about Ruthwik's work?";
    }
    // Skills & Technologies
    if (text.includes('skill') || text.includes('tech') || text.includes('proficient') || text.includes('good at') || text.includes('abilities')) {
      return "Ruthwik is proficient in several areas! His main skills include: Programming (Python, Java, JavaScript), Web Development (React, Node.js), Data Science (Pandas, Scikit-learn), Databases & Cloud (MySQL, MongoDB, Azure), and various Tools like GitHub and Figma. Is there a specific technology you'd like to know more about?";
    }
    // Projects
    if (text.includes('project') || text.includes('built') || text.includes('work') || text.includes('made')) {
      return "He has worked on several exciting projects! Some key ones include TravelMate (a full-stack travel app for a hackathon), a Smart Governance AI platform, and an IPL Match Winner Prediction model. You can find more details in the 'Projects' section of the portfolio!";
    }
    // Experience
    if (text.includes('experience') || text.includes('intern')) {
      return "Ruthwik gained practical experience as a Web Development Intern at Prodigy InfoTech, where he contributed to live projects and enhanced his skills in both front-end and back-end development.";
    }
    // Education
    if (text.includes('education') || text.includes('college') || text.includes('degree')) {
      return "He is currently pursuing a Bachelor of Technology in Computer Science at Rajalakshmi Engineering College, with an expected graduation in June 2026. He maintains a CGPA of 7.57.";
    }
    // Contact
    if (text.includes('contact') || text.includes('email') || text.includes('phone')) {
      return "You can get in touch with Ruthwik via email at vcvns.rutu10@gmail.com or by phone at +91 7338841155. All his contact details are at the bottom of the page!";
    }
    // Resume
    if (text.includes('resume') || text.includes('cv')) {
      return "You can download a copy of his resume by clicking the 'Download Resume' button in the header.";
    }
    // Farewells & Thanks
    if (text.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    if (text.includes('bye')) {
      return "Goodbye! Have a great day.";
    }
    // Fallback for unrecognized questions
    return "That's a great question! For more specific details, I'd recommend checking out the relevant section on the portfolio or reaching out to Ruthwik directly via the contact form. Is there anything else I can help with?";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking for a more natural feel
    setTimeout(() => {
      const botResponseText = getBotResponse(userMessage.text);
      const botMessage = { sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  return (
    <>
      <motion.button
        className="chatbot-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChatIcon />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="chatbot-header">
              <h3>AI Assistant</h3>
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className="message bot typing-indicator"><span></span><span></span><span></span></div>}
              <div ref={chatEndRef} />
            </div>
            <form className="chatbot-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about my projects..."
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading}>Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;