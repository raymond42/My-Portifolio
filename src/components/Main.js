import React, { Component } from "react";
import Landingpage from "./Landingpage";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import chitchat from "../Assets/images/chitchat.png";
import rastus from "../Assets/images/rastus.png";
import loyalty from "../Assets/images/loyalty.png";
import wesale from "../Assets/images/wesale.png";
import portfolio from "../Assets/images/my-portifolio.png";
import raysart from "../Assets/images/raysart.png";
import amplyfy from "../Assets/images/amplyfy.png";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          type: "dovelopment",
          category: "Web Development",
          image: rastus,
          title: "Rastus",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          role: "Full-stack Developer, DevOps",
          stack: "Nextjs, NestJs, Express",
          link: "https://rastus-prod-frontend.vercel.app/",
        },
        {
          id: 2,
          type: "dovelopment",
          category: "Web Development",
          image: chitchat,
          title: "ChitChat Website",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          role: "Full-stack Developer, DevOps",
          stack: "Javascript PREN(Postgres, React, Express, Node)",
          link: "https://onchitchat.com/",
        },

        {
          id: 3,
          type: "dovelopment",
          category: "Web Development",
          image: loyalty,
          title: "Loyalty",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          stack: "Javascript PREN(Postgres, React, Express, Node)",
          link: "https://my.zaployalty.com",
        },
        {
          id: 4,
          type: "dovelopment",
          category: "Web Development",
          image: portfolio,
          title: "Portfolio",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          stack: "React Js",
          link: "https://raymond-gakwaya-portifolio.netlify.app",
        },
        {
          id: 5,
          type: "dovelopment",
          category: "Web Development",
          image: amplyfy,
          title: "Amplyfy",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          stack: "Javascript PREN(Postgres, React, Express, Node)",
          link: "https://sad-lichterman-99bbdb.netlify.app/",
        },
        {
          id: 6,
          type: "dovelopment",
          category: "Web Design",
          image: wesale,
          title: "Wesale",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          link: "https://www.figma.com/file/70RIrUMLiVGDrGNG0HmgA2/E-COMMERCE-DESIGN?node-id=0%3A1",
        },
        {
          id: 7,
          type: "dovelopment",
          category: "Mobile Design",
          image: raysart,
          title: "Raysart Collection",
          description:
            "Authors Haven was an Andelan project which was for  creating\
                    a community of like minded authors to foster inspiration and\
                    innovation by leveraging the modern web.\
                    I worked as a full-stack developer and also\
                    DevOps of this project.",
          link: "https://www.figma.com/file/GDHhUIZckHl6QfqlpEZ052/Raysart?node-id=0%3A2",
        },
      ],
      activeCategory: "all",
    };
  }
  onChange = (category) => {
    this.setState({ activeCategory: category });
  };
  render() {
    return (
      <div style={{ overflow: "hidden !important" }}>
        <Landingpage />
        <About />
        <Services />
        <Skills />
        <Portfolio
          data={this.state.data}
          activeCategory={this.state.activeCategory}
          onChange={this.onChange}
        />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Main;
