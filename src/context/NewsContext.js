import React, { Component, createContext } from "react";

// 1 Creating the Context
const NewsContext = createContext();

// 2. Exporting the Consumer
export const NewsConsumer = NewsContext.Consumer;

// 3. Configuring and exporting the Provider
export default class NewsProvider extends Component {
  state = {
    articles: []
  };

  getArticles = async (query = "bitcoin") => {
    const token = process.env.REACT_APP_TOKEN;
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${token}`;
    const res = await fetch(url);
    const { articles } = await res.json();
    this.setState({ articles });
  };

  render() {
    const {
      getArticles,
      state: { articles }
    } = this;

    return (
      // 3.1. The value prop receives an object with the all the information needed to manipulate the context (data and functions)
      <NewsContext.Provider value={{ articles, getArticles }}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}
