"use client";
import "tailwindcss/tailwind.css";
import Header from "../Header";
import Style from "./spotlight.module.scss";
import { BackgroundBeams } from "../BackgroundBeams";
import { FlipWords, TextGenerateEffect } from "../FlipWords";
import SocialIcons from "@/widgets/social";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Spotlight = () => {
  const socialRef = useRef(null);
  const tagRef = useRef(null);
  var tl = gsap.timeline();
  useEffect(() => {
    tl.to(socialRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 0,
      scale: 1,
    });
    tl.to(tagRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 0.5,
      scale: 1,
    });
  }, []);
  return (
    <>
      <div className="h-[100vh] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <Header />
        <div className="max-w-2xl mx-auto p-4">
          <span
            ref={socialRef}
            className={`text-5xl sm:text-6xl md:text-7xl font-sans font-bold ${Style.hi}`}
          >
            Hi,
          </span>

          <TextGenerateEffect words={"I'm Hanan"} />

          <p
            ref={tagRef}
            className={`${Style.p} text-left text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10`}
          >
            a software engineer
          </p>
          <SocialIcons />
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Spotlight;
