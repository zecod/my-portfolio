import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiFlagBannerFill } from "react-icons/pi";
import { LaurelLeft, LaurelRight } from "./Icons.tsx";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaStop } from "react-icons/fa6";
import { useTheme } from "@/components/ui/theme-provider";

export const AppstoreMincraft = () => {
  const [isDownloading, setDownloading] = useState(false);
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(13);

  const downloadApp = () => {
    setDownloading(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (isDownloading) {
      const progressSteps = [2, 10, 20, 40, 50, 70, 90, 95, 100];
      const timers = progressSteps.map((progressValue, index) =>
        setTimeout(() => {
          setProgress(progressValue);
          if (progressValue === 100) {
            setDownloading(false);
            setIsFinished(true);
          }
        }, (index + 3) * 1000)
      );

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [isDownloading]);

  return (
    <div className="w-full border rounded-xl p-4 hidden md:block">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-4">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/de/71/69/de7169fe-c5d6-b3c1-b2c8-a17845020473/AppIcon-0-0-1x_U007emarketing-0-9-0-85-220.png/434x0w.webp"
            className="rounded-xl w-16"
          />
          <div className="flex flex-col justify-center">
            <h3>Minecraft</h3>
            <p className="text-xs text-muted-foreground">
              Create, explore and survive!
            </p>
          </div>
        </div>
        {isFinished ? (
          <Button
            onClick={downloadApp}
            variant={"default"}
            className="rounded-full px-4 font-semibold text-white cursor-pointer bg-blue-500 hover:bg-blue-400"
          >
            Open
          </Button>
        ) : isDownloading ? (
          isLoading ? (
            <Button
              variant={"ghost"}
              className="rounded-full p-2 font-semibold cursor-pointer hover:bg-transparent animate-spin"
            >
              <AiOutlineLoading3Quarters
                size={27}
                className="dark:text-muted text-[#E4E7EB]"
              />
            </Button>
          ) : (
            <div className="relative flex items-center">
              <CircularProgressbar
                value={progress}
                styles={buildStyles({
                  textColor: "red",
                  pathColor: "#3B81F6",
                  trailColor: theme == "dark" ? "#71717A" : "#E4E7EB",
                  pathTransitionDuration: 0.5,
                  strokeLinecap: 5,
                })}
                className="w-10 h-8"
              />
              <div className="text-blue-500 absolute left-2">
                <FaStop />
              </div>
            </div>
          )
        ) : (
          <Button
            onClick={downloadApp}
            variant={"secondary"}
            className="rounded-full px-6 font-semibold text-blue-500 cursor-pointer"
          >
            Get
          </Button>
        )}
      </div>

      <div className="flex mt-4 items-center gap-8">
        <div className="text-muted-foreground flex items-center text-sm gap-1">
          <LaurelLeft size={16} color="text-muted-foreground" />
          <p>Editors' Choice</p>
          <LaurelRight size={16} color="text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BsPersonWorkspace />
          <p>Mojang</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <PiFlagBannerFill />
          <p>Adventure</p>
        </div>
      </div>
    </div>
  );
};
