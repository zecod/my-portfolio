import { BreadcrumbUrl } from "../components/BreadCrumb";
import { Badge } from "@/components/ui/badge";
import { SyntaxCode } from "../../Experience/Syntax";
import { NavArticle } from "../components/elemnts/NavArticle";

export const Shadcn = () => {
  const code = `import { Button } from "@/components/ui/button";

<Button variant="default">
  Click Me
</Button>`;

  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Shadcn" />

        <div className="my-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Overview of Shadcn: A Modern UI Library for React
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #React
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Shadcn
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #UIComponents
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              August 20, 2024
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
            src={
              "https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fmail-light.png&w=3840&q=75"
            }
            alt="Shadcn UI library preview"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Introduction
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Shadcn is a modern, flexible UI component library built for React
              developers who seek a balance between design flexibility and ease
              of use. In this post, we'll explore the key features of Shadcn,
              how to integrate it into your React project, and why it might be
              the right choice for your next UI project.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Key Features
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Shadcn offers a variety of pre-built UI components that are both
              customizable and accessible. Here are some of the standout
              features:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Comprehensive Component Library:</strong> Shadcn
                provides a wide range of components, from basic buttons to
                complex modals, all designed with modern web standards.
              </li>
              <li>
                <strong>Theming and Customization:</strong> With support for
                dark mode, theming, and CSS variables, Shadcn makes it easy to
                match the design of your app.
              </li>
              <li>
                <strong>Responsive Design:</strong> Shadcn components are built
                with responsiveness in mind, ensuring they look great on any
                device.
              </li>
              <li>
                <strong>Accessibility:</strong> Every component in Shadcn
                follows best practices for accessibility, ensuring your app is
                usable by everyone.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Getting Started with Shadcn
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Integrating Shadcn into your React project is straightforward.
              Follow these steps to get started:
            </p>
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <li>
                <p className="text-lg font-semibold">Install Shadcn:</p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Run the following command to install Shadcn in your React
                  project:
                </p>
                <SyntaxCode code={`npm install shadcn-ui`} />
              </li>

              <li>
                <p className="text-lg font-semibold">Import Components:</p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Start using Shadcn components by importing them into your
                  React files. Here's an example of importing a button
                  component:
                </p>
                <SyntaxCode code={code} />
              </li>

              <li>
                <p className="text-lg font-semibold">Customize Components:</p>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  You can easily customize components by passing props or
                  applying your own CSS classes. Shadcn's design system is
                  highly flexible, allowing you to maintain consistency with
                  your brand.
                </p>
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Why Choose Shadcn?
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Shadcn is ideal for developers who need a balance of design
              flexibility, ease of use, and performance. Its focus on
              accessibility and modern web standards makes it a strong contender
              in the crowded field of React UI libraries.
            </p>
            <div className="flex items-center space-x-2">
              <p className="leading-7 [&:not(:first-child)]:mt-2">
                <strong>
                  <span className="text-muted-foreground">-</span>{" "}
                  Developer-Friendly:
                </strong>{" "}
                Shadcn’s API is intuitive, making it easy to learn and
                integrate, even for those new to React.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="leading-7 [&:not(:first-child)]:mt-2">
                <strong>
                  <span className="text-muted-foreground">-</span>{" "}
                  Performance-Oriented:
                </strong>{" "}
                The components are optimized for performance, ensuring your
                application remains fast and responsive.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="leading-7 [&:not(:first-child)]:mt-2">
                <strong>
                  <span className="text-muted-foreground">-</span> Versatile:
                </strong>{" "}
                Whether you're building a small personal project or a
                large-scale enterprise application, Shadcn scales to meet your
                needs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Conclusion
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Shadcn is a powerful and flexible UI library that is well-suited
              for modern React applications. With its robust feature set, ease
              of use, and focus on accessibility, Shadcn can help you build
              visually appealing and performant web interfaces with minimal
              effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
