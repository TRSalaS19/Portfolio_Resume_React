import React from "react";
import projects from "../projects";

function Projects() {
  return (
    <div className="card-master">
      <h2 className=".projects__header">Projects</h2>
      <div className="card-container" id="#projects">
        <div className="card__bg-img">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
            alt="laptop"
            className="right-img"
          />
        </div>
        {projects.map((p) => (
          <div key={p.id} className="card">
            <div className="card__side card__front-side grid-item">
              <div className="card__heading">
                <h3>{p.projectName}</h3>
              </div>
              <div className="card__img-container" variant="top">
                <img src={p.image} alt="" />
              </div>
            </div>
            <div className="card__side card__back-side">
              <div className="card__frontEnd">
                <h4>Front-End Used: </h4>
                <p>{p.frontEnd}</p>
              </div>
              <div className="card__backEnd">
                <h4>Back-End Used: </h4>
                <p>{p.backEnd}</p>
              </div>
              <div className="card__description">
                <h4>About This Project: </h4>
                <p>{p.desc}</p>
              </div>

              <a href={p.route} className="card__link">
                Go To Page
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
