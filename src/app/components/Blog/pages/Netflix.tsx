import { NavArticle } from "../components/elemnts/NavArticle";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbUrl } from "../components/BreadCrumb";
import NetflixImg from "../../../../assets/NetflixImg.png";

export const NetflixVulnerability = () => {
  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Netflix Payment Vulnerability" />

        <div className="my-5">
          <h1 className="text-4xl font-extrabold">
            Payment Vulnerability in Netflix's German IBAN Verification Process
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Netflix
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
              #IBAN
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              09 September, 2022
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
            src={NetflixImg}
            alt="Netflix landing page"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="font-light">
              Netflix is a popular streaming service that offers a wide range of
              movies, TV shows, documentaries, and more to millions of
              subscribers worldwide. Netflix requires users to create an account
              and select a payment method to start watching content. Common
              payment methods include credit cards, which generally offer a
              secure way to manage subscriptions. However, in Germany, Netflix
              also allows users to use IBAN (International Bank Account Number)
              for payments, which led to a significant vulnerability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What is IBAN?</h2>
            <p className="font-light">
              IBAN stands for International Bank Account Number. It is a
              standard international numbering system developed to identify bank
              accounts across national borders and facilitate the processing of
              cross-border transactions. An IBAN is typically used in Europe and
              contains both letters and numbers that identify the country, bank,
              and individual account.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Details of the Vulnerability</h2>
            <p className="font-light">
              In Germany, Netflix offers the option to use an IBAN for payment.
              The process is straightforward:
            </p>
            <ol className="list-decimal px-5 space-y-5">
              <li className="space-y-1">
                <p className="text-lg">Use a VPN to Germany:</p>
                <p className="text-muted-foreground text-md font-light">
                  An attacker uses a VPN to appear as though they are in
                  Germany, which allows the IBAN payment option to be selected.
                </p>
              </li>

              <li className="space-y-1">
                <p className="text-lg">Enter IBAN Information:</p>
                <p className="text-muted-foreground text-md font-light">
                  The attacker enters information with a German IBAN.
                </p>
              </li>

              <li className="space-y-1">
                <p className="text-lg">Phone Verification:</p>
                <p className="text-muted-foreground text-md font-light">
                  Netflix requests a phone number to verify the payment method.
                </p>
              </li>

              <li className="space-y-2">
                <p className="text-lg">Bypassing Verification:</p>
                <p className="text-muted-foreground text-md font-light">
                  If an attacker entered an Italian IBAN instead of a German
                  one, Netflix would immediately open the account without
                  additional verification. This allowed attackers to start
                  watching content without proper verification.
                </p>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Impact</h2>
            <p className="font-light">
              This vulnerability posed significant risks, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="font-light">
                <strong>Unauthorized Access:</strong>
                <span className="font-light dark:text-muted-foreground">
                  {" "}
                  Attackers could gain access to Netflix content without paying
                  for a subscription.
                </span>
              </li>
              <li className="font-light">
                <strong>Potential Financial Loss:</strong>
                <span className="font-light dark:text-muted-foreground">
                  {" "}
                  Netflix could potentially lose revenue from users exploiting
                  this vulnerability to avoid subscription fees.
                </span>
              </li>
              <li className="font-light">
                <strong>Increased Fraud:</strong>{" "}
                <span className="font-light dark:text-muted-foreground">
                  he ease of generating fake IBANs and bypassing verification
                  could lead to widespread abuse, impacting Netflix's overall
                  security and user trust.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Responsible Disclosure Timeline
            </h2>
            <div className="relative">
              <div className="border-l-2 border-gray-500 dark:border-green-900">
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    Early 2022
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Discovered the vulnerability and prepared to report it to
                    Netflix.
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    Mid 2022
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Shared details with a friend, who unfortunately exposed it
                    to the public.
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    Late 2022
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Netflix noticed the public exploitation and took action to
                    close the vulnerability.
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    09 September 2022
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Vulnerability officially closed by Netflix.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="font-light">
              This case underscores the importance of robust payment
              verification mechanisms and the risks associated with using less
              secure methods like IBAN without adequate checks. It highlights
              the need for continuous security testing and prompt action upon
              discovering vulnerabilities to protect both the service provider
              and its users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
