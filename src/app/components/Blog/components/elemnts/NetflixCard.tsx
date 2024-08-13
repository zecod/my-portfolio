import { Badge } from "@/components/ui/badge";

export const NetflixCard = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/netflix"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <img
          className="w-full object-cover rounded-xl"
          src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"
          alt="Netflix logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          September 09, 2022
        </p>
        <Badge variant={"outline"} className="rounded-full">
          Security
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Payment Vulnerability in Netflix's German IBAN Verification Process
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Discover how a vulnerability in Netflix's German IBAN payment
          verification process allowed unauthorized access. Learn about the
          issue and its resolution...
        </p>
      </div>
    </a>
  );
};
