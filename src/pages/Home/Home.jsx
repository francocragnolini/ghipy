import React, { useCallback, useState } from "react";
import Grid from "../../components/layout/Grid/Grid";
import Carrousel from "../../components/Slider/Slider";
import noResultIcon from "../../assets/icon-busqueda-sin-resultado.svg";
import Header from "../../components/layout/Header/Header";
import Search from "../../components/Search/Search";

import "./home.scss";
import Fallback from "../../components/Fallback/Fallback";

const Home = () => {
  const [gifos, setGifos] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState("");
  const [, set] = useState();

  // fetches the gifos
  // passed to search component via props
  const getGifosHandler = useCallback(async (term) => {
    try {
      const res = await fetch(
        `https:/api.giphy.com/v1/gifs/search?api_key=tbWaCMKEXqzhVP6mzZcPyUQg4xDxk774&q=${term}`
      );

      const data = await res.json();

      // Manipulating teh array of objects.
      const transformedData = data.data.map((item) => {
        const { title, username, id, images, url } = item;
        const transformedItem = {
          id: id,
          url: url,
          title: title,
          username: username,
          images: images,
        };
        return transformedItem;
      });
      // title
      setSelectedTerm(term);
      // saving the data in the gifos state
      setGifos(transformedData);
    } catch (error) {
      console.log(error);
    }
  });

  const cleanSearchHandler = () => {
    setSelectedTerm("");
    setGifos([]);
  };

  return (
    <>
      <section className="grid-section">
        <Header />
        <Search
          onGetGifos={getGifosHandler}
          onCleanSearch={cleanSearchHandler}
        />
        <h2 className="grid-section__heading">{selectedTerm}</h2>
        <Grid gifos={gifos} />
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
