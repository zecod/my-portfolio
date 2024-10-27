"use client";

import { NotebookPen } from "lucide-react";

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
          AI-powered text-to-speech platform. I was recognized by{" "}
          <span className="font-normal text-primary">Microsoft</span> on their
          Security Leaderboard for identifying a critical vulnerability in{" "}
          <span className="font-normal text-primary">Azure</span> and also
          discovered{" "}
          <span className="font-normal text-primary">
            17 other critical vulnerabilities
          </span>{" "}
          across various companies.
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-red-200 dark:bg-red-950 text-red-600 px-2 py-1 rounded-full text-xs">
            Problem Solving
          </span>
          <span className="bg-blue-200 dark:bg-blue-950 text-blue-600 px-2 py-1 rounded-full text-xs">
            AI Integration
          </span>
          <span className="bg-green-200 dark:bg-green-950 text-green-600 px-2 py-1 rounded-full text-xs">
            Security Research
          </span>
          <span className="bg-yellow-200 dark:bg-yellow-950 text-yellow-600 px-2 py-1 rounded-full text-xs">
            Solo Entrepreneur
          </span>
          <span className="bg-purple-200 dark:bg-purple-950 text-purple-600 px-2 py-1 rounded-full text-xs">
            Vulnerability Discovery
          </span>
        </div>
      </div>
    </section>
  );
}
