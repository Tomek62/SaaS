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
import ProcessSection from "./sections/processSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Nav />
      <Hero />
      <ProcessSection />
      <Features />    
      <Demo />
      <PlanSection />
      <Footer />
    </div>
  );
}
