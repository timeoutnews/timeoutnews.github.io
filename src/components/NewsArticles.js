import React, { useState } from "react";
import "../stylesheets/FeaturedArticle.css";
import FeaturedArticle from "./FeaturedArticle";

const NewsArticles = () => {
  const [news] = useState([
    {
      title: "Canada banning oil, gas and mining from marine-protected areas",
      ctgType: "Environment",
      datePublished: "Mar 31, 2020",
      imgName: "Picture_1.jpg",
      url:
        "https://nationalpost.com/pmn/news-pmn/canada-news-pmn/canada-banning-oil-gas-and-mining-work-from-marine-protected-areas",
    },
    {
      title:
        "New COVID-19 ‘Citizen Science’ Project Lets Any Adult with a Smartphone Help Fight Coronavirus",
      ctgType: "Health",
      datePublished: "Mar 19, 2020",
      imgName: "woman-smartphone.jpg",
      url:
        "https://www.ucsf.edu/news/2020/03/417026/new-covid-19-citizen-science-initiative-lets-any-adult-smartphone-help-fight",
    },
    {
      title:
        "From Italy to Seattle, Reports Find Social Restrictions Are Working to Curb New COVID-19 Cases",
      ctgType: "Worldwide",
      datePublished: "Mar 14, 2020",
      imgName: "Thank-U-sign.jpg",
      url:
        "https://www.goodnewsnetwork.org/world-reports-find-social-restrictions-are-curbing-new-covid-19-cases/",
    },
    {
      title: "NYC Puts Fighting Climate Change In Law",
      ctgType: "Environment",
      datePublished: "Mar 31, 2020",
      imgName: "new_york_city.jpg",
      url:
        "https://www.theguardian.com/us-news/2019/apr/18/new-york-city-buildings-greenhouse-gas-emissions",
    },
  ]);

  return (
    <div className="scrollNews">
      {news.map((article) => (
        <FeaturedArticle
          title={article.title}
          ctgType={article.ctgType}
          datePublished={article.datePublished}
          imgName={article.imgName}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default NewsArticles;
