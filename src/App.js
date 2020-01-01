import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsProvider from "./context/NewsContext";
import ArticleList from "./components/ArticleList";

const App = () => {
  return (
    <NewsProvider>
      <Header title="News App with Context" />
      <Form />
      <ArticleList />
    </NewsProvider>
  );
};

export default App;
