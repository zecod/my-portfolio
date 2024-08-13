import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AnimatedBeamDemo } from "./Animated";
import { Globe } from "lucide-react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Cool = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".scroll-anim",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: ".scroll-intross",
          start: "bottom bottom",
          end: "start start",
          onEnter: () => {
            gsap.fromTo(
              ".stagger-intro",
              { opacity: 0 },
              { opacity: 1, stagger: 0.5 }
            );
          },
          once: true,
        },
        opacity: 1,
        x: 0,
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="space-y-5 mt-40 scroll-anim">
      <h2 className="scroll-intross flex items-center text-lg font-semibold">
        <Globe className="mr-2" />
        WebTech Visual Symphony
      </h2>
      <h1 className="scroll-intross text-2xl font-bold">
        Deciphering the Web's Harmonious Orchestra
      </h1>
      <AnimatedBeamDemo />
    </div>
  );
};

export default Cool;
