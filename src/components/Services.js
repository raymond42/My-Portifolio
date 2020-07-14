import React, { Component } from 'react'

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
                                <h5>Web Development</h5>
                                <p>I build a modern responsive web application in the JavaScript stack PREN (PostgreSQL,
                                    React, Express, Node)/Python/Django, the app have to be tested 
                                    using tools like Jest and Mocha &Chai.I also implement CI/CD to ensure quality of the app
                                    using tools such as Travis, Jenkins and Code Climate.</p>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <i className="fa fa-laptop"></i>
                                </div>
                                <h5>Web App Design</h5>
                                <p>I design beautiful website mock-ups from wireframes,
                                    from an existing website that needs improvement or from a workflow supplied by a client.
                                    I convert the mock-ups to HTML and CSS to a pixel perfect detail.
                                    I use tools like Figma and Photoshop.</p>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <i className="fa fa-mobile"></i>
                                </div>
                                <h5>Mobile App Design</h5>
                                <p>I design beautiful Mobile Application mock-ups from wireframes,
                                    from an existing website that needs improvement or from a workflow supplied by a client.
                                    I convert the mock-ups to HTML and CSS to a pixel perfect detail.
                                    I use tools like Figma and Photoshop.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
