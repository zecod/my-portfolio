import { NavArticle } from "../components/elemnts/NavArticle";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbUrl } from "../components/BreadCrumb";
import { SyntaxCode } from "../../Experience/Syntax";
import { Phone } from "../components/elemnts/Phone";
import { SepaIcon, StripeModal } from "../components/elemnts/StripeModal";
import StripeImg from "../../../../assets/stripe.png";

export const StripeSEPAFraud = () => {
  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Stripe and SEPA Payment Fraud" />

        <div className="my-5">
          <h1 className="text-4xl font-extrabold">
            How Scammers or Hackers Can Make Unauthorized Payments Legally
            Without Owner's Consent
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Stripe
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #SEPA
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Fraud
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">July 01, 2024</p>
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
            src={StripeImg}
            alt="Stripe logo"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="font-light">
              In this article, we will explore how scammers or hackers might
              exploit payment systems to make unauthorized payments.
              Specifically, we will look at how they could potentially use
              Stripe and SEPA payments to carry out their schemes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What is Stripe?</h2>

            <p className="font-light">
              Stripe is a technology company that builds economic infrastructure
              for the internet. Businesses of all sizes—from new startups to
              public companies—use the software to accept payments and manage
              their businesses online. Stripe's platform allows for various
              types of payments, including credit card payments, direct bank
              transfers, and SEPA payments.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex  lg:flex-row flex-col items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">What is SEPA Payment?</h2>
                <p className="font-light">
                  SEPA (Single Euro Payments Area) is an initiative by the
                  European Union to simplify bank transfers denominated in
                  euros. With SEPA, consumers and businesses can make payments
                  to any account within the area using standardized processes.
                  SEPA payments require the payer's name, last name, and IBAN
                  (International Bank Account Number).
                </p>
              </div>

              <Phone />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              How Hackers Exploit Stripe and SEPA Payments
            </h2>
            <p className="font-light">
              Hackers can set up a Stripe account by creating a virtual shop.
              For example, let's assume the store sells shoes. The hacker can
              make the store appear legitimate and set a subscription price,
              such as €10 per month. Many Europeans in countries like Germany,
              Italy, France, and Spain accept SEPA payments.
            </p>
            <p className="font-light">
              The hacker creates a fake invoice and generates a payment link
              where the SEPA payment method appears. Here, the scammer only
              needs the payer's name, last name, and IBAN.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What is an IBAN?</h2>
            <p className="font-light">
              An IBAN (International Bank Account Number) is a unique identifier
              for a bank account, used internationally to facilitate the
              processing of cross-border transactions. It includes the country
              code, check digits, bank identifier, and account number.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">How Hackers Obtain IBANs</h2>
            <p className="font-light">
              Hackers can obtain IBANs and other user information through
              various methods. One common method is using SQL injection attacks
              on vulnerable websites. These attacks can retrieve entire
              databases, including user information and IBANs, especially if the
              data is not encrypted.
            </p>
            <SyntaxCode
              code="SELECT * FROM users WHERE name = '' OR '1'='1';"
              title="sql"
              icon={false}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">The Financial Impact</h2>
            <p className="font-light">
              Consider a hacker finding a database with 200,000 IBANs. By
              charging each account €10 per month, the hacker could potentially
              make €2,000,000 monthly. SEPA payments typically complete in about
              three days, meaning the funds are quickly accessible.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">How Hackers Get Paid</h2>
            <p className="font-light">
              Hackers can easily open an online bank account, such as with Wise,
              to receive the money. They can then convert the funds to Bitcoin
              to maintain anonymity. Fortunately, Stripe now requires ID
              verification to enable SEPA payments, which helps to prevent such
              fraud.
            </p>
          </div>

          <div className="space-y-4 pb-10">
            <h2 className="text-2xl font-bold">Conclusion</h2>

            <p className="font-light">
              While the above scenario outlines a potential method for
              unauthorized payments, it's important to note that companies like
              Stripe continuously work to enhance security and prevent such
              fraud. The requirement for ID verification to enable SEPA payments
              is a significant step in the right direction. Users should remain
              vigilant and ensure their information is protected. Websites must
              also ensure they are not vulnerable to SQL injection attacks and
              encrypt sensitive user information.
            </p>
            <p className="font-light">
              By understanding how these schemes can work, both consumers and
              businesses can better protect themselves against fraud.
            </p>

            <div className="flex items-center  justify-between  border p-5 rounded-xl">
              <div className="flex items-center gap-4">
                <SepaIcon />
                <div>
                  <h4 className="text-sm">SEPA Direct Debit</h4>
                  <p className="text-xs text-muted-foreground">
                    Popular in Europ
                  </p>
                </div>
              </div>

              <StripeModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
