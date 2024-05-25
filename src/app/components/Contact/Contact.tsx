import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import React from "react";
import { DialogContact } from "./DialogContact";
import { useToast } from "@/components/ui/use-toast";
import { ShareMail } from "./ShareMail";
export const Contact = () => {
  return (
    <div className="space-y-5 h-[50vh]">
      <h2 className="flex gap-1 items-center">
        <MessageCircle />
        READY TO DISCUSS YOUR PROJECT?
      </h2>
      <h1 className="text-4xl font-bold">Let's Connect!</h1>
      <p className="stagger-intro text-md text-zinc-500 mb-5">
        I'm eager to collaborate on new projects and guide you through each
        phase, ensuring we deliver top-quality results that meet your specific
        needs. If you have a project in mind, need some advice, or are
        interested in working with me, please reach out. I'm here to help with
        your needs.
      </p>
      <div className="flex gap-5 items-center">
        <DialogContact />
        <ShareMail />
      </div>
    </div>
  );
};
