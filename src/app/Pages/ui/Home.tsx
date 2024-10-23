import { Docks } from "../components/Doker";
import { About } from "./About";
import { Hero } from "./Hero";
import { Stack } from "./Stack";
import { Experience } from "./Expirence";

export const NewHome = () => {
  return (
    <div className={` max-w-[800px] m-auto`}>
      <div className="p-5">
        <Hero />
        <About />
        <Stack />
        <Experience />
      </div>
      <Docks />
    </div>
  );
};
