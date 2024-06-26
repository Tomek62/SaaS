import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Login | Platforms Starter Kit",
};

export default function WebappLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-6 py-24 bg-gray-100 min-h-screen">
      {children}
    </div>
  );
}