import React from "react";
import { GoHome } from "../GoHome";
import LexaMailImg from "../../../../assets/lexa-mail.webp";
import {
  SiRadixui,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiReact,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const techStack = [
  { icon: <SiRadixui className="w-6 h-6" />, name: "Radix UI" },
  { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
  { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB" },
  { icon: <SiReact className="w-6 h-6" />, name: "React" },
];

const LexaMail = () => {
  return (
    <div className="lg:w-[600px] w-full mx-auto p-5">
      <GoHome />
      <div className="mt-5 space-y-5">
        <img
          src={LexaMailImg}
          className="rounded-lg aspect-video"
          alt="LexaMail Screenshot"
        />

        <div>
          <section className="space-y-5">
            <h1 className="font-bold text-3xl">Lexa Mail</h1>
            <p className="text-zinc-500">
              Lexa Mail is a temporary mail service providing users with
              disposable email addresses for a limited period. It helps protect
              privacy and avoid spam when signing up for online forums, trials,
              and newsletters.
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
              <li>Temporary email addresses</li>
              <li>Privacy protection</li>
              <li>Spam avoidance</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LexaMail;
