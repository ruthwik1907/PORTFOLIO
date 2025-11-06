import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      <div className="contact-container">
        <div className="contact-details">
          <p><strong>Phone:</strong> <a href="tel:+917338841155">+91 7338841155</a></p>
          <p><strong>Email:</strong> <a href="mailto:vcvns.rutu10@gmail.com">vcvns.rutu10@gmail.com</a></p>
          <p><strong>Location:</strong> Chennai, Tamil Nadu, India</p>
        </div>
        {/* 
          To make this form work, sign up for a free service like EmailJS (emailjs.com)
          and follow their documentation to connect this form.
        */}
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="form-submit-button">Send Message</button>
        </form>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sai-ruthwik-v-c-v-n-b9638a256/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/SaiRuthwik" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SAI RUTHWIK V.C.V.N. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;