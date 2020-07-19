import React from "react";
import raycv from "../Assets/files/raycv.pdf";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Landingpage() {
  return (
    <section className="home">
      <div className="container">
        <div className="row full-screen">
          <div className="home-content">
            <div className="block">
              <h6>Hello, My Name is</h6>
              <h1>Raymond Gakwaya</h1>
              <h3>Full-stack Web Developer</h3>
              <div className="cv-btn">
                <a href={raycv} download="Raymond's CV">
                  Download CV
                </a>
                <Link
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hire-me"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
