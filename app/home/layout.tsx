import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Foodpoint | Bienvenue",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white ">
      {children}
    </div>
  );
}