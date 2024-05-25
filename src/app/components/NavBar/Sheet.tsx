import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const SHEET_SIDES = ["top"] as const;

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
            <ul className="flex  gap-5 items-center justify-center text-lg">
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
                HOW WE CAN HELP?
              </li>
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
                PROJECTS
              </li>
              <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
                ABOUT ME
              </li>
              <li className="bg-black text-white py-2 px-6 rounded-full cursor-pointer transition-all hover:bg-zinc-700">
                CONTACT
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
