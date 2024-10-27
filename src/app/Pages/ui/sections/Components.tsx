"use client";

import { Sparkles } from "lucide-react";
import { Product } from "../../components/payment/Product";

export function UIComponents() {
  return (
    <section className="mt-40 flex items-start gap-4 mb-[200px]">
      <div className="flex flex-col items-center h-full">
        <div className="p-2 border rounded-full flex flex-col gap-4">
          <Sparkles size={24} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[16px] leading-[20px] tracking-[0px]">
          UI Components
        </div>
        <p className="font-extralight text-pretty text-[16.5px] leading-[27px] tracking-[0px] text-muted-foreground mt-2">
          Building smooth, functional UI is my kind of fun.
        </p>
        <Product />{" "}
      </div>
    </section>
  );
}
