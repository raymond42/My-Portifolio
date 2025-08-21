import React from "react";
import raycv from "../Assets/files/cv.pdf";
import bgImage from "../Assets/images/hero-bg.webp";
import { Link } from "react-scroll";

export default function Landingpage() {
  return (
    <section className="relative min-h-screen h-screen">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-20 bg-black/60"
      />
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Content */}
      <div className="z-10 flex items-center justify-center sm:pr-72  h-full w-full">
        <div className="text-center sm:text-start px-4 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h6 className="text-2xl text-white md:text-xl mb-2 tracking-widest">
              Hello, My Name is
            </h6>
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-2">
              Raymond Gakwaya
            </h1>
            <h3 className="text-2xl md:text-3xl mb-6 text-white">
              A Full-Stack Software Developer
            </h3>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href={raycv}
              download="Raymond's CV"
              className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            >
              Download CV
            </a>
            <Link
              to="contact-us"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition cursor-pointer"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
