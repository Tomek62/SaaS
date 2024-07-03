import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Editor from "@/components/editor";
import Image from "next/image";

export default async function FoodPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col  mx-auto w-full max-w-sm items-center">
      <Image
        src="/burger.jpg"
        alt="Poulet frit"
        width={200}
        height={200}
      />
      <div className="card bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
