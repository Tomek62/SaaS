import { Sandwich } from "lucide-react";
import Image from "next/image";

export default function FoodCard({title,image}:{title:string,image:string}) {
  return (
    <div className="card bg-slate-50 flex justify-center shadow-lg p-4 min-h-32 w-4/5 mb-10">
      <h1 className="text-center font-extrabold text-black">{title}</h1>
      <Image src={image} alt={title} width={200} height={200} />
    </div>
  );
}
