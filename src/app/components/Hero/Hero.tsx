import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const Hero = () => {
  return (
    <div className="  h-full flex flex-col md:mt-40 mt-20 gap-2 ">
      <BlurFade delay={0.25} inView>
        <h2 className="name-tittle  text-xl md:text-2xl text-[#A1A1A1] font-semibold text-md">
          Hello!
        </h2>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <h1 className="name-tittle  font-semibold text-5xl md:text-6xl text-[20px] leading-[26px] tracking-[-0.4px] text-[#000] dark:text-[#fff]">
          <div className="hidden md:block">
            I'm Yassine, Full-Stack Web Developer
          </div>

          <div className="block md:hidden  text-[40px] leading-[46px] tracking-[-0.4px] text-[#000] dark:text-[#fff]">
            {" "}
            I'm Yassine, Full-Stack Web Developer
          </div>
        </h1>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="pt-10 space-y-1">
          <BlurFade delay={0.5} inView>
            <h4 className="text-[18px] lg:text-[20px]  text-[#000] dark:text-[#fff] font-semibold text-[#A1A1A1] uppercase font-medium">
              PERFORMANCE • EFFICIENCY • QUALITY • USER EXPERIENCE
            </h4>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <p className="text-[20px] leading-[30px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
              I focus on creating efficient web solutions that are fast and
              responsive. With over 2 years of experience, I use reliable tools
              and methods to ensure solid, high-quality outcomes.
            </p>
          </BlurFade>
        </div>
      </BlurFade>

      <div className="hidden svg-bottom w-full md:flex items-center justify-center h-auto lg:mt-60 md:mt-40">
        <ChevronDown />
      </div>
    </div>
  );
};

export default Hero;
