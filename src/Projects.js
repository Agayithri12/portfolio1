import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: "AI-Powered FNAC Breast Cancer Detection",
      description: "Built a CNN-based deep learning model achieving 92% accuracy.",
      technologies: "Python, CNN, Deep Learning, OpenCV, TensorFlow, Keras, NumPy, Image Processing"
    },
    {
      title: "AI Job Market Dashboard",
      description: "Interactive dashboard analyzing AI & Data Science job trends.",
      technologies: "Python, Streamlit, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Data Visualization, Data Analysis"
    },
    {
      title: "AI-Based Automated Fashion Design System",
      description: "Machine learning-based design generator. Secured 3rd place in competition.",
      technologies: "Python, Machine Learning, Deep Learning, Artificial Intelligence, Image Processing, Computer Vision, NumPy, TensorFlow"
    }
  ];

  const [showTech, setShowTech] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button 
              className="btn" 
              onClick={() => setShowTech(showTech === index ? null : index)}
            >
              {showTech === index ? "Hide Technologies" : "Show Technologies"}
            </button>
            {showTech === index && (
              <p className="tech-used"><strong>Technologies:</strong> {project.technologies}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
