"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock1 } from "lucide-react";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiExpress,
  SiTypescript,
  SiRadixui,
} from "react-icons/si";
import { Docks } from "../components/Doker";

export const Genio = () => {
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
          src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/genio-mind.png"
          className="aspect-video border rounded-lg shadow-lg"
        />
      </div>

      {/* Project Info */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="font-bold text-[42px] leading-[52px] tracking-[-1.9px] my-4">
            Genio Mind
          </div>
        </div>
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
            <Clock1 size={18} />
            <span>2 min read</span>
          </div>
          <div className="text-sm text-muted-foreground font-light">
            March 8, 2024
          </div>
        </div>

        {/* Intro Description */}
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] dark:text-[#A1A1A1]">
          Genio Mind started as a simple SaaS idea generator but quickly became
          more complex. One major challenge was{" "}
          <span className="text-primary">fine-tuning</span> models to retain
          context and provide unique responses, all while managing memory and
          response speed.
        </div>

        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] my-8 dark:text-[#A1A1A1]">
          This pushed me to find efficient ways to store and recall user data.
          Through trial and error, I developed methods that balanced{" "}
          <span className="text-primary">data retention</span> with
          performance, which had a lasting impact on Verceli.
        </div>

        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] dark:text-[#A1A1A1]">
          The experience directly influenced Verceli's backend. Features like
          memory-based customization in voice output and{" "}
          <span className="text-primary">optimized storage</span> for reusable
          audio files came from what I learned with Genio Mind.
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
              <SiRadixui size={16} className="text-green-500" />
              Radix UI
            </div>
          </div>
        </div>
      </div>

      <Docks />
    </div>
  );
};
