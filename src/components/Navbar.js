import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "../App.css";
import { Link, animateScroll as scroll } from "react-scroll";

const cx = classNames.bind(styles);

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: "about", link: "About" },
        { id: "portfolio", link: "Portfolio" },
        { id: "contact-us", link: "Contact Me" },
      ],
      openSideNav: false
    };
  }

  onChange = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const { links } = this.state;
    const linksArray = [{ id: "home", link: "Home" }];
    links.map((link) => {
      if (linksArray.indexOf(link.link) < 0) {
        linksArray.push({ link: link.link, id: link.id });
      }
    });

    return (
      <header uk-sticky={`show-on-up: ${this.state.openSideNav ? false : true}; animation: uk-animation-slide-top`}>
        <div className="container">
          <div className="row">
            <div className="brand-name">
              <a className="logo" href="">
                RG
              </a>
            </div>
            <div class="ham-burger" onClick={()=> this.setState({openSideNav: !this.state.openSideNav})}>
              <i class="fa fa-bars"></i>
            </div>
            <div className="navbar">
              <ul>
                {linksArray.map((link) => (
                  <li key={link.id}>
                    <Link
                      activeClass="active"
                      to={`${link.id}`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => this.setState({openSideNav: false})}
                    >
                      {link.link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {this.state.openSideNav && (
            <div className="side-nav-modal">
               <div className="close" onClick={() => this.setState({openSideNav: false})}>
                <span>x</span>
              </div>
              <ul>
                  {linksArray.map((link) => (
                    <li key={link.id}>
                      <Link
                        activeClass="active"
                        to={`${link.id}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {link.link}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
