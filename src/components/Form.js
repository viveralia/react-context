import React, { Component } from "react";
import { NewsConsumer } from "../context/NewsContext";

export default class Form extends Component {
  state = {
    query: ""
  };

  render() {
    return (
      <NewsConsumer>
        {value => {
          return (
            <div className="container my-5">
              <div className="row">
                <div className="col-12 col-md-8 mx-auto">
                  <form
                    autoComplete="off"
                    onSubmit={e => {
                      e.preventDefault();
                      value.getArticles(this.state.query);
                    }}
                  >
                    <div className="row">
                      <div className="col-12 col-md-9">
                        <div className="form-group">
                          <input
                            type="search"
                            placeholder={`Search worldwide news`}
                            className="form-control"
                            value={this.state.query}
                            onChange={e => {
                              this.setState({
                                query: e.target.value
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <button
                          type="submit"
                          className="btn btn-info btn-block"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </NewsConsumer>
    );
  }
}
