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
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span>90</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>React Js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "92%" }}>
                      <span>90</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Next Js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "92%" }}>
                      <span>90</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>React Native</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "70%" }}>
                      <span>70</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Node js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span>90</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>TypeScript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "92%" }}>
                      <span>92</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>SQL Databases</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span>95</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>NoSQL Databases</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span>95</span>
                    </div>
                  </div>
                </div>
                <div className="skill-box">
                  <h6>Software Testing</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span>80</span>
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
