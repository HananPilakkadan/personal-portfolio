"use client";
import React from "react";
import Style from "./Header.scss";
import { Assets } from "@/assets";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className={Style.Navbar}>
        <div className="wrapper">
          <Image src={Assets.Logo} width={70} alt="Logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
