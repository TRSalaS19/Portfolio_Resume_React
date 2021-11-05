import React from "react";
import contactImg from "../media/shake.svg";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer_container">
      <footer className="footer" id="#contact">
        <div className="footer__left-side">
          <div className="footer__logo-box">
            <h2>&#123;GRS_DEV&#125;</h2>
          </div>
          <div className="footer__links">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="https://www.linkedin.com/in/gustavo-ruiz-salas-407891102/"
                  className="footer__link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="footer__item">
                <a href="https://github.com/gusaruiz" className="footer__link">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__info-container">
            <i className="fas fa-mobile-alt footer__contact-icon"></i>
            <p>510-417-6757</p>
          </div>
          <div className="footer__info-container">
            <i className="fas fa-envelope-square footer__contact-icon"></i>
            <p>GRuiSalas@icloud.com</p>
          </div>
          <div className="footer__copyright">
            Built by Gustavo Salas &copy; {new Date().getFullYear()} by Gustavo
            Salas.
          </div>
        </div>
        <div className="footer__right-side">
          <div className="footer__contact" id="contact">
            <div className="footer__contact-img">
              <img src={contactImg} alt="shake" />
            </div>
            <div className="footer__right-message-detail">
              <h2>Message Me</h2>
              <form
                action="mailto:gruiz0803@icloud.com"
                onSubmit={handleSubmit}
              >
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
