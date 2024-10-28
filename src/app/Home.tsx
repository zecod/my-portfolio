import { Docks } from "./Pages/components/Doker";
import { About } from "./Pages/ui/sections/About";
import { Hero } from "./Pages/ui/sections/Hero";
import { Stack } from "./Pages/ui/sections/Stack";
import { Experience } from "./Pages/ui/sections/Expirence";
import { Projects } from "./Pages/ui/projects/Projects";

export const NewHome = () => {
  return (
    <div className={` max-w-[800px] m-auto`}>
      <div className="p-5">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
      </div>
      <Docks />
    </div>
  );
};
