import { Docks } from "../components/Doker";
import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Experience } from "./sections/Expirence";
import { Projects } from "./projects/Projects";

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
