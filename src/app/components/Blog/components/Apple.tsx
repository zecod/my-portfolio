import { Badge } from "@/components/ui/badge";

export const AppleCard = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/apple"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <img
          className="w-full object-cover rounded-xl dark:bg-gray-100 grayscale-0"
          src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg"
          alt="Apple logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          September 01, 2022
        </p>
        <Badge variant={"outline"} className="rounded-full">
          Security
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Payment Vulnerability in Apple App Store's Credit Card Verification
          Process
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Discover how a vulnerability in Apple App Store's credit card
          verification process allowed purchases with incorrect CVVs. Learn
          about the issue and its resolution...
        </p>
      </div>
    </a>
  );
};
