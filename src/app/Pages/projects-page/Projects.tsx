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
              <SiOpenai size={16} />
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

        {/* AI & Model Tuning */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg">AI & Model Tuning</h4>
          <p className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] mt-2">
            I'm currently working on fine-tuning models like{" "}
            <span className="text-blue-500 font-medium">Gemini</span> and{" "}
            <span className="text-blue-500 font-medium">GPT-4</span> to produce
            high-quality audio output. This tuning enables Verceli to generate
            voices that are not only lifelike but also customizable across a
            range of tones and emotions, bringing the text-to-speech experience
            closer to natural human speech.
          </p>
        </div>

        {/* Engineering & Cloud Solutions */}
        <div className="my-20">
          <h4 className="font-semibold text-lg">
            Engineering & Cloud Solutions
          </h4>
          <p className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] mt-2">
            Building the back end for Verceli involved creating a robust
            infrastructure that manages everything from{" "}
            <span className="font-semibold">payments</span> and{" "}
            <span className="font-semibold">authentication</span> to{" "}
            <span className="font-semibold">data storage</span> and audio
            processing. By storing generated audio in the cloud, users can
            easily reuse their custom voices, saving costs and enhancing
            efficiency. This setup not only reduces server load but also
            optimizes storage expenses, allowing users to access their files on
            demand.
          </p>
        </div>
      </div>

      <Docks />
    </div>
  );
};

export default Projects;
