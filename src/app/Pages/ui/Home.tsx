import { Docks } from "../components/Doker";
import { About } from "./setcions/About";
import { Hero } from "./setcions/Hero";
import { Stack } from "./setcions/Stack";
import { Experience } from "./setcions/Expirence";
import { Projects } from "./projects/Projects";
import { UIComponents } from "./setcions/Components";

export const NewHome = () => {
  return (
    <div className={` max-w-[800px] m-auto`}>
      <div className="p-5">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <UIComponents />
      </div>
      <Docks />
    </div>
  );
};
