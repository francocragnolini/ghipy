import React from "react";
import ilustra from "../../../assets/ilustra_header.svg";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__ctn">
        <h1 className="header__title">
          Get inspired, search, save, and create the best{" "}
          <span className="header__uppercase">gifos</span>
        </h1>
        <div className="header__img-ctn">
          <img className="header__img" src={ilustra} alt="People having fun" />
        </div>
      </div>
    </header>
  );
};

export default Header;
