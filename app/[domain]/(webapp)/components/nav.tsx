"use client";

import { cn } from "@/lib/utils";
import { UserRound } from "lucide";
import { BadgeEuro, Home, ShoppingCart, UtensilsCrossed ,User} from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Nav() {
  const segment = useSelectedLayoutSegment();

  const navItems = [
    {
      name: "Home",
      href: `/`,
      segment: null,
      icon:<Home className="stroke-black" />,
    },
    {
      name: "Food",
      href: `/food`,
      segment: "food",
      icon: <UtensilsCrossed className="stroke-black" />,
    },
    {
      name: "Panier",
      href: `/order`,
      segment: "order",
      icon:<ShoppingCart className="stroke-black"/>
    },
    {
      name: "Profil",
      href: `/profile`,
      segment: "profile",
      icon: <User className="stroke-black"/>
    }
  ];

  return (
    <div className="btm-nav bg-bgCardApp">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <button className={cn(
            "flex flex-col items-center justify-center",
            segment === item.segment ? "active" : ""
          )}>
            {item.icon}
          </button>
        </Link>
      ))}
    </div>
  );
}