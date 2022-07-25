import React, { useState } from "react";
import GridItem from "./GridItem";
import Button from "../../ui/Button/Button";
import Card from "../../Card/Card";
import "./grid.scss";

const Grid = (props) => {
  const { data } = props;
  console.log(data);
  // setting the initial quantity of images to be loaded.
  const imageNumberInitial = 12;
  const imagePerRow = 12;
  const [next, setNext] = useState(imageNumberInitial);

  // mapping the dummy data array
  const images = data?.slice(0, next).map((item) => (
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
        <ul className="grid__content">{images}</ul>
        {<Button onClick={loadMoreContentHandler} />}
      </div>
    </>
  );
};

export default Grid;
