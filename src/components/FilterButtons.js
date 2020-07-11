import React from "react";

export default function FilterButtons() {
  return (
    <div>
      <div className="row">
        <div className="section-title text-center">
          <h1>Some Of My Work</h1>
        </div>
      </div>
      <div className="row">
        <div className="filter-buttons">
          <ul>
            <li className="active" data-target="all">
              All
            </li>
            <li data-target="development">Web Development</li>
            <li data-tagret="design">Web Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
