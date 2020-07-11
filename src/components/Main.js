import React, { Component } from 'react';
import Landingpage from './Landingpage';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Portfolio from './Portfolio';
import authors from '../Assets/images/authors.png'
import automart from '../Assets/images/automart.png'
import tekaccess from '../Assets/images/tekaccess.png'
import erental from '../Assets/images/erental.png'
import wesale from '../Assets/images/wesale.png'
import portfolio from '../Assets/images/portfolio.png'
import raysart from '../Assets/images/raysart.png'
import GetInTouch from './GetInTouch';
import ContactUs from './ContactUs';


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    type: 'dovelopment',
                    category: 'Web Development',
                    image: authors,
                    title: 'Authors Haven',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    role: "Full-stack Developer, DevOps",
                    stack: 'Javascript PREN(Postgres, React, Express, Node)',
                    link: 'https://ah-coding-geeks-fr.herokuapp.com/'
                },
                {
                    id: 2,
                    type: 'dovelopment',
                    category: 'Web Design',
                    image: wesale,
                    title: 'Wesale',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    link: 'https://www.figma.com/file/70RIrUMLiVGDrGNG0HmgA2/E-COMMERCE-DESIGN?node-id=0%3A1'
                },
                {
                    id: 3,
                    type: 'dovelopment',
                    category: 'Web Development',
                    image: tekaccess,
                    title: 'Tekaccess',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    role: "Full-stack Developer, DevOps",
                    stack: 'Javascript PREN(Postgres, React, Express, Node)',
                    link: 'https://www.tekaccess.info'
                },
                {
                    id: 4,
                    type: 'dovelopment',
                    category: 'Web Development',
                    image: automart,
                    title: 'Automart',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    stack: 'Javascript PREN(Postgres, React, Express, Node)',
                    link: 'https://raymond42.github.io/Auto-Mart/UI'
                },
                {
                    id: 5,
                    type: 'dovelopment',
                    category: 'Web Development',
                    image: portfolio,
                    title: 'Portfolio',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    stack: 'React Js',
                    link: 'http://localhost:3000'
                },
                {
                    id: 6,
                    type: 'dovelopment',
                    category: 'Web Design',
                    image: erental,
                    title: 'E-Rental',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    link: 'https://www.figma.com/file/Buw05KRbBBYzMj9ol8JwgKXE/E-Rental-View-all-houses-page'
                },
                {
                    id: 7,
                    type: 'dovelopment',
                    category: 'Mobile Design',
                    image: raysart,
                    title: 'Raysart Collection',
                    description: "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
                    link: 'https://www.figma.com/file/GDHhUIZckHl6QfqlpEZ052/Raysart?node-id=0%3A2'
                }
            ],
            activeCategory: 'all'
        };
    }
    onChange = (category) => {
        this.setState({activeCategory: category})
    }
    render() {
        return (
          <div>
            <Landingpage />
            <About />
            <Services />
            <Skills />
            <Portfolio
            data={this.state.data} 
            activeCategory={this.state.activeCategory}
            onChange={this.onChange}/>
            <ContactUs />
          </div>
        );
    }
}

export default Main;
