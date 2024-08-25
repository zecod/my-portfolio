import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { PiMoonStarsFill, PiSun } from "react-icons/pi";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  const toogleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full relative">
      <footer className="container h-auto p-5 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold jersey-10-regular">Yass.</h1>
          <p className="text-sm text-zinc-400">
            Copyright © 2024 - All right reserved
          </p>
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <Dock direction="middle" className="rounded-full">
            <DockIcon className="transition-all duration-100 hover:dark:text-white hover:text-black">
              <Link to={"https://github.com/zecod"} target="_blank">
                <SiGithub className="transition-all cursor-pointer" size={18} />
              </Link>
            </DockIcon>
            <DockIcon className="transition-all duration-100 hover:dark:text-white hover:text-black">
              <Link to={"https://www.linkedin.com/in/yasinel"} target="_blank">
                {" "}
                <SiLinkedin
                  className="transition-all cursor-pointer"
                  size={18}
                />
              </Link>
            </DockIcon>

            <DockIcon>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="hover:bg-transparent"
                onClick={toogleTheme}
              >
                {theme == "light" ? (
                  <PiMoonStarsFill size={18} />
                ) : (
                  <PiSun size={18} />
                )}
              </Button>
            </DockIcon>
          </Dock>
        </div>
      </footer>
    </div>
  );
};
