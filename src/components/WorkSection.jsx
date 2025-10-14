import React from "react";
import Top1 from "../assets/images/TOP1.png";
import Top2 from "../assets/images/TOP2.png";
import Top3 from "../assets/images/TOP3.png";
import Top4 from "../assets/images/TOP4.png";   
import Top5 from "../assets/images/TOP5.png";
import Bottom1 from "../assets/images/Bottom1.png";
import Bottom2 from "../assets/images/Bottom2.png";
import Bottom3 from "../assets/images/Bottom3.png";
import Bottom4 from "../assets/images/Bottom4.png";
import Bottom5 from "../assets/images/Bottom5.png";


//asdfghgfdfghj
//fghjhgfghjk


const projects = [
  {
    name: "Insigne",
    image: "/images/insigne.jpg",
  },
  {
    name: "Logico",
    image: "/images/logico.jpg",
  },
  {
    name: "Nightwish",
    image: "/images/nightwish.jpg",
  },
];

export default function WorkSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="flex justify-between items-center border-b border-[#A28750] pb-2 mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase">Work</h2>
          <a
            href="#"
            className="text-sm uppercase tracking-wide text-white hover:text-[#A28750] transition"
          >
            All Projects
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="text-center">
              <div className="rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:scale-105 transition-transform duration-300 shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[250px] object-cover rounded-2xl"
                />
              </div>
              <p className="mt-4 text-gray-400 text-lg font-medium tracking-wide">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
