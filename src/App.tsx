import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import Notfound from "./app/404";
import { ThemeProvider } from "./components/ui/theme-provider";
import Blog from "./app/components/Blog/Blog";
import "./App.css";
import { Azure } from "./app/components/Blog/pages/Azure";
import { NetflixVulnerability } from "./app/components/Blog/pages/Netflix";
import { AppleVulnerability } from "./app/components/Blog/pages/Apple";
import { StripeSEPAFraud } from "./app/components/Blog/pages/Stripe";
import { Shadcn } from "./app/components/Blog/pages/Shadcn";
import { VerceliBlog } from "./app/components/Blog/pages/Verceli";
import { Nextjs14Blog } from "./app/components/Blog/pages/Next";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/azure" element={<Azure />} />

          <Route path="/blog/netflix" element={<NetflixVulnerability />} />
          <Route path="/blog/apple" element={<AppleVulnerability />} />
          <Route path="/blog/stripe" element={<StripeSEPAFraud />} />
          <Route path="/blog/shadcn" element={<Shadcn />} />
          <Route path="/blog/verceli" element={<VerceliBlog />} />
          <Route path="/blog/nextjs14" element={<Nextjs14Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
