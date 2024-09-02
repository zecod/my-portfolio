import { BlogNavbar } from "./components/elemnts/NavBar";
import { ShadcnCard } from "./components/ShadcnCard";
import { VerceliCard } from "./components/VerceliCard";
import { Nextjs14Card } from "./components/NextCard";
// import { Microsoft } from "./components/Microsoft";
// import { NetflixCard } from "./components/NetflixCard";
// import { AppleCard } from "./components/Apple";
// import { StripeCard } from "./components/StripeCard";

const Blog = () => {
  return (
    <div className="container space-y-8">
      <BlogNavbar />
      <div>
        <h1 className="text-3xl font-extrabold">
          Insights from a Full Stack Developer & Security Researcher
        </h1>
        <p className="text-muted-foreground mt-1 ">
          Explore the latest in web development and vulnerability research.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <VerceliCard />
        <Nextjs14Card />
        <ShadcnCard />
        {/* <StripeCard />
        <Microsoft />
        <NetflixCard />
        <AppleCard /> */}
      </div>
    </div>
  );
};

export default Blog;
