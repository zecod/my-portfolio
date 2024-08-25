import { BreadcrumbUrl } from "../components/BreadCrumb";
import { Badge } from "@/components/ui/badge";
import { SyntaxCode } from "../../Experience/Syntax";
import { NavArticle } from "../components/elemnts/NavArticle";

export const Nextjs14Blog = () => {
  const serverActionCode = `export default function FormPage() {
    async function performServerAction(formData: FormData) {
      'use server';
      const id = await submitFormData(formData);
    }

    return (
      <form action={performServerAction}>
        {/* form inputs */}
        <button type="submit">Submit</button>
      </form>
    );
  }`;

  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Next.js 14" />

        <div className="my-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Next.js 14: A Comprehensive Overview of the Latest Features
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Nextjs
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #WebDevelopment
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #JavaScript
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              August 22, 2024
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
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png"
            alt="Next.js 14 Features"
            className="rounded-xl border dark:border-none dark:bg-white"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Introduction
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Next.js 14 brings a host of new features and improvements that
              continue to push the boundaries of what's possible with web
              development. From enhanced server actions to improved font
              optimization, this update is packed with tools that make building
              modern web applications more efficient and powerful.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Server Actions: Simplifying Server-Side Operations
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              One of the standout features in Next.js 14 is the stability of
              Server Actions. This powerful feature allows developers to perform
              server-side logic directly within their React components. It
              simplifies data mutations and form submissions by encapsulating
              the necessary server-side operations, making the code cleaner and
              easier to manage.
            </p>
            <SyntaxCode code={serverActionCode} title="main.js"/>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              With Server Actions, you can streamline how your application
              handles backend processes, enhancing both performance and
              maintainability.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Partial Prerendering: The Best of Both Worlds
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Partial Prerendering is another exciting feature introduced in
              this version. It combines the benefits of static site generation
              (SSG) and server-side rendering (SSR), allowing developers to
              prerender static parts of a page while dynamically loading other
              components as needed.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              By leveraging React's Suspense boundaries, you can now create a
              hybrid approach that improves performance without sacrificing the
              flexibility of dynamic content. This is particularly useful for
              applications with a mix of static and dynamic elements, ensuring
              fast load times and a smooth user experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Improved Font Optimization
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Font optimization has always been a crucial part of web
              performance, and Next.js 14 takes it to the next level. The new
              version allows developers to self-host fonts more easily and
              integrates seamlessly with Tailwind CSS. This enhancement not only
              boosts performance but also gives you more control over how fonts
              are loaded and displayed across your application.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Enhanced Metadata Management
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Metadata management is critical for optimizing the user
              experience, and Next.js 14 introduces significant improvements in
              this area. By separating blocking and non-blocking metadata, the
              framework ensures that the initial page load is not delayed by
              unnecessary metadata processing. This change helps prevent issues
              like layout shifts or theme color flickering, contributing to a
              smoother user experience.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Conclusion
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Next.js 14 is a game-changer for developers, offering a robust set
              of tools and enhancements that streamline the development process
              and improve application performance. Whether you're building
              simple websites or complex applications, the new features in
              Next.js 14 are designed to make your job easier and your apps
              faster.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Ready to take advantage of these new features? Update to Next.js
              14 today and start exploring the possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
