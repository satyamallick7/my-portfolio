import React from "react";
import Copywriter from "../assets/img/developer.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import resume from "../assets/img/Satya-Resume.pdf"

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-hero lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">Hey, I'm Satya 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewrite) => {
                  typewrite
                    .typeString("Web Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("UI/UX Designer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("MERN Stack <br/>Developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Creating modern and responsive design for web and mobile using latest technology.
            </p>
            <div className="flex gap-7">
            <Link to="contact" spy={true} duration={500} smooth={true} offset={-70} className="transition-all duration-300">
              <button
                className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"
              >
                Connect With Me
              </button>
            </Link>
            <a href={resume} target="_blank" rel="noreferrer">
              <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">Download CV</button>
            </a>

            </div>
            
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <img src={Copywriter} alt="copywriter" className="pt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
