import { Badge } from "@/components/ui/badge";

export const VerceliCard = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/verceli"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <div className="">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[120px] my-2"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          August 25, 2024
        </p>
        <Badge variant={"outline"} className="rounded-full">
          AI
        </Badge>
        <Badge variant={"outline"} className="rounded-full">
          SSML
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Verceli: Revolutionizing Audio with AI-Powered SSML
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Discover how Verceli leverages AI and SSML to create high-quality
          audio content. Learn about the features that make Verceli the go-to
          solution for voice synthesis...
        </p>
      </div>
    </a>
  );
};
