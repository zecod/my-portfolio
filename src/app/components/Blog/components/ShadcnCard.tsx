import { Badge } from "@/components/ui/badge";
import { SiShadcnui } from "react-icons/si";

export const ShadcnCard = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/shadcn"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <SiShadcnui className="w-full object-cover rounded-xl h-[120px] my-2" />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          August 20, 2024
        </p>
        <Badge variant={"outline"} className="rounded-full">
          UI Library
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Exploring Shadcn: A Modern UI Library for React
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Dive into the features of Shadcn, a modern UI component library for
          React. Learn how it simplifies UI development while maintaining design
          flexibility...
        </p>
      </div>
    </a>
  );
};
