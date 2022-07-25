import React from "react";
import iconFace from "../../../assets/icon_facebook.svg";
import iconTwitter from "../../../assets/icon-twitter.svg";
import iconInsta from "../../../assets/icon_instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <p className="footer__share">Share to:</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://www.facebook.com/">
              <img className="footer__icon" src={iconFace} alt="Facebook" />
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://twitter.com/">
              <img className="footer__icon" src={iconTwitter} alt="Twitter" />
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://www.instagram.com/">
              <img className="footer__icon" src={iconInsta} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">
        © <span className="footer__copyright-item">gifos</span> 2022 All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
