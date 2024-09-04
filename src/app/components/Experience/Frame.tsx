import { DraftingCompass } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

export const Frame = () => {
  const frameworks = [
    {
      title: "Stripe",
      url: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
    },
    {
      title: "React",
      url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      title: "Express",
      url: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    },
    {
      title: "NodeJS",
      url: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },
    {
      title: "MongoDB",
      url: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
    },
    {
      title: "PostgreSQL",
      url: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    },
    {
      title: "TailwindCSS",
      url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
    },
    {
      title: "JavaScript",
      url: "https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg",
    },
    {
      title: "TypeScript",
      url: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    },
    {
      title: "Github",
      url: "https://upload.vectorlogo.zone/logos/github/images/47bfd2d4-712f-4dee-9315-f99c611b7598.svg",
    },
  ];

  return (
    <div className="space-y-5 md:h-[50vh] my-40">
      <BlurFade delay={0.25} inView>
        <h2 className="scroll-intro flex items-center">
          <DraftingCompass />
          TOOLING
        </h2>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="text-[32px] leading-[40px] tracking-[-1.3px] font-semibold">
          Advanced Web Development: Building Strong & Simple Solutions
        </div>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="text-[20px] leading-[32px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
          I use modern technologies like React, Node.js, and MongoDB in my web
          development projects to create functional, fast, and user-friendly
          websites. React helps me build interactive interfaces efficiently,
          while Node.js ensures fast server-side performance. MongoDB supports
          quick data handling, enhancing site responsiveness. I also incorporate
          frameworks like Express for reliable server management and TailwindCSS
          for quick and attractive styling. These tools together allow me to
          deliver high-quality web solutions that are both powerful and easy to
          use.
        </div>
      </BlurFade>

      <div className="stagger-intro flex gap-5 flex-wrap">
        {frameworks.map((framework, index) => (
          <BlurFade delay={index * 0.08} inView>
            <div key={index} draggable="false">
              <img
                src={framework.url}
                alt={framework.title}
                className="w-auto h-10 grayscale dark:grayscale dark:brightness-0 dark:invert dark:opacity-50 rounded"
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};
