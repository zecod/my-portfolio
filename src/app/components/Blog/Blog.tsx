import { BlogNavbar } from "./components/elemnts/NavBar";
import { Microsoft } from "./components/Microsoft";
import { NetflixCard } from "./components/elemnts/NetflixCard";
import { AppleCard } from "./components/Apple";
import { StripeCard } from "./components/StripeCard";

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
        <Microsoft />
        <NetflixCard />
        <AppleCard />
        <StripeCard />
      </div>
    </div>
  );
};

export default Blog;
