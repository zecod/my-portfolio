"use client";

import { TrafficCone } from "lucide-react";

export function Projects() {
  return (
    <section className="mt-40 flex items-start gap-4">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full flex flex-col gap-4">
          <TrafficCone size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          Projects
        </div>
        <p className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-2">
          A showcase of what I've built to solve real challenges and innovate.
        </p>
      </div>
    </section>
  );
}
