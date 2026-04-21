import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-photo">
          <img src="/myphoto.jpeg" alt="Gayithri" className="profile-photo" />
        </div>
        <div className="home-text">
          <h1>Hello, I'm Gayithri</h1>
          <h2>AI & Data Science Undergraduate</h2>
          <p>Passionate about building professional web apps and AI projects.</p>
          <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
