"use client";
import Spotlight from "@/components/Spotlight";
import { NextUIProvider } from "@nextui-org/react";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Spotlight />
      </NextUIProvider>
    </>
  );
}
