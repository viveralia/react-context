import React from "react";
import { NewsConsumer } from "../context/NewsContext";
import Article from "./Article";

const ArticleList = () => {
  return (
    <NewsConsumer>
      {value => {
        console.log(value.articles);
        return (
          <div className="container mb-5">
            <div className="row">
              {value.articles.map((article, i) => (
                <Article key={i} article={article} />
              ))}
            </div>
          </div>
        );
      }}
    </NewsConsumer>
  );
};

export default ArticleList;
