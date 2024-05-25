"use client";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { Package, User, Globe, Monitor, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  //   frameworks front-end
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  //   back-end frameworks
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full  items-center justify-center overflow-hidden   p-10 "
      ref={containerRef}
    >
      <div className="flex flex-col lg:flex-row h-full w-full items-center justify-between gap-20 lg:gap-40">
        <Circle ref={div1Ref}>
          <User className="h-6 w-6" />
        </Circle>

        <Circle ref={div2Ref}>
          <Globe className="h-6 w-6" />
        </Circle>

        <div className="flex lg:flex-col gap-5">
          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-60">
            <Circle ref={div3Ref}>
              <Monitor className="h-6 w-6" />
            </Circle>
            <div className="flex lg:flex-col gap-5">
              <Circle ref={div5Ref}>
                <SiReact className="h-6 w-6" />
              </Circle>
              <Circle ref={div6Ref}>
                <SiTypescript className="h-6 w-6" />
              </Circle>
              <Circle ref={div7Ref}>
                <SiTailwindcss className="h-6 w-6" />
              </Circle>
            </div>
          </div>

          {/* back-end ui */}

          <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-60">
            <Circle ref={div4Ref}>
              <Server className="h-6 w-6" />
            </Circle>
            <div className="flex lg:flex-col gap-5">
              <Circle ref={div8Ref}>
                <BsStripe className="h-6 w-6" />
              </Circle>
              <Circle ref={div9Ref}>
                <SiMongodb className="h-6 w-6" />
              </Circle>
              <Circle ref={div10Ref}>
                <FaNodeJs className="h-6 w-6" />
              </Circle>
            </div>
          </div>
        </div>
      </div>

      {/* Client to web site: ref1 to ref2 */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        duration={3}
      />

      {/* web to front-end: from ref2 to ref3 */}

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        duration={3}
      />

      {/* web to back-end: from ref2 to ref4 */}

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        duration={3}
      />

      {/* front-end to frame */}

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div5Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div7Ref}
        duration={3}
      />

      {/* back-end to frame */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div8Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div9Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div10Ref}
        duration={3}
      />
    </div>
  );
}
