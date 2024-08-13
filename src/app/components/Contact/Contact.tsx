import { MessageCircle } from "lucide-react";
import { ShareMail } from "./ShareMail";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <div
      className="space-y-5 h-[60vh] flex flex-col justify-center my-40"
      id="contact"
    >
      <h2 className="flex gap-1 items-center">
        <MessageCircle />
        Get in Touch
      </h2>
      <h1 className="text-4xl font-bold leading-relaxed tracking-widest">
        Let's Connect!
      </h1>
      <p className="stagger-intro text-md text-zinc-500 mb-5 leading-relaxed tracking-widest">
        I'm really looking forward to diving into fresh projects and bringing my
        skills to the table. If you believe I could be a good match for your
        team, don't hesitate to reach out. I'm here and ready to assist you with
        any task or project you have in mind.
      </p>

      <div className="flex itemes-center gap-2 text-zinc-500">
        <FaLocationDot className="w-6 h-6" />
        <p>Milan, Italy</p>
      </div>

      <div className="flex itemes-center gap-2 text-zinc-500">
        <MdEmail className="w-6 h-6" />
        <p>yassineamine788@gmail.com</p>
      </div>

      <div className="flex gap-5 items-center">
        {/* <DialogContact /> */}
        <ShareMail />
      </div>
    </div>
  );
};
