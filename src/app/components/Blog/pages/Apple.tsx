import { NavArticle } from "../components/elemnts/NavArticle";
import { BreadcrumbUrl } from "../components/BreadCrumb";
import AppleImg from "../../../../assets/apple.png";
import { Badge } from "@/components/ui/badge";
import { CardUi } from "../components/elemnts/CardUi";
import { AppstoreMincraft } from "../components/elemnts/AppstoreMincraft";

export const AppleVulnerability = () => {
  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Apple Payment Vulnerability" />

        <div className="my-5">
          <h1 className="text-4xl font-extrabold">
            Payment Vulnerability in Apple App Store's Credit Card Verification
            Process
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Apple
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Security
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #CreditCard
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              September 09, 2022
            </p>
            <span className="text-gray-500 dark:text-neutral-500">·</span>
            <p>
              <span className="text-gray-500 dark:text-neutral-500">
                Written by
              </span>
              <span> Yassine</span>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <img
            src={AppleImg}
            alt="Apple logo"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="font-light">
              Apple Inc. is a leading technology company known for its
              innovative products, including the iPhone, iPad, Mac computers,
              and various software services. The Apple App Store is a digital
              distribution platform for mobile apps on iOS and iPadOS. Users can
              purchase apps, subscriptions, and gift cards through the App Store
              using various payment methods, including credit cards.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Payment Methods in the App Store
            </h2>
            <p className="font-light">
              In the Apple App Store, users can make purchases using different
              payment methods, such as credit cards, debit cards, Apple Pay, and
              more. These payments can be used to buy apps, in-app
              subscriptions, and gift cards. To process a payment, the user
              needs to enter credit card information, including the name, card
              number, expiration date, and CVV (Card Verification Value).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What is CVV?</h2>
            <p className="font-light">
              CVV stands for Card Verification Value, a security feature for
              credit card transactions. It is a three-digit number on the back
              of most credit cards (four digits on the front for American
              Express). The CVV is used to verify that the person making the
              purchase has the physical card, adding an extra layer of security
              to online transactions.
            </p>
            <CardUi />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Observing the Potential Vulnerability
            </h2>
            <p className="font-light">
              One day, I was using the App Store to purchase a game for my
              brother called Minecraft. While entering my credit card
              information, I was asked for the name, last name, card number,
              expiration date, and CVV.
            </p>
            <p className="font-light">
              Out of curiosity, I wondered what would happen if I entered my CVV
              incorrectly. Normally, this should result in the card being
              rejected because the CVV is wrong. However, to my surprise, the
              App Store accepted the incorrect CVV and added my card.
            </p>
            <p className="font-light">
              Shocked by this, I tried deleting the card and adding it again
              with an incorrect CVV. It worked once more. I then proceeded to
              buy the game with the incorrect CVV, and the transaction went
              through without any issue, charging my card.
            </p>
            <p className="font-light">
              To confirm, I tested with another credit card using an incorrect
              CVV. It was accepted, and purchases were successfully made without
              any problems.
            </p>

            <AppstoreMincraft />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Analysis</h2>
            <p className="font-light">
              This scenario points to a significant vulnerability in Apple’s
              payment verification process. Accepting incorrect CVVs undermines
              the security of credit card transactions, potentially allowing
              unauthorized use of credit card information.
            </p>
            <p className="font-light">
              The vulnerability poses the following risks:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="font-light">
                <strong>Bypassing Security Check</strong>: The primary role of
                CVV is to ensure that the person entering the card details has
                physical access to the card. Accepting an incorrect CVV bypasses
                this crucial security check.
              </li>
              <li className="font-light">
                <strong>Potential for Fraud</strong>: If a malicious user gains
                access to someone else's credit card number and expiration date,
                they could exploit this vulnerability to make unauthorized
                purchases.
              </li>
              <li className="font-light">
                <strong>Reproducibility</strong>: The fact that this issue could
                be reproduced multiple times with different cards suggests a
                systematic flaw rather than an isolated incident.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="font-light">
              The scenario described highlights a significant vulnerability.
              Bypassing CVV verification compromises the security of credit card
              transactions on the Apple App Store. Although Apple has since
              resolved this issue, it underscores the necessity for robust
              security measures and regular audits to promptly identify and
              mitigate such risks.
            </p>
            <p className="font-light">
              At the time, I was unaware of the bounty program as my focus was
              primarily on web development, and I did not consider it important
              until now. In the future, discovering similar vulnerabilities
              should be promptly reported through responsible disclosure to the
              affected company to ensure they are resolved without risking
              potential misuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
