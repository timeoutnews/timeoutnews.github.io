import React from "react";
import "./stylesheets/App.css";
import NewsArticles from "./components/NewsArticles";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NewsArticles />
    </div>
  );
};

export default App;
