import "@/styles/globals.css";
import { cal, inter,rubik,russo ,roboto} from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const title =
  "FoodPoint - L'application pour créer votre site de commande en quelques clics.";
const description =
  "FoodPoint est un service pour les restaurateurs leur permettant de créer un site de commande en ligne et click&collect facilement, et en quelques minutes, pour développer leur business.";
const image = "https://vercel.pub/thumbnail.png";

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://vercel.pub/favicon.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@vercel",
  },
  metadataBase: new URL("https://vercel.pub"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
      </head>
      <body className={cn(cal.variable, inter.variable,rubik.variable,russo.variable,roboto.variable)}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
