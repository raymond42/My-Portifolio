import React, { Component } from 'react'
import development from '../__mocks__/development';

export default class Web extends Component {
    componentDidMount(){
        console.log('development', development);
        
    }
    render() {
        const {data} = development;
        
        return (
            <section className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="portfolio-gallery">
                            {data.length !== 0 ? (
                                data.map(data => (
                                    <div className="item" data-id="development">
                                        <img src={data.image} alt="portfolio"/>
                                        <div className="overlay">
                                            <span className="fa fa-plus"></span>
                                        <h4>{data.category}</h4>
                                        </div>
                                    </div>
                                ))
                            ):(
                                <h4>No products</h4>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
