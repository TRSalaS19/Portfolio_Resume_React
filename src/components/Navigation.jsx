import React from "react";

function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label className="navigation__button" htmlFor="navi-toggle">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Intro
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              About Me
            </a>
          </li>
          <li className="navigation__item">
            <a href="#projects" className="navigation__link">
              Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
