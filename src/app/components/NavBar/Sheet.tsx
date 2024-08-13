import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const SHEET_SIDES = ["right"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide() {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost" size={"icon"}>
              {" "}
              <Menu className="w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="jersey-10-regular">
            <ul className="flex flex-col gap-5 items-center justify-center text-lg h-full">
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-5xl text-4xl">
                PROJECTS
              </li>
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-5xl text-4xl">
                ABOUT ME
              </li>
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-5xl text-4xl">
                TOOLS
              </li>
              <li className="bg-black text-white py-3 px-14 rounded-full cursor-pointer transition-all hover:bg-zinc-700 text-2xl">
                CONTACT
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
