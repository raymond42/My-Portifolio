import React, { Component } from "react";
import rayworking from "../Assets/images/working.jpg";

export default class Skills extends Component {
  render() {
    return (
      <section className="skills">
        <div className="container">
          <div className="row align-items-center">
            <div className="skills-content">
              <div className="row">
                <div className="section-title">
                  <h1>Proffessional Skills</h1>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="skill-box">
                  <h6>HTML5</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span>95</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>CSS/SASS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "92%" }}>
                      <span>92</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Javascript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "70%" }}>
                      <span>70</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>React Js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "72%" }}>
                      <span>72</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Node js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span>80</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>SQL Databases</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "70%" }}>
                      <span>70</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Python/Django</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "60%" }}>
                      <span>60</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>GraphQL</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "60%" }}>
                      <span>60</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Software Testing</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "62%" }}>
                      <span>62</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>UX/UI Design</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "70%" }}>
                      <span>70</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img alt="rayimg" src={rayworking} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
