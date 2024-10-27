import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CiStar } from "react-icons/ci";
import { PiStarFill } from "react-icons/pi";
import { PayCard } from "./PayCard";

export const Product = () => {
  const [isClicked, setIsclicked] = useState<Boolean>(false);

  return (
    <div className="flex flex-col md:flex-row gap-8 item-box rounded-xl p-5 border">
      <div className="bg-neutral-100 dark:bg-neutral-900 md:w-[34%] rounded-lg flex justify-center">
        <img
          src="https://nextui.org/_next/image?url=%2Fimages%2Fshoes-1.png&w=3840&q=75"
          className="w-auto object-contain aspect-square"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">Nike Adapt BB 2.0</h2>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setIsclicked(!isClicked)}
            className="transition-all"
          >
            {isClicked ? (
              <PiStarFill size={26} className="text-yellow-500" />
            ) : (
              <CiStar size={28} className="text-muted-foreground" />
            )}
          </Button>
        </div>
        <p className="text-muted-foreground text-sm ">
          Consistent, customized fit, game-changing.
        </p>
        <div className="flex gap-3 items-center my-2">
          <span className="text-xl font-semibold">$279.97</span>
          <span className="line-through text-muted-foreground font-light">
            $350
          </span>
          <span className="text-red-600 bg-red-200 dark:bg-red-950 text-xs px-2 py-1 rounded-full">
            20% off
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="transition-all focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black w-8 h-8 text-xs active:bg-black active:text-white"
          >
            XS
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="transition-all focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black w-8 h-8 text-xs"
          >
            S
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="transition-all focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black w-8 h-8 text-xs"
          >
            M
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="transition-all focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black w-8 h-8 text-xs"
          >
            L
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="transition-all focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black w-8 h-8 text-xs"
          >
            XL
          </Button>
        </div>

        <div className="flex gap-5 items-center mt-2">
          <PayCard />
          <Button variant={"outline"} className="text-sm h-10 px-5">
            Add to bag
          </Button>
        </div>
      </div>
    </div>
  );
};
