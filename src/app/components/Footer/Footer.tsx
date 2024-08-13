import { Github, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-black">
      <footer className="container text-white h-auto p-5 flex justify-between">
        <div>
          <h1 className="text-4xl font-extrabold jersey-10-regular">Yass.</h1>
          <p className="text-sm text-zinc-400">
            Copyright © 2024 - All right reserved
          </p>
        </div>

        <div className="flex items-center gap-3 text-zinc-400">
          <Link to={"https://www.youtube.com/@lexasai"} target="_blank">
            <Github className="transition-all hover:text-white cursor-pointer" />
          </Link>
          <Link to={"https://github.com/zecod"} target="_blank">
            {" "}
            <Youtube className="transition-all hover:text-white cursor-pointer" />
          </Link>
          <Link to={"https://www.linkedin.com/in/yasinel"} target="_blank">
            {" "}
            <Linkedin className="transition-all hover:text-white cursor-pointer" />
          </Link>
        </div>
      </footer>
    </div>
  );
};
