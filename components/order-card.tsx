import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, random } from "@/lib/utils";
import { Order } from "@prisma/client";
import prisma from "@/lib/prisma";

import { BarChart, ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function OrderCard({ data }: { data: Order}) {
    const user = await prisma.user.findUnique({
        where: {id:data.userId}
      });

  return (
    <div className="relative rounded-lg border border-stone-200 pb-10 shadow-md transition-all hover:shadow-xl dark:border-stone-700 dark:hover:border-white">
        <div className="border-t border-stone-200 p-4 dark:border-stone-700">
          <h3 className="my-0 truncate font-cal text-xl font-bold tracking-wide dark:text-white">
            {data.deliveryMethod}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm font-normal leading-snug text-stone-500 dark:text-stone-400">

            {user? user.name : "Unknown"}
          </p>
        </div>
    </div>
  );
}
