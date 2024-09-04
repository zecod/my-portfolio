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
      <div className="text-[32px] leading-[40px] tracking-[-1.3px] font-semibold">
        Take a Look at My Projects
      </div>
      <div className="text-[20px] leading-[32px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
        Over the past two years, I've developed numerous full-stack projects,
        culminating in my latest creation, <strong>Verceli.</strong>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative">
        {projectData.map((project) => (
          <DrawerDialog key={project.title} item={project} />
        ))}
      </div>
    </div>
  );
};
