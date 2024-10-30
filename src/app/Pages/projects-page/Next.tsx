"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock1, ExternalLink } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRadixui,
  SiShadcnui,
} from "react-icons/si";
import { Docks } from "../components/Doker";
import { Link } from "react-router-dom";

export const NextWeb = () => {
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
          src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/NextWeb.png"
          className="aspect-video border rounded-lg shadow-lg"
          alt="Next Web Project"
        />
      </div>

      {/* Project Info */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="font-bold text-[42px] leading-[52px] tracking-[-1.9px] my-4">
            Next Web
          </div>

          <Link to={"https://next-web-kappa.vercel.app/"} target="_blank">
            <Button
              variant={"default"}
              size={"lg"}
              className="gap-2 px-4 rounded-full"
            >
              <ExternalLink size={18} />
              Live Preview
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <Clock1 size={18} />
            <span>1 min read</span>
          </div>
          <div className="text-sm text-muted-foreground font-light">
            July 5, 2024
          </div>
        </div>

        {/* Intro Description */}
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] dark:text-[#A1A1A1]">
          Next Web is a project I worked on with a talented team from Morocco,
          focused on creating a concept for a web development agency. My role
          was front-end development, where I designed a modern, user-friendly{" "}
          <span className="text-primary">landing page</span> to showcase the
          agency's offerings and vision.
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
              <SiRadixui size={16} />
              Radix UI
            </div>
            <div className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
              <SiShadcnui size={16} />
              Shadcn UI
            </div>
          </div>
        </div>
      </div>

      <Docks />
    </div>
  );
};
