import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="brand-name">
                            <a className="logo" href="">RAYMOND</a>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li><a href="" className="active">Home</a></li>
                                <li><Link to="/about">About</Link></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;
