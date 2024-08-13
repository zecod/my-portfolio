import { IoMoon, IoSunny } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";

export const BlogNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="jersey-10-regular py-4 flex justify-between items-center border-b">
  
      <h1
        className="text-4xl font-extrabold cursor-pointer"
        onClick={() => window.location.assign('/')}
      >
        Yass. / Blog
      </h1>
      <div className="flex items-center">
        <Button onClick={toggleTheme} variant={"ghost"} size={"icon"}>
          {theme == "light" ? <IoMoon size={18} /> : <IoSunny size={18} />}
        </Button>
      </div>
    </div>
  );
};
