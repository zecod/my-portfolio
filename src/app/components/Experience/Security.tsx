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
        <div className="text-[32px] leading-[40px] tracking-[-1.3px] font-semibold">
          Attention to Detail!
        </div>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="text-[20px] leading-[32px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
          Securing the web is crucial for protecting sensitive data and
          maintaining user trust. Following security best practices helps
          safeguard web applications from attacks.
        </div>
      </BlurFade>
      <BlurFade delay={0.55} inView>
        <div className="text-[20px] leading-[32px] tracking-[-0.4px] text-[#A1A1A1] mt-3">
          In my security research, I found a vulnerability from removing the
          disabled attribute on a button. This bypassed 3D authentication,
          proving how small oversights can lead to major risks.
        </div>
      </BlurFade>

      <BlurFade delay={0.35} inView>
        <div className="flex lg:flex-row flex-col gap-5">
          <Syntax />
          <Product />
        </div>
      </BlurFade>
    </div>
  );
};
