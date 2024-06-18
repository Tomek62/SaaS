import { ReactNode, Suspense, useEffect, useState } from "react";
import Profile from "@/components/profile";
import Nav from "@/components/nav";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

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
      <div className="min-h-screen dark:bg-black sm:pl-60">{children}</div>
    </div>
  );
}
