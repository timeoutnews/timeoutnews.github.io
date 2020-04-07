import React, { useRef } from "react";
import "../stylesheets/FeaturedArticle.css";

const FeaturedArticle = ({ title, ctgType, datePublished, imgName, url }) => {
  const imgURL = require(`../images/${imgName}`);
  const sectionStyle = {
    backgroundImage: `url(${imgURL})`,
  };

  const touchRef = useRef();

  return (
    <div className="articleContainer" style={sectionStyle}>
      <div
        className="articleInfo"
        ref={touchRef}
        onTouchStart={() => {
          touchRef.current.style.backgroundColor = "#c2c2c2";
        }}
        onTouchEnd={() => {
          touchRef.current.style.backgroundColor = "white";
          window.open(`${url}`);
        }}
      >
        <h2 id="title">{title}</h2>
        <div className="subHeading">
          <h4 id="ctgType">{ctgType}</h4>
          <h4 id="datePublished">{datePublished}</h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
