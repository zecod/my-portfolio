import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";
import { Frame } from "./components/Experience/Frame";

import { useGSAP } from "@gsap/react";
import { Projects } from "./components/Projects/Projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hobby } from "./components/Experience/Hobby";
import { Security } from "./components/Experience/Security";

const Home = () => {
  useGSAP(() => {
    gsap.to(".svg-bottom", {
      y: "100%",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-10 backdrop-blur-md border-b-zinc-100">
        <Navbar />
      </div>
      <div className="container h-screen flex flex-col">
        <Hero />
 
      </div>
      <div className="container">
        <TracingBeam>
          <About />
          <Hobby />
          <Frame />
          <Security />
          <Projects />
          <Contact />
        </TracingBeam>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
