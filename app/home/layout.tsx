import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "App Foodpoint | Connexion",
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-light-brand-muted ">
      {children}
    </div>
  );
}