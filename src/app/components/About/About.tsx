import React from "react";
import { DraftingCompass, User } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".scroll-info",
      { opacity: 0, x: -20 },
      {
        scrollTrigger: {
          trigger: ".scroll-info",
          start: "bottom bottom",
          end: "start start",
          onEnter: () => {
            gsap.fromTo(
              ".stagger-info",
              { opacity: 0 },
              { opacity: 1, stagger: 0.5 }
            );
          },
          once: true,
        },
        opacity: 1,
        x: 0,
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="mb-60 space-y-5 scroll-info">
      <h2 className="stagger-info flex gap-1 items-center">
        <User />
        ABOUT ME
      </h2>
      <h1 className="stagger-info text-2xl font-bold">
        Full-Stack Developer & Cybersecurity Enthusiast
      </h1>

      <p className="stagger-info text-md text-zinc-500 mb-5">
        Hey, my name is Yassine, and I use Yass as my nickname across social
        media. I’m a full-stack web developer based in Italy. With a strong
        background in both front-end and back-end technologies, I specialize in
        creating seamless, robust, and scalable web applications. My passion for
        the entire development stack drives my continuous learning and mastery
        of new technologies. Beyond coding, I have a keen interest in
        cybersecurity, particularly in identifying vulnerabilities within big
        companies' systems. I am always eager to explore and integrate the
        latest innovations in tech to enhance my projects and ensure they are
        secure and efficient.
      </p>

      <h2 className="stagger-info text-md text-zinc-500">
        Companies Where I've Found Vulnerabilities:
      </h2>

      <div className="stagger-info flex items-center flex-wrap gap-5">
        <a href="https://www.edenred.it/" target="_blank">
          <img
            src="https://ticket-restaurant.edenred.it/exp/int/img/logo.svg"
            className="grayscale aspect-auto w-20 h-16 object-contain transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.netflix.com/" target="_blank">
          <img
            src="https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://azure.microsoft.com/" target="_blank">
          <img
            src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.atm.it" target="_blank">
          <img
            src="https://www.atm.it/SiteCollectionImages/logo83.60.jpg"
            className="grayscale aspect-auto transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.enel.it/" target="_blank">
          <img
            src="https://www.enel.com/etc.clientlibs/enel-common/clientlibs/clientlib-bundle/resources/img/logo/logo.svg"
            className="grayscale aspect-auto w-20 h-16 object-contain transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.engie.it/" target="_blank">
          <img
            src="data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nby1lbmdpZS1ibHVlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMTkuMTMgMTEzLjM4Ij48dGl0bGU+bG9nby1lbmdpZS1zb2xpZDwvdGl0bGU+PHBhdGggZD0iTTMxOS4xMyw0NS44MkMyNzYuMzcsMTcuMjcsMjIwLjU5LDAsMTU5LjU3LDBTNDIuNzYsMTcuMjcsMCw0NS44MkM0Mi41MywzMS42OCw5Mi4yNSwyMi45MSwxNTkuNTcsMjIuOTFTMjc2LjYxLDMxLjY4LDMxOS4xMyw0NS44MloiIHN0eWxlPSJmaWxsOiMwYWY7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48cGF0aCBkPSJNMTM1LjEsNjAuNjZjLTMuMTQsMC00Ljc1LDIuNTQtNS4xNiw1LjY1LS40NiwzLjQ0LTIuMjcsMTUuMzUtMi42NywxOC4zNy0uMjQsMS44Mi0uMzcsMy43MS0yLjEzLDQuNDlzLTMuOS0uNDItNS43Mi0yTDkwLjU4LDYyLjY1YTguMTMsOC4xMywwLDAsMC01LjM2LTJjLTQuMDgsMC04LDIuNTMtOCw4LjcydjM4LjM1YTQuNjIsNC42MiwwLDAsMCw0LjYzLDQuOSw0Ljg4LDQuODgsMCwwLDAsNS00LjU1czMtMTguMjcsMy4zMy0yMC4zMWMuNDItMi4zNy43OS00LjIzLDMuMDgtNC45NCwyLjA3LS42NCw0LC41Niw2Ljk0LDMuMTFzMjcuMiwyNC40OCwyNy4yLDI0LjQ4YTcuODMsNy44MywwLDAsMCw1Ljg2LDIuMjFjMi4zOSwwLDYuNzMtMSw2LjczLTguMjhWNjYuMTRDMTQwLDYyLjYsMTM3Ljc3LDYwLjY2LDEzNS4xLDYwLjY2WiIgc3R5bGU9ImZpbGw6IzBhZiIvPjxwYXRoIGQ9Ik0zMDkuMTEsMTAxLjUzYy0yMS4xOSw0LjU2LTQ1LjQ1LS4zMS00NS40NS0xNS4zMSwwLTExLjMzLDEwLjUxLTE1Ljk0LDE4Ljc5LTE2LjYxLDguNjktLjY5LDE1LjQ4LDEuMTMsMTksNC43NiwyLjE4LDIuMjcsMS41Nyw1LjM2LTIuNzIsNS42MS0zLjk0LjI0LTExLjM1LjQ3LTE3LjUxLjctMy41LjEzLTUuMzcsMi01LjM3LDQuNTMsMCwyLDEuNSw0LjI4LDUuNTMsNC4zLDUuNzcsMCwyMC40Mi4xMiwyNy42OS4xNCw0LjgxLDAsNy4xNy0yLjY4LDcuMTctOC4yMSwwLTguNzUtNy45My0yMi0zMS4xNC0yMi0yMSwwLTM2LjI0LDEwLjQ4LTM2LjI0LDI3LjYsMCwyNC4yOCwzNS43MywzMS42OSw2MS45MSwyMi42NywyLjQ4LS44NSw0LjczLTIuNjQsNC01LjQxQzMxNC4xMywxMDEuODEsMzEyLjEyLDEwMC44OCwzMDkuMTEsMTAxLjUzWiIgc3R5bGU9ImZpbGw6IzBhZiIvPjxwYXRoIGQ9Ik02My4yLDEwMS41M2MtMjEuMiw0LjU2LTQ1LjQ1LS4zMS00NS40NS0xNS4zMSwwLTExLjMzLDEwLjUtMTUuOTQsMTguNzktMTYuNjEsOC42OC0uNjksMTUuNDcsMS4xMywxOSw0Ljc2LDIuMTgsMi4yNywxLjU3LDUuMzYtMi43MSw1LjYxLTMuOTUuMjQtMTEuMzYuNDctMTcuNTIuNy0zLjUuMTMtNS4zNywyLTUuMzcsNC41MywwLDIsMS41LDQuMjgsNS41Myw0LjMsNS43NywwLDIwLjQzLjEyLDI3LjcuMTQsNC44LDAsNy4xNy0yLjY4LDcuMTctOC4yMSwwLTguNzUtNy45NC0yMi0zMS4xNS0yMi0yMSwwLTM2LjI0LDEwLjQ4LTM2LjI0LDI3LjYsMCwyNC4yOCwzNS43MywzMS42OSw2MS45MiwyMi42NywyLjQ4LS44NSw0LjczLTIuNjQsNC01LjQxQzY4LjIyLDEwMS44MSw2Ni4yMSwxMDAuODgsNjMuMiwxMDEuNTNaIiBzdHlsZT0iZmlsbDojMGFmIi8+PHBhdGggZD0iTTIyNy4zNyw3OC4xOGMuNDcsMTMuMjQsMS43MiwyNC4yMiwyLjA3LDI4LjA3LjQ1LDUsMyw2LjM4LDUuNTksNi4zOHM1LjEtMS4yOSw1LjU1LTYuMzRDMjQxLDEwMi4wNSwyNDIuMjIsODksMjQyLjgzLDc2YS43Ny43NywwLDAsMC0xLS44N2wtMTMuOCwyLjIzQS44My44MywwLDAsMCwyMjcuMzcsNzguMThaIiBzdHlsZT0iZmlsbDojMGFmIi8+PHBhdGggZD0iTTIzNS4wNyw1OS40MWE3LjYzLDcuNjMsMCwwLDAtOC4xLDhjMCwuNTcuMDcsMi4xMy4xNiw0LjA4YS44NS44NSwwLDAsMCwxLC43OWwxNC40LTIuMzRhLjgzLjgzLDAsMCwwLC43LS43OWMwLS42OCwwLTEuMzcuMDYtMS43QTcuNzQsNy43NCwwLDAsMCwyMzUuMDcsNTkuNDFaIiBzdHlsZT0iZmlsbDojMGFmIi8+PHBhdGggZD0iTTIxMy45MSw4MC41MmMtNC44LDAtMTkuNjIuMTItMjkuMS4xNC00LjYsMC01Ljc1LDIuNDgtNS43NSw0LjUzLDAsMS43OCwxLjI0LDQuMDgsNS41Myw0LjMsNi41My4zNCwxNC44NS43MywxOC42OS45Myw1LjE3LjI2LDUuMjQsMi45MiwzLjQ5LDUuMi0zLjUxLDQuNTYtMTIuMDUsNy41NS0yMC45LDcuNTUtMTEuNTgsMC0yNC4zMi02LjU4LTI0LjMyLTE3LDAtOS44LDEwLjkxLTIwLjU5LDQzLjMtMTYsMi44NS40LDUuNjUtLjExLDYuMzUtMi43NS43NS0yLjgtMS4wOC00LjYtNC43Ni01LjU3QTc4LjE1LDc4LjE1LDAsMCwwLDE4Niw1OS40MWMtMjEuODEsMC0zOS4yOSwxMC40MS0zOS4yOSwyNy4yMywwLDE4LDE3LjQyLDI2Ljc0LDM5LjE0LDI2Ljc0LDI0LjI1LDAsMzYuMDYtMTMuMiwzNi4wNi0yNC43NEMyMjEuOTMsODIuNzcsMjE4Ljk0LDgwLjUyLDIxMy45MSw4MC41MloiIHN0eWxlPSJmaWxsOiMwYWYiLz48L3N2Zz4K"
            className="grayscale aspect-auto w-20 h-16 object-contain transition-all hover:grayscale-0"
          />
        </a>
        <a href="https://www.windtre.it/" target="_blank">
          <img
            src="https://www.windtre.it/content/experience-fragments/windtre/it/it/site/header/master/_jcr_content/root/header/aem-footer-fixed-icon__desktop.coreimg.svg/1698759224713/big.svg"
            className="grayscale aspect-auto w-20 h-12 object-contain transition-all hover:grayscale-0"
          />
        </a>
      </div>
    </div>
  );
};
