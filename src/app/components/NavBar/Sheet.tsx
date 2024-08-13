import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
            <SheetTitle>
              <h1 className="text-3xl font-extrabold cursor-pointer">Yass.</h1>
            </SheetTitle>
            <ul className="my-5">
              <a
                href="/blog"
                className="rounded-full cursor-pointer transition-all text-2xl"
              >
                BLOG
              </a>
            </ul>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
