import { Metadata } from "next";
import { ReactNode } from "react";

import Footer from "../sections/footer";
import BlurBackground from "@/components/ui/blur-background";

export const metadata: Metadata = {
  title: "Foodpoint | Tarifs",
};

export default function PlansLayout({ children }: { children: ReactNode }) {
  return (
    <div>
    <div className="relative min-h-screen py-12">
      {children}
      <BlurBackground />
    </div>
      <Footer/>
    </div>
  );
}