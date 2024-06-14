import PlaceholderCard from "@/components/placeholder-card";
import { Suspense } from "react";

export default function OnlineOrdersPage(){
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-cal text-3xl font-bold dark:text-white">
            Commande en cours
          </h1>
        </div>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))}
            </div>
          }
        >
           <h1>Voici toutes les commandes en cous</h1>
        </Suspense>
      </div>
    </div>
  );
}