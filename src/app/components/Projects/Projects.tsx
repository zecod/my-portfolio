import React from "react";
import { FolderOpenDot } from "lucide-react";
import { DialogProjects } from "./Dialog";
import VercellImg from "../../../assets/vercelli-screen.png";
import RonaLi from "../../../assets/rona-l.webp";
import ltcAI from "../../../assets/ltc-screen.png";
import LexaMail from "../../../assets/lexa-mail.webp";
import { BentoGridItem } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
export const projects = [
  {
    title: "Vercelli",
    ngLink: "vercelli",
    img: VercellImg,
    description:
      "Vercelli is a cutting-edge text-to-speech (TTS) project designed to enhance accessibility and user interaction by seamlessly converting text into clear, lifelike audio across a wide range of languages. With support for over 20+ languages, Vercelli ensures high-quality audio output, catering to diverse linguistic needs. Additionally, Vercelli offers a robust REST API complete with comprehensive documentation, empowering developers to integrate its powerful TTS capabilities into their applications with ease.",
    tools: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Radix UI",
      "Rest APi",
      "Stripe",
      "JWT",
    ],
    ui: {
      title: "Vercelli",
      description:
        "Vercelli is a text-to-speech project that seamlessly converts text into speech. ",
      header: (
        <div className="h-60  bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">VERCELLI</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
  {
    title: "Rona Li",
    ngLink: "ronali",
    img: RonaLi,
    description:
      "Rona Li is a versatile online platform that offers file uploading, URL shortening, and note-taking functionalities to streamline your digital workflow.",
    tools: ["HTML/CSS", "jQuery", "OpenAI", "Node.js", "MongoDB"],
    ui: {
      title: "Rona Li",
      description:
        "Rona Li is a versatile online platform that offers file uploading, URL shortening.",
      header: (
        <div className="h-60  bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">RONA LI</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
  {
    title: "LTC AI.",
    ngLink: "ltcai",
    img: ltcAI,
    description:
      "LTC AI is an innovative tool that automatically generates HTML and CSS components, simplifying web development and enhancing design efficiency.",
    tools: ["HTML/CSS", "JavaScript", "jQuery", "Node.js", "nedb"],
    ui: {
      title: "LTC AI.",
      description:
        "LTC AI is an innovative tool that automatically generates HTML and CSS components.",
      header: (
        <div className="h-60  bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">LTC AI.</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
  {
    title: "Lexa Mail",
    ngLink: "lexamail",
    img: LexaMail,
    description:
      "A temporary mail service provides users with disposable email addresses which can be used to receive emails for a limited period without revealing the user’s primary email address. These services are commonly used to sign up for online forums, trials, and newsletters where one does not wish to share their real email due to concerns over spam, privacy, or security.",
    tools: ["React.js", "Node.js", "Rest API", "Express", "Mailer"],
    ui: {
      title: "Lexa Mail",
      description:
        "A temporary mail service provides users with disposable email addresses.",
      header: (
        <div className="h-60  bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">LEXA MAIL</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
];

export const Projects = () => {
  return (
    <div className="mt-40 space-y-5 mb-60 ">
      <h2 className="flex items-center gap-1">
        <FolderOpenDot />
        PROJECTS
      </h2>
      <h1 className="text-2xl font-bold">Take a Look at My Projects</h1>
      <p className="text-md text-zinc-500 mb-5">
        Over the past two years, I've developed numerous full-stack projects,
        culminating in my latest creation, <strong>Vercelli.</strong>
      </p>

      <div className="flex items-start gap-5 flex-wrap flex-grow">
        {projects.map((project) => (
          // <div
          //   className="h-auto text-start w-full sm:flex-1 sm:min-w-[400px] lg:max-w-[420px]"
          //   onClick={() => (window.location.href = `/${project.page}`)}
          // >
          //   <BentoGridItem
          //     title={project.ui.title}
          //     description={project.ui.description}
          //     header={project.ui.header}
          //     className={project.ui.className}
          //     icon={project.ui.icon}
          //   />
          // </div>
          <DialogProjects key={project.title} item={project} />
        ))}
      </div>
    </div>
  );
};
