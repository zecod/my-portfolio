import React from "react";
import { GoHome } from "../GoHome";
import VercellImg from "../../../../assets/vercelli-screen.png";
import {
  SiRadixui,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiStripe,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const techStack = [
  { icon: <SiRadixui className="w-6 h-6" />, name: "Radix UI" },
  { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
  { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB" },
  { icon: <SiReact className="w-6 h-6" />, name: "React" },
  { icon: <SiStripe className="w-6 h-6" />, name: "Stripe" },
];

const Vercelli = () => {
  return (
    <div className="lg:w-[600px] w-full  mx-auto p-5 ">
      <GoHome />
      <div className="mt-5 space-y-5">
        <img
          src={VercellImg}
          className="rounded-lg aspect-video"
          alt="Vercelli Screenshot"
        />

        <div>
          <section className="space-y-5">
            <h1 className="font-bold text-3xl">Vercelli</h1>
            <p className="text-zinc-500">
              Vercelli is a new text-to-speech (TTS) project that turns written
              text into clear, lifelike speech. It works in over 20 languages,
              making it useful for people who speak different languages.
              Vercelli provides high-quality sound and has a REST API with
              detailed instructions, making it easy for developers to add its
              TTS features to their apps.
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
              <li>Supports over 20 languages</li>
              <li>High-quality, lifelike audio output</li>
              <li>Robust REST API with comprehensive documentation</li>
              <li>
                Coming soon: SSML (Speech Synthesis Markup Language) support
              </li>
              <li>Voice cloning for custom voices</li>
              <li>Voice isolation for cleaner audio output</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vercelli;
