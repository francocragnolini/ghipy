import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import catImage from "../assets/cat.jpeg";
import closeIcon from "../assets/close.svg";
import iconFav from "../assets/icon-fav.svg";
import iconDownload from "../assets/icon-download.svg";

import "./maxgif.scss";

const DUMMY_DATA = {
  id: 1,
  url: catImage,
  title: "Best cat ever",
  user: "franco cragnolini",
};

const MaxGif = (props) => {
  return (
    <Modal>
      <div className="max">
        <img
          onClick={props.onClose}
          className="max__close"
          src={closeIcon}
          alt="close"
        />
        <img className="max__img" src={props.image} alt="" />
        <div className="max__content">
          <div className="max__info">
            <p className="max__user">{props.user}</p>
            <p className="max__title">{props.title}</p>
          </div>
          <div className="max__buttons">
            <button className="max__btn">
              <img src={iconDownload} alt="Download" />
            </button>
            <button className="max__btn">
              <img src={iconFav} alt="Add to favorites" />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MaxGif;
