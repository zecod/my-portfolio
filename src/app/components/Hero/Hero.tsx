import { Highlight } from "@/components/ui/hero-highlight";
import { ChevronDown } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const Hero = () => {
  return (
    <div className=" jersey-10-regular h-full flex flex-col md:mt-40 mt-20 gap-2 ">
      <BlurFade delay={0.25} inView>
        <h2 className="name-tittle  text-2xl md:text-3xl text-zinc-500">
          Hello!
        </h2>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <h1 className="name-tittle  text-5xl md:text-6xl">
          <div className="hidden md:block">
            I'm Yassine,{" "}
            <Highlight className="text-white px-5 text-5xl hidden">
              Full-Stack Web Developer
            </Highlight>
          </div>

          <div className="block md:hidden">
            {" "}
            I'm Yassine, Full-Stack Web Developer
          </div>
        </h1>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="pt-10 space-y-4">
          <BlurFade delay={0.5} inView>
            <h3 className="name-tittle  text-2xl md:text-3xl uppercase">
              MY PRIORITY IS...
            </h3>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h4 className="name-tittle  text-xl md:text-2xl uppercase">
              PERFORMANCE • PROCESS • QUALITY • SATISFACTION
            </h4>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <p className="name-tittle  text-zinc-400 text-base md:text-xl leading-relaxed tracking-wide">
              I prioritize high-performance web solutions using leading
              technologies, ensuring fast and responsive applications. With over
              2+ years of experience in the field, I bring a proven track record
              of leveraging cutting-edge tools and techniques to deliver
              exceptional results.
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
