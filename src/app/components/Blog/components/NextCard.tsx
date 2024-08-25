import { Badge } from "@/components/ui/badge";
import { SiNextdotjs } from "react-icons/si";

export const Nextjs14Card = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/nextjs14"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <SiNextdotjs className="w-full object-cover rounded-xl h-[120px] my-2" />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          August 22, 2024
        </p>
        <Badge variant={"outline"} className="rounded-full">
          Next.js
        </Badge>
        <Badge variant={"outline"} className="rounded-full">
          Update
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Discover the New Features in Next.js 14
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Next.js 14 introduces powerful new features like Server Actions,
          Partial Prerendering, and enhanced font optimization. Learn how these
          updates can boost your development workflow...
        </p>
      </div>
    </a>
  );
};
