import React, { Component } from 'react'

export default class Landingpage extends Component {
    render() {
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
                                 <a href="">Download CV</a>
                             </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        )
    }
}
