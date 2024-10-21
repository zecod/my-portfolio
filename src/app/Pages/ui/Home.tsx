import { Docks } from "../components/Doker";
import { Hero } from "./Hero";

export const NewHome = () => {
  return (
    <div className={`relative max-w-[840px] m-auto `}>
      <div className="p-5">
        <Hero />
      </div>
      <Docks />
    </div>
  );
};
