import React from "react";

const Article = ({ article: { title, description, url, urlToImage } }) => {
  return (
    <article className="col-12 col-md-4 mb-5">
      <div className="card">
        <img
          className="card-img-top"
          src={
            urlToImage ||
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gardensbythebay.com.sg%2Fetc%2Fdesigns%2Fgbb%2Fclientlibs%2Fimages%2Fcommon%2Fnot_found.jpg&f=1&nofb=1"
          }
          alt={title}
          style={{
            height: "180px",
            objectFit: "cover"
          }}
        />
        <div className="card-body">
          <h2 className="card-title h5 text-truncate">{title}</h2>
          <p className="card-text text-muted text-truncate">{description}</p>
          <a href={url} className="btn btn-info stretched-link">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default Article;
