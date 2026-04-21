import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>I'm open to opportunities and meaningful collaborations.</p>
      
      <div className="contact-links">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gayithrigayi02@gmail.com" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="btn">
   Email
</a>

        <a href="https://www.linkedin.com/in/gayithri-a-7aa699258" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        <a href="https://github.com/Agayithri12" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
      </div>
    </section>
  );

}

export default Contact;
