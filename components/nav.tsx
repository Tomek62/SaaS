"use client";

import Link from "next/link";
import {
  ArrowLeft,
  AreaChart,
  BarChart3,
  Edit3,
  Globe,
  Layout,
  LayoutDashboard,
  Menu,
  Newspaper,
  Settings,
  FacebookIcon,
  FileCode,
  Github,
  History,
  ScrollText,
  UtensilsCrossed,
} from "lucide-react";
import {
  useParams,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { getSiteFromPostId } from "@/lib/actions";
import Image from "next/image";
import { getSession } from "next-auth/react";

import { Site } from "@prisma/client";

const externalLinks = [
  {
    name: "Votre site",
    href: "https://vercel.com/blog/platforms-starter-kit",
    icon: <Globe width={18} />,
  },
  {
    name: "Facebook",
    href: "https://github.com/vercel/platforms",
    icon: <FacebookIcon width={18} />,
  },
];

export default function Nav({ children,site }: { children: ReactNode ,site:Site|null}) {
  const segments = useSelectedLayoutSegments();

  const tabs = useMemo(() => {
    if (segments[0] === "site") {
      return [
        {
          name: "Retour à l'accueil",
          href: "/",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Overview",
          href: `/site/${site?.id}`,
          isActive: segments.length === 2 && segments[1] === site?.id,
          icon: <LayoutDashboard width={18} />,
        },
        {
          name: "Analytics",
          href: `/site/${site?.id}/analytics`,
          isActive: segments.includes("analytics"),
          icon: <BarChart3 width={18} />,
        },
        {
          name: "Paramétres",
          href: `/site/${site?.id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    } else if (segments[0] === "post" && site?.id) {
      return [
        {
          name: "Back to All Posts",
          href: site?.id ? `/site/${site?.id}` : "/sites",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Editor",
          href: `/post/${site?.id}`,
          isActive: segments.length === 2,
          icon: <Edit3 width={18} />,
        },
        {
          name: "Paramétres",
          href: `/post/${site?.id}/settings`,
          isActive: segments.includes("settings"),
          icon: <Settings width={18} />,
        },
      ];
    } else if (segments[0] === "orders") {
      return [
        {
          name: "Retour à l'accueil",
          href: "/",
          icon: <ArrowLeft width={18} />,
        },
        {
          name: "Suivi des commandes",
          href: `/orders/online`,
          isActive: "online" === segments[1],
          icon: <Edit3 width={18} />,
        },
        {
          name: "Historique des commandes",
          href: `/orders/history`,
          isActive: "history" === segments[1],
          icon: <History width={18} />,
        },
      ];
    }
    return [
      {
        name: "Overview",
        href: "/",
        isActive: segments.length === 0,
        icon: <LayoutDashboard width={18} />,
      },
      {
        name: "Commandes",
        href: "/orders",
        isActive: segments[0] === "orders",
        icon: <ScrollText width={18} />,
      },
      {
        name: "Statistiques",
        href: "/sites",
        isActive: segments[0] === "sites",
        icon: <AreaChart width={18} />,
      },
      {
        name: "Votre site",
        href: `/site/${site?.id}`,
        isActive: segments[0] === "site",
        icon: <UtensilsCrossed width={18} />,
      },
      {
        name: "Paramétres",
        href: "/settings",
        isActive: segments[0] === "settings",
        icon: <Settings width={18} />,
      },
    ];
  }, [segments, site?.id]);

  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <>
      <button
        className={`fixed z-20 ${
          // left align for Editor, right align for other pages
          segments[0] === "post" && segments.length === 2 && !showSidebar
            ? "left-5 top-5"
            : "right-5 top-7"
        } sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>
      <div
        className={`transform ${
          showSidebar ? "w-full translate-x-0" : "-translate-x-full"
        } fixed z-10 flex h-full flex-col justify-between border-r border-stone-200 bg-stone-100 p-4 transition-all sm:w-60 sm:translate-x-0 dark:border-stone-700 dark:bg-stone-900`}
      >
        <div className="grid gap-2">
          <div className="flex items-center space-x-2 rounded-lg px-2 py-1.5">
            <a
              href="https://vercel.com/templates/next.js/platforms-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 hover:bg-stone-200 dark:hover:bg-stone-700"
            >
              <svg
                width="26"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black dark:text-white"
              >
                <path
                  d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <div className="h-6 rotate-[30deg] border-l border-stone-400 dark:border-stone-500" />
            <Link
              href="/"
              className="rounded-lg p-2 hover:bg-stone-200 dark:hover:bg-stone-700"
            >
              <Image
                src="/logo.png"
                width={24}
                height={24}
                alt="Logo"
                className="dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
              />
            </Link>
          </div>
          <div className="grid gap-1">
            {tabs.map(({ name, href, isActive, icon }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 ${
                  isActive ? "bg-stone-200 text-black dark:bg-stone-700" : ""
                } rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800`}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="grid gap-1">
            {externalLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800"
              >
                <div className="flex items-center space-x-3">
                  {icon}
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <p>↗</p>
              </a>
            ))}
          </div>
          <div className="my-2 border-t border-stone-200 dark:border-stone-700" />
          {children}
        </div>
      </div>
    </>
  );
}
