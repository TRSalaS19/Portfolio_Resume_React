import React from "react";

function About() {
  return (
    <div className="about-me" id="about">
      <div className="about-me__top">
        <div className="about-me__heading">
          <p>Thank you for Visiting my Page</p>
          <span>
            My name is,
            <h2>Gustavo</h2>
          </span>
        </div>
        <div className="about-me__intro">
          <p>
            I am a Jr. Full-Stack Web Developer. My Journey in Tech started in
            2020. I started a bootcamp With
            <a href="https://devcamp.com/"> Bottega University </a>. I completed
            the course in 2021. I am now looking for project opportunities as
            well as work to help improve and better my knowledge, skills and
            understanding in the rapidly changing field. Please see below for
            langueges I have developed with and projects I have completed.
          </p>
        </div>
      </div>
      <div className="about-me__bottom">
        <div className="about-me__skills-column">
          <div className="about-me__skills-icon">
            <i className="fas fa-file-code"></i>
          </div>
          <div className="about-me__skills-heading">
            <h3>Front-End Web Developer</h3>
          </div>
          <div className="about-me__skills-description">
            <p>
              My passion is coding programs from scratch, as well as working
              together with others to create new ideas and designs. I also enjoy
              bringing design and ideas to life through Technology.
            </p>
          </div>
          <div className="about-me__skills-languages">
            <h4>Languages: </h4>
            <p>HTML, CSS, SCSS,JavaScript</p>
          </div>
          <div className="about-me__skills-tools">
            <h4>Dev Tools: </h4>
            <ul className="about-me__skills-tool-item">
              <li>React</li>
              <li>Atom</li>
              <li>Redux/ReactRedux</li>
              <li>BootStrap</li>
              <li>ESJ6</li>
              <li>GitHub</li>
              <li>CodePen</li>
              <li>Terminal</li>
            </ul>
          </div>
        </div>
        <div className="about-me__skills-column">
          <div className="about-me__skills-icon">
            <i className="fas fa-file-code"></i>
          </div>
          <div className="about-me__skills-heading">
            <h3>Back-End Web Developer</h3>
          </div>
          <div className="about-me__skills-description">
            <p>
              Along with the Front-End work, I also have experience with working
              with backend libraries. I mostly have experience with MongoDb but
              also have some experience with SQL databases as well which I am
              always looking to improve in with new projects.
            </p>
          </div>
          <div className="about-me__skills-languages">
            <h4>Databases: </h4>
            <p>MongoDB, MySql</p>
          </div>
          <div className="about-me__skills-tools">
            <h4>Dev Tools: </h4>
            <ul className="about-me__skills-tool-item">
              <li>NodeJs</li>
              <li>Mongoose</li>
              <li>Express</li>
              <li>Redux/ReactRedux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
