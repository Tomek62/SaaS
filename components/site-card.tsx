import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, random } from "@/lib/utils";
import { Site } from "@prisma/client";
import { BarChart, ExternalLink } from "lucide-react";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { set } from "date-fns";
import {getSite} from "@/lib/fetchers";
import { useState } from "react";

export default async function SiteCard() {
  const session = await getSession();
  if (!session) {
    return redirect("/login");
  }
  const site = await prisma.site.findFirst({
    where: {
      userId: session.user.id as string,
    },
  });

  const url = `${site?.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;
  return site ? (
    <div className="relative rounded-lg max-w-md border border-stone-200 pb-10 shadow-md transition-all hover:shadow-xl dark:border-stone-700 dark:hover:border-white">
      <Link
        href={`/site/${site?.id}`}
        className="flex flex-col overflow-hidden rounded-lg"
      >
        <BlurImage
          alt={site?.name ?? "Card thumbnail"}
          width={500}
          height={400}
          className="h-44 object-cover"
          src={site?.image ?? "/placeholder.png"}
          placeholder="blur"
          blurDataURL={site?.imageBlurhash ?? placeholderBlurhash}
        />
        <div className="border-t border-stone-200 p-4 dark:border-stone-700">
          <h3 className="my-0 truncate font-cal text-xl font-bold tracking-wide">
            {site?.name}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm font-normal leading-snug text-stone-500 ">
            {site?.description}
          </p>
        </div>
      </Link>
      <div className="absolute bottom-4 flex w-full justify-between space-x-4 px-4">
        <a
          href={
            process.env.NEXT_PUBLIC_VERCEL_ENV
              ? `https://${url}`
              : `http://${site?.subdomain}.localhost:3000`
          }
          target="_blank"
          rel="noreferrer"
          className="truncate rounded-md bg-stone-100 px-2 py-1 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
        >
          {url} ↗
        </a>
        <Link
          href={`/site/${site?.id}/analytics`}
          className="flex items-center rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-600 transition-colors hover:bg-green-200 dark:bg-green-900 dark:bg-opacity-50 dark:text-green-400 dark:hover:bg-green-800 dark:hover:bg-opacity-50"
        >
          <BarChart height={16} />
          <p>{random(10, 40)}%</p>
        </Link>
      </div>
    </div>
  ):(
    <h1>Vous n'avez pas de site</h1>
  )
}
