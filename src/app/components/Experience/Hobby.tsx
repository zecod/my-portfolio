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
        <h1 className="text-2xl font-bold stagger-hobby leading-relaxed tracking-widest">
          Discover My Interests
        </h1>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <p className="text-md text-zinc-500 mb-5 stagger-hobby leading-relaxed tracking-wider">
          I dedicate my spare time to exploring mobile development with Swift UI
          and React Native. Additionally, I am starting to learn Python and PHP,
          embracing the challenges of being a beginner. I am also passionate
          about football, enjoying both spectating and participating. This hobby
          has nurtured vital teamwork abilities and a mindset focused on
          achieving success, both crucial in sports and in my software
          development career. Watching movies and series also enhances my
          understanding of the filmmaking process. Beyond these interests, I
          excel in making well-informed decisions and have developed a versatile
          skill set that spans from coding to project management.
        </p>
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
