"use client";

import { User } from "lucide-react";

export function About() {
  return (
    <section className="mt-40 flex items-start gap-4 h-content">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full">
          <User size={24} />
        </div>
      </div>
      <div className="space-y-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          About me
        </div>
        <div className="font-extralight text-pretty text-[18px] leading-[27px] tracking-[0px] text-muted-foreground">
          Based in Italy, I focus on building efficient and reliable web
          applications. Whether it's{" "}
          <span className="font-normal text-primary">front-end</span> or{" "}
          <span className="font-normal text-primary">back-end</span>, I'm always
          exploring new technologies and finding ways to improve. My interest in{" "}
          <span className="font-normal text-primary">cybersecurity</span> keeps
          me sharp, constantly on the lookout for{" "}
          <span className="font-normal text-primary">
            potential vulnerabilities
          </span>{" "}
          and ways to secure systems.
        </div>
      </div>
    </section>
  );
}
