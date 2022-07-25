import React from "react";
import "./navigation.scss";
const Navigation = () => {
  return (
    <header className="navigation">
      <div className="navigation__logo">
        Logo
        <img src="" alt="BC logo" />
      </div>
      <input className="navigation__checkbox" id="checkbox" type="checkbox" />
      <label className="navigation__button" htmlFor="checkbox">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__bg">&nbsp;</div>
      <ul className="navigation__list">
        <li className="navigation__item">Episodios</li>
        <li className="navigation__item">Entrevistas </li>
        <li className="navigation__item">Topicos</li>
      </ul>
    </header>
  );
};

export default Navigation;
