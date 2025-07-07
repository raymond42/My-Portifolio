import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h1>Our Services</h1>
            </div>
          </div>
          <div className="row">
            <div className="services-content">
              <div className="box">
                <div className="icon">
                  <i className="fa fa-code"></i>
                </div>
                <h5>Web & Mobile App Development</h5>
                <p>
                  I build modern, responsive web and mobile applications using
                  JavaScript technologies such as the PREN and MERN stacks
                  (PostgreSQL, React, Express, Node.js, MongoDB), along with
                  frameworks like Next.js, React Native, and NestJS. I integrate
                  AWS services—such as S3, Lambda, API Gateway, and RDS—to
                  deliver scalable, cloud-native solutions. My development
                  workflow includes writing tests with Jest, Mocha, and Chai,
                  and implementing CI/CD pipelines using tools like Travis CI,
                  Jenkins, and Code Climate to ensure code quality and smooth
                  deployment.
                </p>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-laptop"></i>
                </div>
                <h5>Web App Design</h5>
                <p>
                  I design beautiful website mock-ups from wireframes, from an
                  existing website that needs improvement or from a workflow
                  supplied by a client. I convert the mock-ups to HTML and CSS
                  to a pixel perfect detail. I use tools like Figma and
                  Photoshop.
                </p>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-mobile"></i>
                </div>
                <h5>Mobile App Design</h5>
                <p>
                  I design beautiful Mobile Application mock-ups from
                  wireframes, from an existing website that needs improvement or
                  from a workflow supplied by a client. I convert the mock-ups
                  to HTML and CSS to a pixel perfect detail. I use tools like
                  Figma and Photoshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
