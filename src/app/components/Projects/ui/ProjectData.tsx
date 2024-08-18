import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiOpenai,
  SiRadixui,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiStripe,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FolderOpenDot } from "lucide-react";

const projectData = [
  {
    title: "Vercelli",
    ngLink: "vercelli",
    description:
      "Vercelli is a SaaS application focused on text-to-speech (TTS) technology. It converts written text into clear, natural-sounding speech in over 50 languages. The platform includes features like voice cloning and voice isolation to create personalized audio experiences. Although it’s still being developed, we’ve already made significant progress, reducing API response times from 3 seconds to 800 milliseconds. This will enhance user interaction and system performance.",
    techStack: [
      { icon: <SiRadixui className="w-6 h-6" />, name: "Radix UI" },
      { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS" },
      { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
      { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB" },
      { icon: <SiReact className="w-6 h-6" />, name: "React" },
      { icon: <SiStripe className="w-6 h-6" />, name: "Stripe" },
    ],
    features: [
      "Supports over 50 languages",
      "High-quality audio output",
      "Advanced features like voice cloning and isolation",
      "Efficient API with fast response times",
    ],
    ytLink: null,
    ui: {
      title: "Vercelli",
      description:
        "Vercelli is a text-to-speech project that converts text into speech.",
      header: (
        <div className="h-60 bg-black rounded-md text-white flex items-center justify-center">
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
    description:
      "Rona Li is an online platform that simplifies several tasks with features for file uploading, URL shortening, and note-taking. It focuses on providing an easy-to-use interface for managing digital tasks efficiently.",
    techStack: [
      { icon: <SiHtml5 className="w-6 h-6" />, name: "HTML5" },
      { icon: <SiCss3 className="w-6 h-6" />, name: "CSS3" },
      { icon: <SiJquery className="w-6 h-6" />, name: "jQuery" },
      { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
    ],
    features: ["File uploading", "URL shortening", "Note-taking"],
    ytLink: "https://www.youtube.com/embed/XSs03MCY6ck?si=AFrRABFmNwdzeYUO",
    ui: {
      title: "Rona Li",
      description:
        "Rona Li is an online platform for file uploading, URL shortening, and note-taking.",
      header: (
        <div className="h-60 bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">RONA LI</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
  {
    title: "LTC AI",
    ngLink: "ltcai",
    description:
      "LTC AI is a tool designed to automatically generate HTML and CSS components, streamlining the web development process. It aims to improve design efficiency by handling repetitive coding tasks. The platform also integrates OpenAI to offer advanced functionalities like generating components based on user input.",
    techStack: [
      { icon: <SiHtml5 className="w-6 h-6" />, name: "HTML5" },
      { icon: <SiCss3 className="w-6 h-6" />, name: "CSS3" },
      { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript" },
      { icon: <SiJquery className="w-6 h-6" />, name: "jQuery" },
      { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
      { icon: <SiOpenai className="w-6 h-6" />, name: "OpenAI" },
    ],
    features: [
      "Automatic generation of HTML components",
      "Automatic generation of CSS components",
      "Improved design efficiency",
      "Advanced functionalities with OpenAI integration",
    ],
    ytLink: "https://www.youtube.com/embed/B1SEuYIOaRU?si=KBXU0AgK3MAlsOPa",
    ui: {
      title: "LTC AI",
      description:
        "LTC AI generates HTML and CSS components automatically with OpenAI integration.",
      header: (
        <div className="h-60 bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">LTC AI</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
  {
    title: "Lexa Mail",
    ngLink: "lexamail",
    description:
      "Lexa Mail provides temporary email addresses that help protect your privacy. These disposable addresses can be used for receiving emails without exposing your main email, making it ideal for signing up for online services or avoiding spam.",
    techStack: [
      { icon: <SiRadixui className="w-6 h-6" />, name: "Radix UI" },
      { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
      { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS" },
      { icon: <FaNodeJs className="w-6 h-6" />, name: "Node.js" },
      { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB" },
      { icon: <SiReact className="w-6 h-6" />, name: "React" },
    ],
    features: [
      "Temporary email addresses for privacy",
      "Protects against spam",
      "Ideal for online sign-ups",
    ],
    ytLink: "https://www.youtube.com/embed/vAgSQ2ZWdao?si=nMGZf6J07g9ZBBLZ",
    ui: {
      title: "Lexa Mail",
      description:
        "Lexa Mail offers disposable email addresses for privacy and spam protection.",
      header: (
        <div className="h-60 bg-black rounded-md text-white flex items-center justify-center">
          <h1 className="text-4xl jersey-10-regular">LEXA MAIL</h1>
        </div>
      ),
      className: "md:col-span-2 border-zinc-200 cursor-pointer",
      icon: <FolderOpenDot className="h-4 w-4 text-neutral-500" />,
    },
  },
];

export { projectData };
