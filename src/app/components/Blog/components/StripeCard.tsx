import { Badge } from "@/components/ui/badge";

export const StripeCard = () => {
  return (
    <a
      className="group flex flex-col h-full border hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent gap-5"
      href="/blog/stripe"
    >
      <div className="aspect-w-8 aspect-h-8 rounded-xl">
        <img
          className="w-full object-cover rounded-xl"
          src={"https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg"}
          alt="Stripe logo"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          July 01, 2024
        </p>
        <Badge variant={"outline"} className="rounded-full">
          Fraud
        </Badge>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Stripe and SEPA Payment Fraud: How Scammers Can Make Unauthorized
          Payments
        </h3>
        <p className="mt-5 text-gray-600 dark:text-neutral-400 text-sm">
          Learn how scammers exploit Stripe and SEPA payment systems to make
          unauthorized payments legally without the owner's consent.
        </p>
      </div>
    </a>
  );
};
