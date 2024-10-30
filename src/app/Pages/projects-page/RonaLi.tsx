"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock1, Eye, Play } from "lucide-react";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiHtml5,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { Docks } from "../components/Doker";
import { Link } from "react-router-dom";

export const RonaLi = () => {
  return (
    <div className={`relative max-w-[800px] m-auto p-5 md:p-0`}>
      {/* Back Button */}
      <div className="mt-10">
        <Button
          className="p-0 gap-2 hover:bg-transparent text-sm text-muted-foreground"
          variant={"ghost"}
          onClick={() => window.location.assign("/")}
        >
          <ArrowLeft size={14} />
          Go Back
        </Button>
      </div>

      {/* Project Image */}
      <div className="mt-5">
        <img
          src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/rona-li.png"
          className="aspect-video border rounded-lg shadow-lg"
          alt="Rona Li Project"
        />
      </div>

      {/* Project Info */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="font-bold text-[42px] leading-[52px] tracking-[-1.9px] my-4">
            Rona-Li
          </div>

          <Link
            to={"https://youtu.be/XSs03MCY6ck?si=RRdEm3opTMjRIBc1"}
            target="_blank"
          >
            <Button
              variant={"default"}
              size={"lg"}
              className="gap-2 px-4 rounded-full"
            >
              <Play size={18} />
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <Clock1 size={18} />
            <span>2 min read</span>
          </div>
          <div className="text-sm text-muted-foreground font-light">
            April 15, 2024
          </div>
        </div>

        {/* Intro Description */}
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] dark:text-[#A1A1A1]">
          Rona Li is a tool for file uploads, URL shortening, and note-taking.
          It’s built to make managing digital content simple and efficient. This
          project was my first time using Node.js and Express to handle backend
          tasks, where I developed features for managing files and URLs in a
          secure way. The experience helped me get comfortable with new tech and
          improve how I build backend services.
        </div>

        {/* Tech Stack */}
        <div className="my-20">
          <h4 className="font-semibold text-lg">Tech Stack</h4>
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiHtml5 size={16} />
              HTML
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiJavascript size={16} />
              Javascript
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiCss3 size={16} />
              CSS
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiNodedotjs size={16} />
              Node.js
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiExpress size={16} />
              Express
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiMongodb size={16} />
              Mongoose
            </div>
          </div>
        </div>
      </div>

      <Docks />
    </div>
  );
};

export default RonaLi;
