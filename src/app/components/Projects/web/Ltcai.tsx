import React from "react";
import { GoHome } from "../GoHome";
import LtcAIImg from "../../../../assets/ltc-screen.png";
import { SiHtml5, SiCss3, SiJavascript, SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const techStack = [
  { icon: <SiHtml5 className="w-6 h-6" />, name: "HTML5" },
  { icon: <SiCss3 className="w-6 h-6" />, name: "CSS3" },
  { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript" },
  { icon: <SiJquery className="w-6 h-6" />, name: "jQuery" },
  { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
];

const LtcAI = () => {
  return (
    <div className="lg:w-[600px] w-full mx-auto p-5">
      <GoHome />
      <div className="mt-5 space-y-5">
        <img
          src={LtcAIImg}
          className="rounded-lg aspect-video"
          alt="LtcAI Screenshot"
        />

        <div>
          <section className="space-y-5">
            <h1 className="font-bold text-3xl">LTC AI</h1>
            <p className="text-zinc-500">
              LTC AI is an innovative tool that automatically generates HTML and
              CSS components, simplifying web development and enhancing design
              efficiency. It helps developers quickly create and integrate web
              elements with ease.
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
              <li>Automatic generation of HTML components</li>
              <li>Automatic generation of CSS components</li>
              <li>Enhanced design efficiency</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LtcAI;
