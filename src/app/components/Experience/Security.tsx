import { Shield } from "lucide-react";
import { Syntax } from "./Syntax";
import { Product } from "./payment/Product";
import BlurFade from "@/components/magicui/blur-fade";

export const Security = () => {
  return (
    <div className=" space-y-5 my-40 ">
      <BlurFade delay={0.25} inView>
        <h2 className="flex items-center gap-1 ggffx">
          <Shield />
          SECURITY
        </h2>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <h1 className="text-2xl font-bold leading-relaxed tracking-widest">
          Attention to Detail!
        </h1>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <p className="text-md text-zinc-500 mb-5 leading-relaxed tracking-wider">
          Securing the web is essential to protect sensitive information,
          maintain user trust, and prevent malicious attacks. By implementing
          best security practices, we can ensure the safety and integrity of web
          applications.
        </p>
      </BlurFade>
      <BlurFade delay={0.55} inView>
        <p className="text-md text-zinc-500 mb-5 leading-relaxed tracking-wider">
          During my security research activities, I discovered a significant
          vulnerability caused by a simple issue: deleting the disabled
          attribute from a button. This action bypassed the 3D authentication,
          highlighting how small, overlooked elements can lead to major security
          breaches. This experience reinforces the importance of detailed
          security reviews and thorough testing.
        </p>
      </BlurFade>
      <BlurFade delay={0.35} inView>
        <div className="flex xl:flex-row flex-col gap-5">
          <Syntax />
          <Product />
        </div>
      </BlurFade>
    </div>
  );
};
