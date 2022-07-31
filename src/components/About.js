import React from "react";
import Image from "../assets/img/modeling.png";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <img
            src={Image}
            alt="about"
            className="object-cover h-full w-[560px] md:mx-auto lg:mx-0 pb-4"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="3xl lg:text-4xl font-body font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-50 before:-top-[2rem] before:hidden before:lg:block">
                Satya Mallick
              </h2>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-accent ">
              I’m a graduate from BITS Pilani Dubai Campus with a bachelor’s degree in Computer Science. Im a positive, enthusiastic and competent full stack developer with wide range of skills and qualities 
              that will graratuee I will perform highly in any job. I take my work seriously and always ensure my skills are kept uptodate within the rapidly changing industry. 
              My field of Interest's are building new Web Technologies and Products and also in areas related to UX/UI design and Blockchain technology. <br/>
              I have experience of developing products with Backend technology like NodeJS and Modern Javascript Library and Frameworks  like React.js and Next.js

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
