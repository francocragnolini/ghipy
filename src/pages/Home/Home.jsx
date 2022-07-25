import React, { useCallback, useState } from "react";
import Grid from "../../components/layout/Grid/Grid";
import Carrousel from "../../components/Slider/Slider";
import noResultIcon from "../../assets/icon-busqueda-sin-resultado.svg";
import Header from "../../components/layout/Header/Header";
import Search from "../../components/Search/Search";
import { DUMMY_DATA } from "../../components/layout/Grid/dummy-data.js";

import "./home.scss";
import Fallback from "../../components/Fallback/Fallback";

const Home = () => {
  const [gifos, setGifos] = useState([]);

  const getGifosHandler = useCallback(async (term) => {
    try {
      setGifos([]);
      const res = await fetch(
        `https:/api.giphy.com/v1/gifs/search?api_key=tbWaCMKEXqzhVP6mzZcPyUQg4xDxk774&q=${term}`
      );

      const data = await res.json();
      setGifos(data.data);
    } catch (error) {
      console.log(error);
    }
  });

  console.log(gifos);

  return (
    <>
      <section className="grid-section">
        <Header />
        <Search onGetGifos={getGifosHandler} />
        <h2 className="grid-section__heading">Pets</h2>
        <Grid data={gifos} />
        <Fallback image={noResultIcon} text="Please try a different search." />
      </section>

      <section className="trending-section">
        <div className="trending-section__description">
          <h2 className="trending-section__heading">
            Trending <span>Gifos</span>
          </h2>
          <p className="trending-section__text">
            Check out the latest GIFOS from our community.
          </p>
        </div>
        <Carrousel />
      </section>
    </>
  );
};

export default Home;
