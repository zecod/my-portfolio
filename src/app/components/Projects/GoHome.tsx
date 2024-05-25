import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export const GoHome = () => {
  return (
    <Button
      className="flex py-5 px-0 gap-2 items-center cursor-pointer mt-5 transition-all hover:bg-background"
      variant={"ghost"}
      onClick={() => (window.location.href = "/")}
    >
      <ArrowLeft size={20} className="text-black" />
      <p>BACK</p>
    </Button>
  );
};
