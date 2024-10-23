"use client";

import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section className="mt-40 flex items-start gap-4 h-content">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full">
          <Briefcase size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          Experience
        </div>

        <div className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-normal text-primary">
              Founder & Developer – Verceli
            </span>
            <span className="text-sm italic">
              January 2024 - Present | Milan, Italy
            </span>
          </div>
          Building and scaling Verceli, a SaaS platform that converts text into
          lifelike speech using AI and SSML. Focusing on enhancing accessibility
          and user interaction while leveraging cutting-edge technology to
          deliver a seamless text-to-speech experience across multiple
          languages.
        </div>

        <div className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-14">
          <div className="flex items-center justify-between mb-2">
            <span className="font-normal text-primary">
              Hackathon Web Developer
            </span>
            <span className="text-sm italic">
              June 2024 - July 2024 | Milan, Italy
            </span>
          </div>
          Developed a web application as part of a competitive hackathon.
          Focused on building a full-stack project under tight deadlines,
          optimizing both the front-end and back-end to deliver a performant
          solution in a high-pressure environment.
        </div>

        <div className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-14">
          <div className="flex items-center justify-between mb-2">
            <span className="font-normal text-primary">
              Security Researcher
            </span>
            <span className="text-sm italic">
              January 2024 - July 2024 | Milan, Italy
            </span>
          </div>
          Identified and reported 18 critical vulnerabilities across six
          companies, improving security and protecting sensitive data.
          Recognized by Microsoft’s Security Response Center and placed on the
          MSRC Security Leaderboard for Q2 2024.
        </div>
      </div>
    </section>
  );
}
