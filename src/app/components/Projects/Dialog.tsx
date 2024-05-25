import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { BentoGridItem } from "@/components/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CiShare1 } from "react-icons/ci";
import { HiArrowSmRight } from "react-icons/hi";

interface ToolUI {
  title: string;
  description: string;
  header: React.ReactNode;
  className: string;
  icon: React.ReactNode;
}

interface ToolData {
  title: string;
  ngLink: string;
  img: string;
  description: string;
  tools: string[];
  ui: ToolUI;
}

export const DialogProjects: React.FC<{ item: ToolData }> = ({ item }) => {
  return (
    <Dialog>
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
      <DialogContent className="p-0 border-0 rounded-md">
        <ScrollArea className="max-h-[50vh] sm:max-h-[60vh]">
          <div className="flex flex-col items-start gap-5 p-5 text-black ">
            <h1 className="text-2xl sm:text-3xl font-bold">{item.title}</h1>
            <p>{item.description}</p>
            <div className="flex gap-2 flex-wrap mt-5">
              {item.tools.map((tool) => (
                <Badge key={tool} className="rounded-lg" variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <div className="p-5 flex gap-4">
            <Button className="flex gap-2 items-center py-5">
              Live preview
              <CiShare1 className="w-4 h-4" />
            </Button>

            <a href={`/${item.ngLink}`} target="_blank">
              <Button
                className="flex gap-2 items-center py-5 text-black"
                variant={"outline"}
              >
                More info <HiArrowSmRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </ScrollArea>
        <DialogFooter className=""></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
