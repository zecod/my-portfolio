import { Button } from "@/components/ui/button";
import React from "react";
import SVGlogo from "../assets/logo.svg";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import { Frame } from "./components/Experience/Frame";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Projects } from "./components/Projects/Projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

import { Hobby } from "./components/Experience/Hobby";

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
        <div className="hidden svg-bottom w-full md:flex items-center justify-center h-auto mt-40">
          <ChevronDown />
        </div>
      </div>
      <div className="container">
        <TracingBeam>
          <About />
          <Hobby />
          <Frame />
          <Projects />
          <Contact />
        </TracingBeam>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
