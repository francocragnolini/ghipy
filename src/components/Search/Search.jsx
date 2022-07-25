import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import closeIcon from "../../assets/close.svg";
import "./search.scss";

const Search = ({ onGetGifos }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  // fetching data
  // saving the data in suggestions

  const onSearchSubmit = async (term) => {
    try {
      const res = await fetch(
        `https:/api.giphy.com/v1/tags/related/${term}?api_key=tbWaCMKEXqzhVP6mzZcPyUQg4xDxk774`
      );
      const data = await res.json();
      const transformedData = data.data.slice(0, 4);
      setSuggestions(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  // clears the results
  const clearResults = () => setSuggestions([]);

  // debouncing term
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  //
  useEffect(() => {
    if (term !== "" && term.length >= 3) {
      onSearchSubmit(term);
    } else {
      clearResults();
    }
  }, [term]);

  return (
    <div className="search">
      <div className="search__input-box">
        <span className="search__left-icon">
          <img src={searchIcon} alt="search" />
        </span>
        <input
          className="search__input"
          type="text"
          placeholder="Search GIFOS and more"
          value={debouncedTerm}
          onChange={(e) => setDebouncedTerm(e.target.value)}
        />
        <span className="search__right-icon">
          <img className="search__cross" src={closeIcon} alt="close" />
          <img
            onClick={(term) => {
              onGetGifos(term);
            }}
            className="search__mg-glass"
            src={searchIcon}
            alt="search"
          />
        </span>
      </div>

      <ul
        className={
          suggestions.length === 0
            ? "search__list"
            : "search__list search__list-active "
        }
      >
        {suggestions.map((item, index) => (
          <li key={index} className="search__item">
            <span className="search__item-icon">
              <img className="" src={searchIcon} alt="search" />
            </span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
