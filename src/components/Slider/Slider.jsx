import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DUMMY_DATA } from "./dummy-data";
import Card from "../Card/Card";
import "./slider.scss";

const Carrousel = () => {
  const [trends, setTrends] = useState([]);

  // fetching trends
  const fetchTrends = async () => {
    try {
      const res = await fetch(
        "https:/api.giphy.com/v1/gifs/trending?api_key=tbWaCMKEXqzhVP6mzZcPyUQg4xDxk774"
      );
      const data = await res.json();
      console.log(data.data);
      setTrends(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {trends?.slice(0, 12).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.images.fixed_height.url}
          maxImage={item.images.original.url}
          user={item.username}
        />
      ))}
    </Slider>
  );
};

export default Carrousel;
