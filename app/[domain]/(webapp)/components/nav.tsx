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
      icon:<Home size={20} />,
    },
    {
      name: "Food",
      href: `/food`,
      segment: "food",
      icon: <UtensilsCrossed size={20} />,
    },
    {
      name: "Panier",
      href: `/order`,
      segment: "order",
      icon:<ShoppingCart />
    },
    // {
    //   name: "Fidélité",
    //   href: `/fidelity`,
    //   segment: "fidelity",
    //   icon:<BadgeEuro />
    // },
    {
      name: "Account",
      href: `/account`,
      segment: "account",
      icon: <User />
    }
  ];

  return (
    <div className="btm-nav bg-white">
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