"use client";

import Image from "next/image";
import Nav from "./sections/nav";
import Hero from "./sections/hero";
import Footer from "./sections/footer";
import PlanSection from "./sections/PlanSection";
import Features from "./sections/features";
import Demo from "./sections/demoSection";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ArrowBigDownDash, Menu } from "lucide-react";
import IphoneMockup from "@/components/iphone-mockup";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-light-brand-muted ">
      <Nav />
      <Hero />
      <div className="bg-light-brand-faint">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#bfdbfe "
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
        </svg>
      </div>
      <Features />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill=" #eff6ff "
      >
        <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
      </svg>
      <Demo />
      <PlanSection />
      <Footer />
    </div>
  );
}
