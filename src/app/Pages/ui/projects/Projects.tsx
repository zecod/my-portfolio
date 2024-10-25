"use client";

import { TrafficCone } from "lucide-react";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export function Projects() {
  return (
    <section className="mt-40 flex items-start gap-4 mb-[200px]">
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
          A few things I’ve built and worked on.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-5">
          <div className="border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/verceli-lights.png"
                className="aspect-video"
              />

              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <div className=" bg-black w-8 h-8 flex items-center justify-center text-white rounded-md">
                  <SiReact size={18} />
                </div>
              </div>
            </div>
            <div className="mt-2 p-4 flex flex-col gap-2">
              <h3 className="text-md font-semibold text-primary">Verceli</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                "AI-powered text-to-speech platform for lifelike audio."
              </p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://snjzgrnhlqngthyxcutc.supabase.co/storage/v1/object/public/porfolio/img/verceli-lights.png"
                className="aspect-video"
              />

              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <div className=" bg-black w-8 h-8 flex items-center justify-center text-white rounded-md">
                  <SiReact size={18} />
                </div>
              </div>
            </div>
            <div className="mt-2 p-4 flex flex-col gap-2">
              <h3 className="text-md font-semibold text-primary">Verceli</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                "AI-powered text-to-speech platform for lifelike audio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
