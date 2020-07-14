import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="logo">RG</div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/gakwaya-raymond-45a4b4174/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/raymond_gakwaya" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/raymond_gakwaya/?hl=en"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/gakwaya.raymond"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a href="mailto:raymond42.gr@gmail.com" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <p>&copy; 2020 copyright all right reserved</p>
        </div>
      </section>
    </div>
  );
}
