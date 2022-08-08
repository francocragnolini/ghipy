import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import Card from "../../Card/Card";
import "./grid.scss";
import Fallback from "../../Fallback/Fallback";

// actualizar el estado de next a 0 cuando cierro una busqueda.
const Grid = (props) => {
  const { gifos } = props;
  // setting the initial quantity of images to be loaded.
  const imageNumberInitial = 12;
  const imagePerRow = 12;
  const [next, setNext] = useState(imageNumberInitial);

  const renderedGifos = gifos?.slice(0, next).map((item) => (
    <li key={item.id}>
      <Card
        user={item.username}
        title={item.title}
        image={item.images.fixed_height.url}
        maxImage={item.images.original.url}
      />
    </li>
  ));

  // load more functionality
  const loadMoreContentHandler = (e) => {
    e.preventDefault();
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div className="grid">
        <ul className="grid__content">{renderedGifos}</ul>
        <Button onClick={loadMoreContentHandler} />
      </div>
    </>
  );
};

export default Grid;
