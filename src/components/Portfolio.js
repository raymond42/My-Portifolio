import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "../App.css";

const cx = classNames.bind(styles);

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data: data });
  }

  handleChange = (category) => this.props.onChange(category);

  render() {
    const { activeCategory } = this.props;
    const { data } = this.state;

    const categoryArray = ["all"];
    data.map((data) => {
      if (categoryArray.indexOf(data.category) < 0) {
        categoryArray.push(data.category);
      }
    });
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h1>Sample Work</h1>
            </div>
          </div>
          <div className="row">
            <div className="filter-buttons">
              <ul>
                {categoryArray.map((category) => (
                  <li
                    className={cx({
                      active: category === activeCategory,
                    })}
                    key={category}
                    onClick={() => this.handleChange(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-gallery">
              {this.props.data.length > 0 &&
                this.props.data.map((data) => {
                  if (
                    data.category.indexOf(activeCategory) < 0 &&
                    activeCategory !== "all"
                  )
                    return null;
                  return <PortfolioItem key={data.id} data={data} />;
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Portfolio.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Portfolio;
