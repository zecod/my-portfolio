"use client";

import { NotebookPen } from "lucide-react";
import { FaAward, FaShieldAlt } from "react-icons/fa";

export function Experience() {
  return (
    <section className="mt-40 flex items-start gap-4 h-content">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full">
          <NotebookPen size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          My Journey So Far
        </div>
        <div className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-2">
          Currently working on{" "}
          <span className="font-normal text-primary">Verceli</span>, an
          AI-powered text-to-speech platform. Recognized by{" "}
          <span className="font-normal text-primary">Microsoft</span> on their
          Security Leaderboard for identifying a critical vulnerability in
          Azure, and discovered{" "}
          <span className="font-normal text-primary">
            17 other critical vulnerabilities
          </span>{" "}
          across various companies.
        </div>
        <div className="flex space-x-4 mt-4">
          <FaAward size={32} className="text-primary" />
          <FaShieldAlt size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
}
