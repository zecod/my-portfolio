import React from "react";
import { GoHome } from "../GoHome";
import RonaLiImg from "../../../../assets/rona-l.webp";
import { SiHtml5, SiCss3, SiJquery, SiOpenai } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const techStack = [
  { icon: <SiHtml5 className="w-6 h-6" />, name: "HTML5" },
  { icon: <SiCss3 className="w-6 h-6" />, name: "CSS3" },
  { icon: <SiJquery className="w-6 h-6" />, name: "jQuery" },
  { icon: <SiOpenai className="w-6 h-6" />, name: "OpenAI" },
  { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
];

const RonaLi = () => {
  return (
    <div className="lg:w-[600px] w-full mx-auto p-5">
      <GoHome />
      <div className="mt-5 space-y-5">
        <img
          src={RonaLiImg}
          className="rounded-lg aspect-video"
          alt="Rona Li Screenshot"
        />

        <div>
          <section className="space-y-5">
            <h1 className="font-bold text-3xl">Rona Li</h1>
            <p className="text-zinc-500">
              Rona Li is a versatile online platform that offers file uploading,
              URL shortening, and note-taking functionalities to streamline your
              digital workflow. It helps users manage their digital tasks more
              efficiently and effectively.
            </p>
            <div className="flex flex-wrap gap-5 text-zinc-500">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center">
                  {tech.icon}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
            <ul className="list-disc list-inside text-zinc-500">
              <li>File uploading</li>
              <li>URL shortening</li>
              <li>Note-taking</li>
              <li>Integration with OpenAI for enhanced functionalities</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RonaLi;
