"use client";
import "tailwindcss/tailwind.css";
import Header from "../Header";
import Style from "./spotlight.module.scss";
import { BackgroundBeams } from "../BackgroundBeams";
import { FlipWords, TextGenerateEffect } from "../TextGeneration";
import SocialIcons from "@/widgets/social";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Spotlight = () => {
  const socialRef = useRef(null);
  var tl = gsap.timeline();
  useEffect(() => {
    tl.to(socialRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 0.1,
      scale: 1,
    });
  }, []);
  return (
    <>
      <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Header />
        <div className="max-w-2xl mx-auto p-4">
          <span
            ref={socialRef}
            className={`text-5xl sm:text-6xl md:text-7xl font-sans font-bold ${Style.hi}`}
          >
            Hi,
          </span>

          <TextGenerateEffect words={"I'm Hanan"} isSmall={false} />
          <TextGenerateEffect words={"a software engineer"} isSmall={true} />

          <SocialIcons />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Spotlight;
