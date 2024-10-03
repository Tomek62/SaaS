import { Menu } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ data }: { data: any }) { // Change 'any' to 'Menu'
  return (
    <Link href={`/food/${data.id}`} className="min-h-32 card mb-10 flex w-full justify-center bg-slate-50 p-4 shadow-lg">
      <div >
        <h1 className="text-center font-extrabold text-black">{data.name}</h1>
        {/* <Image src={data.image} alt={title} width={200} height={200} /> */}
      </div>
    </Link>
  );
}
