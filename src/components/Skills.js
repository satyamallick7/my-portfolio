import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return( <div className="flex items-center justify-center">
                <img src={skill.image} alt={index} />
            </div> )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
