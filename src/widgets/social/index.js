import React, { useEffect, useRef } from "react";
import Style from "./SocialIcons.module.scss";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import gsap from "gsap";

const SocialIcons = () => {
  const socialRef = useRef(null);
  var tl = gsap.timeline();
  useEffect(() => {
    tl.to(socialRef.current, {
      y: 0,
      duration: 0.5,
      opacity: 1,
      delay: 1.6,
      scale: 1,
    });
  }, []);
  return (
    <div ref={socialRef} className={Style.Social_icons}>
      <Link href="/" className="text-neutral-200 ">
        <FaLinkedinIn />
      </Link>
      <Link href="/" className="text-neutral-200 ">
        <FaGithub />
      </Link>
      <Link href="/" className="text-neutral-200 ">
        <FaInstagram />
      </Link>
      <Link href="/" className="text-neutral-200 ">
        <FaXTwitter />
      </Link>
    </div>
  );
};

export default SocialIcons;
