import BlurBackground from "@/components/ui/blur-background";
import { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "../sections/footer";

export const metadata: Metadata = {
  title: "App Foodpoint | Connexion",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
    <div className="relative py-12  md:overflow-hidden ">
      {children}
      <BlurBackground />
    </div>
      <Footer/>
    </div>
  );
}
