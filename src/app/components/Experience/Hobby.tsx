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
          In my spare time, I’m diving into mobile development with Swift UI and React Native. I’m also starting to learn Python and PHP, enjoying the challenge of being a beginner. Football is another passion of mine—I love playing and watching the game, which has helped me develop teamwork skills and a success-oriented mindset, valuable in both sports and software development. I also enjoy watching movies and series, which has given me an appreciation for the filmmaking process. Beyond these hobbies, I’m good at making informed decisions and have built a versatile skill set, ranging from coding to project management.
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
