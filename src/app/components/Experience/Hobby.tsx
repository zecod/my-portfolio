import { Palette } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const Hobby = () => {
  return (
    <div className="md:h-[50vh] my-20 space-y-5 ">
      <BlurFade delay={0.25} inView>
        <h2 className="flex items-center gap-1 hobby-intro">
          <Palette />
          HOBBIES
        </h2>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="text-[32px] leading-[40px] tracking-[-1.3px] font-semibold">
          Discover My Interests
        </div>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="text-[20px] leading-[32px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
          In my free time, I’m exploring mobile development with Swift UI and
          React Native, while also learning Python and PHP. I enjoy playing and
          watching football, which has sharpened my teamwork and goal-oriented
          mindset. I’m also a fan of movies and series, giving me a deeper
          appreciation for filmmaking. Overall, I have a versatile skill set
          that ranges from coding to project management.
        </div>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="stagger-intro flex gap-5 flex-wrap stagger-hobby">
          <img
            src="https://www.vectorlogo.zone/logos/swift/swift-icon.svg"
            alt="swift-ui"
            className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            alt="react-native"
            className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://www.vectorlogo.zone/logos/python/python-icon.svg"
            alt="python"
            className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="https://www.vectorlogo.zone/logos/php/php-ar21.svg"
            alt="php"
            className="w-auto h-10 grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </BlurFade>
    </div>
  );
};
