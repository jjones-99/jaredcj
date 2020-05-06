import React from "react";

const EducationComponent = () => (
  <section className={"jcj-resume-section"}>
    <h3>MY EDUCATION</h3>
    <section>
      <div className={"d-flex justify-content-between flex-wrap"}>
        <div>
          <h4 className={"jcj-resume-school-name"}>Northeastern University</h4>
          <span className="jcj-resume-school-location">Boston, MA</span>
        </div>
        <p className="jcj-resume-school-dates">Aug 2017 - May 2020</p>
      </div>
      <p className="jcj-resume-school-subgroup">
        Khoury College of Computer Science
      </p>
      <div className={"d-flex justify-content-between flex-wrap"}>
        <span className={"jcj-resume-school-degree"}>
          Bachelor of Science in Computer Science
        </span>
        <span className="jcj-resume-school-degree-date">May 2020</span>
      </div>
      <p>
        <span className={"jcj-resume-mainline"}>Honors: </span> GPA 3.99/4.0,
        Summa Cum Laude, Dean's List, National Merit Scholar, Honors Program
      </p>
      <p className={"jcj-resume-mainline"}>Classes:</p>
      <ul className="jcj-resume-school-bullets">
        <li>Web Development</li>
        <li>Software Development</li>
        <li>Object-Oriented Design</li>
        <li>Computer Systems</li>
        <li>Networks and Distributed Systems</li>
        <li>Algorithms (Graduate Level)</li>
        <li>Theory of Computation</li>
        <li>Logic and Computation</li>
        <li>Programming Languages</li>
        <li>Programming in C++</li>
        <li>Introduction to Python</li>
        <li>Artificial Intelligence</li>
        <li>Machine Learning and Artificial Intelligence</li>
        <li>Embedded Design: Enabling Robotics</li>
        <li>Linear Algebra</li>
        <li>Probability and Statistics</li>
      </ul>
    </section>
  </section>
);

export default EducationComponent;
