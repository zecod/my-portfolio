import { Docks } from "../components/Doker";
import { About } from "./About";
import { Hero } from "./Hero";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export const NewHome = () => {
  return (
    <div className={` max-w-[800px] m-auto`}>
      <div className="p-5">
        <Hero />
        <About />
      </div>
      <Docks />
    </div>
  );
};
