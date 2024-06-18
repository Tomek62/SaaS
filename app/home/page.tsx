"use client";

import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Footer from "./components/footer";
import PlanSection from "./components/PlanSection";
import Features from "./components/features";
import Demo from "./components/demoSection";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ArrowBigDownDash, Menu } from "lucide-react";
import IphoneMockup from "@/components/iphone-mockup";

export default function HomePage() {
  
  return (
    <div className="flex min-h-screen flex-col bg-light-brand-muted ">
      <div className="relative min-h-screen">
        <div>
          <Nav />
          <Hero />
        </div>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          fill="#EFF6FF"
          preserveAspectRatio="none"
          className="w-screen"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      <Features />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1100 120"
        fill="#EFF6FF"
        style={{ transform: "scale(-1)" }}
        preserveAspectRatio="none"
      >
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
      </svg>
      <Demo />
      <PlanSection />
      <Footer />
    </div>
  );
}
