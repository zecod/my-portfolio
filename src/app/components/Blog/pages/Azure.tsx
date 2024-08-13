import { NavArticle } from "../components/elemnts/NavArticle";
import { BreadcrumbUrl } from "../components/BreadCrumb";
import AzureImg from "../../../../assets/azure.png";
import { Badge } from "@/components/ui/badge";
import { SyntaxCode } from "../../Experience/Syntax";

export const Azure = () => {
  const code = `<button id="subscribe" class="btn btn-primary" disabled>
  Subscribe
</button>`;
  return (
    <div className="container ">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Azure" />

        <div className="my-5">
          <h1 className="text-4xl font-extrabold">
            Bypassing 3D Authentication in Microsoft Azure: A Vulnerability
            Report
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Microsoft
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Azure
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Security
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">May 15, 2024</p>
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
            src={AzureImg}
            alt="Microsoft Azure landing page"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="font-light">
              In this blog post, I will discuss a vulnerability I discovered in
              Microsoft Azure that allowed users to bypass 3D authentication,
              enabling them to use Azure services without the actual owner’s
              confirmation. Although this vulnerability has been fixed, it is
              crucial to understand the implications and the importance of
              robust security measures.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Details of the Vulnerability</h2>
            <p className="font-light">
              This vulnerability affects Microsoft Azure's sign-up process,
              specifically the steps involved in verifying credit card
              information via 3D authentication. By exploiting this flaw, an
              attacker could start using Azure services without completing the
              necessary authentication steps intended to prevent fraud.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Steps to Reproduce the Vulnerability:
            </h2>
            <ol className="list-decimal px-5 space-y-5">
              <li className="space-y-1">
                <p className="text-lg">
                  Navigate to Microsoft Azure's Sign-Up Page:
                </p>
                <p className="text-muted-foreground text-md font-light">
                  - Go to the Microsoft Azure website and choose either the
                  "Pay-As-You-Go" or "Free Trial" option.
                </p>
              </li>

              <li className="space-y-1">
                <p className="text-lg">Enter Required Information:</p>
                <p className="text-muted-foreground text-md font-light">
                  - Fill in the necessary details such as name, email, address,
                  phone number, etc.
                </p>
              </li>

              <li className="space-y-1">
                <p className="text-lg">Credit Card Information:</p>
                <p className="text-muted-foreground text-md font-light">
                  - Enter the credit card information as prompted. Modern credit
                  cards typically require 3D security authentication to complete
                  the process.
                </p>
              </li>

              <li className="space-y-2">
                <p className="text-lg">3D Authentication:</p>
                <p className="text-muted-foreground text-md font-light">
                  - When the 3D authentication page appears, the "Subscribe"
                  button is disabled until the authentication is successfully
                  completed.
                </p>
                {/* <img src={Disabled} className="rounded-xl" /> */}
              </li>

              <li className="space-y-2">
                <p className="text-lg">Exploit the Vulnerability:</p>
                <p className="text-muted-foreground text-md font-light">
                  - Open the browser's developer tools (F12).
                </p>
                <p className="text-muted-foreground text-md font-light">
                  - Inspect the "Subscribe" button element.
                </p>
                <p className="text-muted-foreground text-md font-light">
                  - You will notice an attribute{" "}
                  <Badge variant={"secondary"}>disabled</Badge> which is
                  supposed to be enabled only after completing the 3D
                  verification.
                </p>
                <p className="text-muted-foreground text-md font-light">
                  - Delete the <Badge variant={"secondary"}>disabled</Badge>{" "}
                  attribute from the button's HTML code:
                </p>
                <SyntaxCode code={code} />
              </li>

              <li className="space-y-2">
                <p className="text-lg">Bypass the 3D Authentication:</p>
                <p className="text-muted-foreground text-md font-light">
                  - With the <Badge variant={"secondary"}>disabled</Badge>
                  attribute removed, the "Subscribe" button becomes clickable.
                </p>

                <p className="text-muted-foreground text-md font-light">
                  - Click the "Subscribe" button to bypass the 3D authentication
                  process and gain access to Microsoft Azure services without
                  proper verification.
                </p>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Impact</h2>
            <p className="font-light">
              The potential risks of this vulnerability were significant. Here
              are some specific impacts:
            </p>
            <div className="flex items-center space-x-2 pl-">
              <p className="font-light">
                <strong>
                  {" "}
                  <span className="text-muted-foreground">-</span> Easy to
                  Exploit:{" "}
                </strong>
                <span className="font-light dark:text-muted-foreground">
                  Attackers with basic technical skills could easily exploit
                  this vulnerability using standard browser tools, making it a
                  high-risk issue.
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-light">
                <strong>
                  <span className="text-muted-foreground">-</span> Unauthorized
                  Access:{" "}
                </strong>
                <span className="font-light dark:text-muted-foreground">
                  Attackers could exploit this flaw to create accounts and gain
                  access to Azure services without the rightful owner’s
                  knowledge or consent. This unauthorized access can compromise
                  sensitive data and resources.
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-light">
                <strong>
                  <span className="text-muted-foreground">-</span> Fraudulent
                  Activities:{" "}
                </strong>
                <span className="font-light dark:text-muted-foreground">
                  The vulnerability opens the door for fraudulent activities,
                  where attackers could use the services under false identities,
                  leading to trust issues and potential legal consequences for
                  Azure.
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-light">
                <strong>
                  <span className="text-muted-foreground">-</span> Misuse of
                  Resources:{" "}
                </strong>
                <span className="font-light dark:text-muted-foreground">
                  Unauthorized users could misuse Azure's resources, running
                  high-cost operations or launching attacks on other services,
                  causing performance degradation and increased operational
                  costs for Microsoft.
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-light">
                <strong>
                  <span className="text-muted-foreground">-</span> Financial
                  Losses:{" "}
                </strong>
                <span className="font-light dark:text-muted-foreground">
                  Legitimate account owners may suffer financial losses due to
                  the unauthorized use of their accounts, leading to unexpected
                  charges and the potential for significant financial damage.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Responsible Disclosure Timeline
            </h2>
            <div className="relative">
              <div className="border-l-2 border-gray-500 dark:border-green-900">
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    18 May 2024
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Submitted the vulnerability report to Microsoft.
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    20 May 2024
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Received a response from Microsoft Security Response Center
                    (MSRC) indicating that they opened a case and the status
                    changed from{" "}
                    <Badge variant={"secondary"} className="rounded">
                      New
                    </Badge>{" "}
                    to{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Review / Repro
                    </Badge>{" "}
                    .
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    3 June 2024
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Status changed from{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Review / Repro
                    </Badge>{" "}
                    to{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Develop
                    </Badge>{" "}
                    , and I received a message that the report was not eligible
                    for a bounty because it was on a sign-up form, which is not
                    part of the bounty program.
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    19 June 2024
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Status changed from{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Develop
                    </Badge>{" "}
                    to{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Pre-Release
                    </Badge>{" "}
                    .
                  </p>
                </div>
                <div className="mb-10 ml-4">
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
                    25 June 2024
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Status changed from{" "}
                    <Badge variant={"outline"} className="rounded py-1 ml-2">
                      Pre-Release
                    </Badge>{" "}
                    to{" "}
                    <Badge
                      variant={"outline"}
                      className="rounded bg-green-400 dark:bg-green-900 py-1 ml-2"
                    >
                      Complete
                    </Badge>{" "}
                    . I received an email from Microsoft confirming that the
                    issue has been fixed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="font-light">
              This case highlights the importance of thorough security testing
              and prompt reporting of discovered vulnerabilities. Microsoft’s
              quick response and resolution of the issue demonstrate their
              commitment to maintaining the security of their platform. It is
              crucial for users and developers to remain vigilant and report any
              potential security issues to help create a safer online
              environment.
            </p>
          </div>

          <div className="space-y-4 pb-20">
            <h2 className="text-2xl font-bold">Further Reading</h2>
            <p className="font-light">
              For more information on Azure security, you can refer to the
              following resources:
              <ul className="list-disc pl-5">
                <li>
                  <a
                    href="https://docs.microsoft.com/en-us/azure/security/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Microsoft Azure Security Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.owasp.org/index.php/Main_Page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    OWASP - Open Web Application Security Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://azure.microsoft.com/en-us/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Microsoft Azure Blog
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
