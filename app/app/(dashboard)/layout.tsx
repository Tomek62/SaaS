import { ReactNode, Suspense, useEffect, useState } from "react";
import Profile from "@/components/profile";
import Nav from "@/components/nav";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Metadata } from "next";

const title =
  "App FoodPoint";
const description =
  "FoodPoint est un service pour les restaurateurs leur permettant de créer un site de commande en ligne et click&collect facilement, et en quelques minutes, pour développer leur business.";
const image = "./logo.png";

export const metadata: Metadata = {
  title,
  description,
  icons: ["./favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@vercel",
  },
  metadataBase: new URL("https://vercel.pub"),
};
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session) {
    return 0;
  }
  const site = await prisma.site.findUnique({
    where: {
      userId: session.user.id as string,
    },
  });
  return (
    <div>
      <Nav site={site}>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </Nav>
      <div className="min-h-screen bg-bgDashboard sm:pl-80 text-black">{children}</div>
    </div>
  );
}
