import { Menu } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
export default function FoodCard({ data }: { data: any }) {
  // Change 'any' to 'Menu'
  return (
    <div className="mb-10 w-full rounded-lg border-2 bg-white border-bgCardApp ">
      <div className="flex w-full justify-between bg-bgCardApp  p-2">
        <h1 className="font-secondary font-black text-black">{data.name}</h1>
        <Link href={`/food/${data.id}`} className="">
          <ShoppingCart className="stroke-black" />
        </Link>
      </div>
      <div className="p-2">
        <p>coucou</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
