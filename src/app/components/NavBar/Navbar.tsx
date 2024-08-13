
import { SheetSide } from "./Sheet";
import { useTheme } from "@/components/ui/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="container w-full py-4 flex items-center justify-between jersey-10-regular z-20">
      <div className="flex items-center">
        <h1
          className="text-4xl font-extrabold cursor-pointer"
          onClick={toggleTheme}
        >
          Yass.
        </h1>
      </div>
      <ul className="hidden md:flex flex gap-5 items-center text-lg">
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          <a href="/blog">BLOG</a>
        </li>
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          <a href="#about">ABOUT ME</a>
        </li>
        <li className="bg-black text-white py-2 px-6 rounded-full cursor-pointer transition-all hover:bg-zinc-700 dark:bg-white dark:text-black">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="md:hidden">
        <SheetSide />
      </div>
    </div>
  );
};

export default Navbar;
