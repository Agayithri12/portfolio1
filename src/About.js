import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="about-text">
        I’m Gayithri, an AI & Data Science undergraduate with a strong interest in developing intelligent and efficient digital solutions. 
        I work with technologies like Machine Learning, Computer Vision, and Web Development to solve real-world problems.
      </p>
      <p className="about-text">
        I enjoy building user-friendly applications and continuously improving my skills in programming, data analysis, and system design. 
        I’m always eager to learn new technologies and explore innovative ideas in the field of AI.
      </p>

      <div className="about-details">
        <h3>Education</h3>
        <p>
          Bachelor of Engineering in Artificial Intelligence & Data Science <br />
          Angadi Institute of Technology and Management <br />
          2022 – 2026 <br />
          CGPA: 8.7
        </p>

        <h3>Skills</h3>
        <ul className="skills-list">
          <li><strong>Programming:</strong> Python, C, SQL</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Machine Learning:</strong> CNN, Deep Learning, NLP</li>
          <li><strong>Libraries:</strong> TensorFlow, OpenCV, NumPy</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Core Concepts:</strong> Data Structures, Algorithms</li>
          <li><strong>Tools:</strong> Git, VS Code, Google Colab</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
