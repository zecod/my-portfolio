import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BentoGridItem } from "@/components/bento-grid";
import { CloudLightning } from "lucide-react";
import { projectData } from "./ProjectData";

interface Project {
  title: string;
  ngLink: string;
  description: string;
  techStack: { icon: ReactNode; name: string }[];
  features: string[];
  ytLink: string | null;
  img?: string;
  ui: {
    title: string;
    description: string;
    header: React.ReactNode;
    className: string;
    icon: React.ReactNode;
  };
}

const RelatedProjects: React.FC<{ item: Project }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const techStack = item.techStack;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-start w-full mb-5 p-2 border rounded-[24px]">
          <div className="w-full  bg-black rounded-lg text-white jersey-10-regular flex items-center justify-center text-4xl aspect-video">
            <p>{item.title}</p>
          </div>

          <div className="my-2">
            <div className="text-xl font-bold">{item.title}</div>
            <p className="text-xs text-muted-foreground w-[280px] overflow-hidden text-ellipsis whitespace-nowrap">
              {item.description}
            </p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-[1400px]">
        <ScrollArea className="w-full h-[90vh] ">
          <div className="w-full  mx-auto p-5 flex">
            <div className="space-y-5 flex gap-5">
              <div className="flex-1 space-y-5">
                {item.ytLink == null ? (
                  <div className="aspect-video w-full rounded-xl bg-gray-100 dark:bg-transparent flex flex-col gap-5 items-center justify-center dark:border">
                    <CloudLightning size={34} />
                    <div className="text-sm text-muted-foreground">
                      This project is still in development.
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 flex-1">
                    <iframe
                      src={item.ytLink}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="aspect-video w-full rounded-xl"
                    ></iframe>
                  </div>
                )}

                <div className="mb-5">
                  {" "}
                  <section className="space-y-5">
                    <h1 className="font-bold text-3xl leading-relaxed tracking-widest">
                      {item.title}
                    </h1>
                    <p className="text-zinc-500 leading-relaxed tracking-tight">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-5 text-zinc-500">
                      {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center">
                          {tech.icon}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="space-y-5 mt-10">
                    <h2 className="text-xl text-zinc-500 tracking-widest">
                      Features
                    </h2>
                    <ul className="list-disc list-inside text-zinc-500">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* okkokokok */}
              <div className="w-[30%] p-0">
                {projectData.map((project) => (
                  <RelatedProjects key={project.title} item={project} />
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const DrawerDialog: React.FC<{ item: Project }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const techStack = item.techStack;

  const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

      setMatches(mediaQuery.matches);

      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="h-auto text-start w-full sm:flex-1 ">
          <BentoGridItem
            title={item.ui.title}
            description={item.ui.description}
            header={item.ui.header}
            className={item.ui.className}
            icon={item.ui.icon}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-[1400px]">
        <ScrollArea className="w-full h-[90vh] ">
          <div className="w-full mt-5 mx-auto p-5 flex">
            <div className="space-y-5 flex gap-5">
              <div className="flex-1 space-y-5">
                {item.ytLink == null ? (
                  <div className="aspect-video w-full rounded-xl bg-gray-100 dark:bg-transparent flex flex-col gap-5 items-center justify-center dark:border">
                    <CloudLightning size={34} />
                    <div className="text-sm text-muted-foreground">
                      This project is still in development.
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 flex-1">
                    <iframe
                      src={item.ytLink}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="aspect-video w-full rounded-xl"
                    ></iframe>
                  </div>
                )}

                <div className="mb-5">
                  {" "}
                  <section className="space-y-5">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold text-3xl leading-relaxed tracking-widest">
                        {item.title}
                      </h1>
                      {item.ytLink == null && (
                        <div className="text-yellow-500 text-xs rounded-full p-2">
                          in-development
                        </div>
                      )}
                    </div>
                    <p className="text-zinc-500 leading-relaxed tracking-tight">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-5 text-zinc-500">
                      {techStack.map((tech, index) => (
                        <div key={index} className="flex items-center">
                          {tech.icon}
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="space-y-5 mt-10">
                    <h2 className="text-xl text-zinc-500 tracking-widest">
                      Features
                    </h2>
                    <ul className="list-disc list-inside text-zinc-500">
                      {item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* okkokokok */}
              <div className="w-[30%]">
                {projectData.map((project) => (
                  <RelatedProjects key={project.title} item={project} />
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="h-auto text-start w-full sm:flex-1 sm:min-w-[400px] lg:max-w-[420px] ">
          <BentoGridItem
            title={item.ui.title}
            description={item.ui.description}
            header={item.ui.header}
            className={item.ui.className}
            icon={item.ui.icon}
          />
        </button>
      </DialogTrigger>
      <DrawerContent className="h-[80vh]">
        <ScrollArea className="w-full h-[80vh]">
          <div className="w-full  mx-auto px-5 ">
            {item.ytLink == null ? (
              <div className="aspect-video w-full rounded-xl bg-gray-100 dark:bg-transparent flex flex-col gap-5 items-center justify-center dark:border">
                <CloudLightning size={34} />
                <div className="text-sm text-muted-foreground">
                  This project is still in development.
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 ">
                <iframe
                  width="560"
                  height="315"
                  src={item.ytLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-square w-full rounded-xl"
                ></iframe>
              </div>
            )}

            <div className="mt-5 space-y-5">
              <div>
                <section className="space-y-5">
                  <h1 className="font-bold text-3xl">{item.title}</h1>
                  <p className="text-zinc-500">{item.description}</p>
                  <div className="flex flex-wrap gap-5 text-zinc-500">
                    {techStack.map((tech, index) => (
                      <div key={index} className="flex items-center">
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-5 mt-10">
                  <h2 className="text-xl font-normal">Features</h2>
                  <ul className="list-disc list-inside text-zinc-500">
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerDialog;
