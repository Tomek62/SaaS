import { Metadata } from "next";
import { ReactNode } from "react";
import BlurBackground from "@/components/ui/blur-background";
export const metadata: Metadata = {
  title: "App Foodpoint | Connexion",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-white overflow-hidden flex h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
      <BlurBackground />
    </div>
  );
}
