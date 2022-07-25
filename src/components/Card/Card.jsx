import React, { useState } from "react";
import iconFav from "../../assets/icon-fav.svg";
import iconMax from "../../assets/icon-max-normal.svg";
import iconDownload from "../../assets/icon-download.svg";
import MaxGif from "../../MaxGif/MaxGif";
import "./card.scss";
import GridItem from "../layout/Grid/GridItem";

const Card = (props) => {
  const { user, title, image, maxImage } = props;
  // open a closes the modal
  const [modalIsShown, setModalIsShown] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    setModalIsShown(true);
  };

  const closeModalHandler = (e) => {
    e.preventDefault();
    setModalIsShown(false);
  };

  return (
    <>
      <div onClick={openModalHandler} className="card">
        <img className="card__img" src={image} alt={title} />
        <div className="card__overlay">
          <div className="card__content">
            <div className="card__buttons">
              <button className="card__btn">
                <img src={iconFav} alt="Add to favorites" />
              </button>
              <button onClick={openModalHandler} className="card__btn">
                <img src={iconMax} alt="Maximize" />
              </button>
              <button className="card__btn">
                <img src={iconDownload} alt="Download" />
              </button>
            </div>
            <h4 className="card__user">{user}</h4>
            <p className="card__title">{title}</p>
          </div>
        </div>
      </div>
      {modalIsShown && (
        <MaxGif
          image={maxImage}
          title={title}
          user={user}
          onClose={closeModalHandler}
        />
      )}
    </>
  );
};

export default Card;
