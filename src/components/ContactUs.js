import React from "react";

export default function ContactUs() {
  return (
    <form name="contact" className="contact-us" method="post" id="contact-us">
      <input type="hidden" name="form-name" value="contact" />
      <div className="container">
        <div className="row">
          <div className="section-title text-center">
            <h1>Get In Touch</h1>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <div className="row">
              <div className="text">
                <h2>Drop Us a line</h2>
                <p>We are here to answer any question you may have</p>
              </div>
            </div>
            <div className="row space-between">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea name="message" className="form-control" placeholder="Your Message" />
              </div>
            </div>
            <div className="row text-right">
              <div className="button">
                <button type="submit">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
