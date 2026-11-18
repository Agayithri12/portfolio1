
import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h2>Professional Experience</h2>

      {/* Flexio Experience */}
      <div className="experience-card">
        <h3>Flexio</h3>
        <p>
          <strong>AI Data Associate (Data Annotation)</strong> | 
          Jun 2026 — Present
        </p>
        <ul>
          <li>
            Perform data annotation and labeling tasks to support AI
            and machine learning model training.
          </li>
          <li>
            Review and classify datasets according to project guidelines
            and annotation requirements.
          </li>
          <li>
            Validate annotated data to ensure accuracy, consistency,
            and quality standards.
          </li>
          <li>
            Identify and correct annotation errors while maintaining
            data quality.
          </li>
          <li>
            Prepare structured datasets for AI model training and development.
          </li>
        </ul>
      </div>

      {/* Pentagon Space Internship */}
      <div className="experience-card">
        <h3>Pentagon Space Pvt. Ltd.</h3>
        <p>
          <strong>Python Full Stack Developer Intern</strong> | 
          Jan 2026 — Jun 2026
        </p>
        <ul>
          <li>
            Developed web applications using Python, Django, HTML,
            CSS, and JavaScript.
          </li>
          <li>
            Built backend functionality and REST APIs for application features.
          </li>
          <li>
            Worked with MySQL to manage databases and application data.
          </li>
          <li>
            Implemented authentication and CRUD operations.
          </li>
          <li>
            Tested and debugged application features during development.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
