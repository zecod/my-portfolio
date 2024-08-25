import { Badge } from "@/components/ui/badge";

export const Microsoft = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg  transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/azure"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl   rounded-xl">
        <img
          className="w-full object-cover rounded-xl  brightness-0 dark:invert"
          src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg"
          alt="Image Description"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          May 15, 2024
        </p>
        <Badge variant={"outline"} className="rounded-full">
          Security
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Bypassing 3D Authentication in Microsoft Azure
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Discover how a vulnerability allowed users to skip 3D authentication
          and start using Azure services without proper verification. Learn
          about the issue and its resolution...
        </p>
      </div>
    </a>
  );
};
