import Link from "next/link";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlurImage from "@/components/blur-image";
import { placeholderBlurhash, toDateString } from "@/lib/utils";
import BlogCard from "@/components/blog-card";
import { getPostsForSite, getSiteData } from "@/lib/fetchers";
import Image from "next/image";
import Nav from "./(webapp)/components/nav";
import CreateOrderButton from "./(webapp)/components/create-order-button";
import SpecialCard from "./(webapp)/components/special-card";

// fonction importante pour plus tard platform.foodpoint.fr
// export async function generateStaticParams() {
//   const allSites = await prisma.site.findMany({
//     select: {
//       subdomain: true,
//       customDomain: true,
//     },
//     // feel free to remove this filter if you want to generate paths for all sites
//     where: {
//       subdomain: "demo",
//     },
//   });

//   const allPaths = allSites
//     .flatMap(({ subdomain, customDomain }) => [
//       subdomain && {
//         domain: `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
//       },
//       customDomain && {
//         domain: customDomain,
//       },
//     ])
//     .filter(Boolean);

//   return allPaths;
// }

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);
  const [data, posts] = await Promise.all([
    getSiteData(domain),
    getPostsForSite(domain),
  ]);

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col space-y-6 py-20">
      <div>
        <h1 className="mb-8 text-left text-2xl font-bold text-gray-800">
          Bienvenue sur notre site !
        </h1>
        <CreateOrderButton />
      </div>
      <div>
        <h1 className="mb-8 text-left text-2xl font-bold text-gray-800">
          Nouveauté
        </h1>
        {/* <SpecialCard /> */}
      </div>
      <div>
        <h1 className="mb-8 text-left text-2xl font-bold text-gray-800">
          Offres du moment
        </h1>
        {/* Add your offers content here */}
      </div>
      <div>
        <h1 className="mb-8 text-left text-2xl font-bold text-gray-800">
          Votre dernière commande
        </h1>
        {true ? (
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-bold">Commande du 12 mars 2021</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-bold">Pizza Margherita</h3>
                  <p>1 x Pizza Margherita</p>
                  <p>1 x Pizza Margherita</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-bold">Pizza Margherita</h3>
                  <p>1 x Pizza Margherita</p>
                  <p>1 x Pizza Margherita</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-lg font-bold">
            Vous n'avez pas encore passé de commande
          </p>
        )}
      </div>
    </div>
  );
}
