import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { DraftingCompass} from "lucide-react";

import { AnimatedBeamDemo } from "./Animated";

gsap.registerPlugin(ScrollTrigger);
export const Frame = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".scroll-intro",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: ".scroll-intro",
          start: "bottom bottom",
          end: "start start",
          onEnter: () => {
            gsap.fromTo(
              ".stagger-intro",
              { opacity: 0 },
              { opacity: 1, stagger: 0.5 }
            );
          },
          once: true,
        },
        opacity: 1,
        x: 0,
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const frameworks = [
    {
      title: "Stripe",
      url: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
    },
    {
      title: "React",
      url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      title: "Express",
      url: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    },
    {
      title: "NodeJS",
      url: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      title: "MongoDB",
      url: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
    },
    {
      title: "TailwindCSS",
      url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
    },
    {
      title: "JavaScript",
      url: "https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg",
    },
    {
      title: "TypeScript",
      url: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    },
    {
      title: "Github",
      url: "https://upload.vectorlogo.zone/logos/github/images/47bfd2d4-712f-4dee-9315-f99c611b7598.svg",
    },
  ];

  return (
    <div className="scroll-intro space-y-5 ">
      <h2 className="stagger-intro flex items-center">
        <DraftingCompass />
        TOOLING
      </h2>
      <h1 className="stagger-intro text-2xl font-bold">
        Advanced Web Development: Building Strong & Simple Solutions
      </h1>
      <p className="stagger-intro text-md text-zinc-500 mb-5">
        I use modern technologies like React, Node.js, and MongoDB in my web
        development projects to create functional, fast, and user-friendly
        websites. React helps me build interactive interfaces efficiently, while
        Node.js ensures fast server-side performance. MongoDB supports quick
        data handling, enhancing site responsiveness. I also incorporate
        frameworks like Express for reliable server management and TailwindCSS
        for quick and attractive styling. These tools together allow me to
        deliver high-quality web solutions that are both powerful and easy to
        use.
      </p>

      {/* <div className="stagger-intro flex gap-5 flex-wrap">
        {frameworks.map((framework, index) => (
          <div key={index} draggable="false">
            <img
              src={framework.url}
              alt={framework.title}
              className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div> */}

      <div className="stagger-intro">
        <AnimatedBeamDemo />
      </div>
    </div>
  );
};
