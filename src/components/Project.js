import React from "react";

const Project = ({ item }) => {
  return (
    <a href={item.href}>
      <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
          <img src={item.image} alt={item.id} className="rounded-2xl cursor-pointer" />
        
      </div>

      <p>{item.name}</p>
    </div>
    </a>
    
  );
};

export default Project;
