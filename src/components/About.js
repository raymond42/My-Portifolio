import React, { Component } from "react";
import ray from "../Assets/images/ray.JPG";

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>About me</h1>
              <p className="small text-uppercase">Information About Me</p>
            </div>
          </div>
          <div className="row">
            <div className="about-content">
              <div className="row">
                <div className="img">
                  <img src={ray} alt="about-img" />
                </div>
                <div className="text">
                  <h4>I'M Raymond Gakwaya</h4>
                  <h6>
                    A <span>Software Engineer</span> based in{" "}
                    <span>Rwanda</span>
                  </h6>
                  <p>
                    I'm a full-stack software Developer with proven experience
                    delivering robust, scalable web and mobile applications. I
                    specialize in full-stack development using the PREN and MERN
                    stacks, with strong proficiency in TypeScript, Next.js,
                    React Native, NestJS, and AWS services. I'm passionate about
                    designing end-to-end solutions, driving innovation, and
                    aligning technical execution with business goals in agile
                    environments. In my free time, I enjoy hanging out with
                    friends, playing basketball, and watching movies.
                  </p>
                  <div className="info">
                    <div className="list">
                      <label>Email:</label>
                      <p>raymond42.gr@gmail.com</p>
                    </div>
                    <div className="list">
                      <label>Linkedin:</label>
                      <p>Raymond Gakwaya</p>
                    </div>
                    <div className="list">
                      <label>Github:</label>
                      <p>@raymond42</p>
                    </div>
                    <div className="list">
                      <label>Twitter:</label>
                      <p>@raymond_gakwaya</p>
                    </div>
                    <div className="list">
                      <label>Instagram:</label>
                      <p>@raymond_gakwaya</p>
                    </div>
                    <div className="list">
                      <label>Phone Number:</label>
                      <p>+250 789 932 381</p>
                    </div>
                    <div className="list">
                      <label>Adress:</label>
                      <p>Rwanda, Kigali, KN 12 Avenue</p>
                    </div>
                    <div className="list">
                      <label>Freelance:</label>
                      <p>Available</p>
                    </div>

                    <div className="social">
                      <a
                        href="https://linkedin.com/in/raymond-gakwaya-45a4b4174"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a
                        href="https://twitter.com/raymond_gakwaya"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/raymond_gakwaya/?hl=en"
                        target="_blank"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="mailto:raymond42.gr@gmail.com" target="_blank">
                        <i className="fa fa-envelope"></i>
                      </a>
                      <a href="https://github.com/raymond42" target="_blank">
                        <i className="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
