import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Muhammad Yusyfi Fuada</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.twitch.tv/upiapaupu"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-twitch'></i>

          </a>

          <a
            href="https://www.instagram.com/yfuaaad_/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/enrqxx"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-github' ></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; enrqxx. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
