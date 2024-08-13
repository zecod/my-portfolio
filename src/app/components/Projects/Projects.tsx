import { FolderOpenDot } from "lucide-react";
import DrawerDialog from "./ui/ProjectDrawer";
import { projectData } from "./ui/ProjectData";

export const Projects = () => {
  return (
    <div className="space-y-5 my-60" id="projects">
      <h2 className="flex items-center gap-1">
        <FolderOpenDot />
        PROJECTS
      </h2>
      <h1 className="text-2xl font-bold leading-relaxed tracking-widest">
        Take a Look at My Projects
      </h1>
      <p className="text-md text-zinc-500 mb-5 leading-relaxed tracking-widest">
        Over the past two years, I've developed numerous full-stack projects,
        culminating in my latest creation, <strong>Vercelli.</strong>
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative">
        {projectData.map((project) => (
          <DrawerDialog key={project.title} item={project} />
        ))}
      </div>
    </div>
  );
};
