import { Metadata } from "next";
import { ReactNode } from "react";

import Footer from "../sections/footer";
import BlurBackground from "@/components/ui/blur-background";

export const metadata: Metadata = {
  title: "Foodpoint | Contact",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div>
    <div className="relative h-screen py-12">
      {children}
      <BlurBackground />
    </div>
      <Footer/>
    </div>
  );
}