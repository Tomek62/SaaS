import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";
import { replaceExamples, replaceTweets } from "@/lib/remark-plugins";
import { getSession } from "./auth";
import { serialize } from "next-mdx-remote/serialize";
import { redirect } from "next/navigation";

export async function getSiteData(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return prisma.site.findUnique({
        where: subdomain ? { subdomain } : { customDomain: domain },
        include: { user: true ,restaurant:true},
      });
    },
    [`${domain}-metadata`],
    {
      revalidate: 900,
      tags: [`${domain}-metadata`],
    },
  )();
}


export async function getSite() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  const site = await prisma.site.findUnique({
    where: {
      userId: session?.user.id as string,
    },
  });
  return site;
}

// // Utilisez la fonction getSession pour obtenir les informations de l'utilisateur actuellement authentifié
export async function getSiteIdForCurrentUser() {
  const session = await getSession();
  if (!session?.user.id) {
    // If the user is not authenticated, return null
    return null;
  }
  // Use the user's ID to retrieve the associated site
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      siteId: true,
    },
  });
  // If the user does not have an associated site, return null
  if (!user || !user.siteId) {
    return null;
  }
  // Return the ID of the site associated with the user
  console.log(user.siteId);
  return user.siteId;
}

export async function getMenusForSite(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return prisma.site.findUnique({
        where: subdomain ? { subdomain } : { customDomain: domain },
        select: {
          restaurant: {
            select: {
              menus: {
                select: {
                  name: true,
                  description: true,
                  products: {
                    select: {
                      name: true,
                      description: true,
                      price: true,
                      imageUrl: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    },
    [`${domain}-menus`],
    {
      revalidate: 900,
      tags: [`${domain}-menus`],
    },
  )();
}
export async function getPostsForSite(domain: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      return prisma.post.findMany({
        where: {
          site: subdomain ? { subdomain } : { customDomain: domain },
          published: true,
        },
        select: {
          title: true,
          description: true,
          slug: true,
          image: true,
          imageBlurhash: true,
          createdAt: true,
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });
    },
    [`${domain}-posts`],
    {
      revalidate: 900,
      tags: [`${domain}-posts`],
    },
  )();
}

export async function getPostData(domain: string, slug: string) {
  const subdomain = domain.endsWith(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)
    ? domain.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, "")
    : null;

  return await unstable_cache(
    async () => {
      const data = await prisma.post.findFirst({
        where: {
          site: subdomain ? { subdomain } : { customDomain: domain },
          slug,
          published: true,
        },
        include: {
          site: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!data) return null;

      const [mdxSource, adjacentPosts] = await Promise.all([
        getMdxSource(data.content!),
        prisma.post.findMany({
          where: {
            site: subdomain ? { subdomain } : { customDomain: domain },
            published: true,
            NOT: {
              id: data.id,
            },
          },
          select: {
            slug: true,
            title: true,
            createdAt: true,
            description: true,
            image: true,
            imageBlurhash: true,
          },
        }),
      ]);

      return {
        ...data,
        mdxSource,
        adjacentPosts,
      };
    },
    [`${domain}-${slug}`],
    {
      revalidate: 900, // 15 minutes
      tags: [`${domain}-${slug}`],
    },
  )();
}

async function getMdxSource(postContents: string) {
  // transforms links like <link> to [link](link) as MDX doesn't support <link> syntax
  // https://mdxjs.com/docs/what-is-mdx/#markdown
  const content =
    postContents?.replaceAll(/<(https?:\/\/\S+)>/g, "[$1]($1)") ?? "";
  // Serialize the content string into MDX
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [replaceTweets, () => replaceExamples(prisma)],
    },
  });

  return mdxSource;
}
