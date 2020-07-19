import React from "react";

export default function PortfolioItem(data) {
  return (
    <div className="item">
      <img src={data.data.image} alt="portfolio" />
      <div className="overlay">
        <a href={data.data.link} target="_blank">
          <span className="fa fa-link"></span>
        </a>
        <h4>{data.data.category}</h4>
      </div>
    </div>
  );
}
