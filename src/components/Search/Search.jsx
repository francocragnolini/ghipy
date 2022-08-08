import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import closeIcon from "../../assets/close.svg";
import "./search.scss";

const Search = ({ onGetGifos, onCleanSearch }) => {
  const [term, setTerm] = useState("");

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
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <span className="search__right-icon">
          <img className="search__cross" src={closeIcon} alt="close" />
          <img
            onClick={() => {
              onGetGifos(term);
            }}
            className="search__mg-glass"
            src={searchIcon}
            alt="search"
          />
        </span>
        <div onClick={onCleanSearch}>clean</div>
      </div>

      {/* <ul
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
      </ul> */}
    </div>
  );
};

export default Search;
