"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock1 } from "lucide-react";
import {
  SiGooglecloud,
  SiMicrosoftazure,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiExpress,
  SiAmazonaws,
  SiTypescript,
  SiDocker,
  SiVercel,
  SiNginx,
  SiRadixui,
} from "react-icons/si";
import { Docks } from "../components/Doker";

const Projects = () => {
  return (
    <div className={`relative max-w-[800px] m-auto`}>
      {/* Back Button */}
      <div className="mt-10">
        <Button
          className="p-0 gap-2 hover:bg-transparent text-sm text-muted-foreground"
          variant={"ghost"}
        >
          <ArrowLeft size={14} />
          Go Back
        </Button>
      </div>

      {/* Project Image */}
      <div className="mt-5">
        <img
          src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/verceli-lights.png"
          className="aspect-video border rounded-lg shadow-lg"
        />
      </div>

      {/* Project Info */}
      <div className="mt-10">
        <div className="font-bold text-[42px] leading-[52px] tracking-[-1.9px] my-4">
          Verceli
        </div>
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <Clock1 size={18} />
            <span>2 min read</span>
          </div>
          <div className="text-sm text-muted-foreground font-light">
            January 2, 2024
          </div>
        </div>

        {/* Intro Description */}
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px]">
          Verceli is one of my biggest projects, born from a simple idea and
          grown into a feature-rich platform. It’s an AI-driven text-to-speech
          solution designed to make creating lifelike audio accessible and
          customizable.
        </div>

        {/* Tech Stack */}
        <div className="my-20">
          <h4 className="font-semibold text-lg">Tech Stack</h4>
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiReact size={16} className="text-blue-500" />
              React
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiTypescript size={16} className="text-blue-600" />
              TypeScript
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiTailwindcss size={16} className="text-teal-500" />
              TailwindCSS
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiDocker size={16} className="text-blue-500" />
              Docker
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiGooglecloud size={16} className="text-yellow-600" />
              Google Cloud
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiMicrosoftazure size={16} className="text-cyan-500" />
              Azure
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiAmazonaws size={16} className="text-yellow-600" />
              AWS
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiNodedotjs size={16} className="text-green-500" />
              Node.js
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiExpress size={16} />
              Express
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiMongodb size={16} className="text-green-500" />
              Mongoose
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiPostgresql size={16} className="text-blue-500" />
              PostgreSQL
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiOpenai size={16} className="text-gray-500" />
              OpenAI
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiVercel size={16} />
              Vercel
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiNginx size={16} className="text-green-500" />
              NGINX
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiRadixui size={16} className="text-green-500" />
              Radix UI
            </div>
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
          <p className="text-muted-foreground text-sm mt-2">
            <span className="text-blue-500 font-medium">AI</span> is at the core
            of Verceli, allowing for customizable voices that match various
            tones and emotions. Advanced text-to-speech models enhance user
            experience by producing{" "}
            <span className="font-semibold">lifelike audio</span>.
          </p>
        </div>

        {/* Challenges & Cloud Engineering */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">
            Challenges & Cloud Engineering
          </h4>
          <p className="text-muted-foreground text-sm mt-2">
            Developing Verceli required solving challenges in{" "}
            <span className="font-semibold">scaling</span> and managing{" "}
            <span className="font-semibold">latency</span>. Utilizing a{" "}
            <span className="text-cyan-500">serverless</span> architecture on
            Google Cloud ensured that Verceli could handle high-demand use cases
            smoothly, with optimizations for performance and cost efficiency.
          </p>
        </div>
      </div>

      <Docks />
    </div>
  );
};

export default Projects;
