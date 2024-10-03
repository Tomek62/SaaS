import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";


import {
  CheckCheck,
  TrendingUp,
  Clock,
  LockKeyhole,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";
import BlurBackground from "@/components/ui/blur-background";
export const projects = [
  {
    title: "Simple d'utilisation",
    description:
      "Il n'est pas nécessaire d'être développeur. En quelques clics, vous pouvez créer votre site.",
    icon: <CheckCheck className="mr-4 h-6 w-6" />,
    link: "",
  },
  {
    title: "Boostez votre activité",
    description:
      "Le site est accompagné d'un suivi des commandes permettant d'avoir un œil sur votre business.",
    icon: <TrendingUp className="mr-4 h-6 w-6" />,
    link: "",
  },
  {
    title: "Paiement sécurisé",
    description:
      "Il est possible de changer son site à tout moment. La maintenance du site est faite par nos soins, et il est possible d'appeler à tout moment.",
    icon: <LockKeyhole className="mr-4 h-6 w-6" />,
    link: "",
  },
  {
    title: "Fidélisez votre clientèle",
    description:
      "Il est possible de changer son site à tout moment. La maintenance du site est faite par nos soins, et il est possible d'appeler à tout moment.",
    icon: <HeartHandshake className="mr-4 h-6 w-6" />,
    link: "",
  },
  {
    title: "Communication & Marketing",
    description:
      "Il est possible de changer son site à tout moment. La maintenance du site est faite par nos soins, et il est possible d'appeler à tout moment.",
    icon: <MessageCircle className="mr-4 h-6 w-6" />,
    link: "",
  },
  {
    title: "Service opérationnel 24/7",
    description:
      "Il est possible de changer son site à tout moment. La maintenance du site est faite par nos soins, et il est possible d'appeler à tout moment.",
    icon: <Clock className="mr-4 h-6 w-6" />,
    link: "",
  },
];
const Features = () => {
  return (
    <section className="relative px-10 py-32 lg:px-40">
      <div className="md:flex md:justify-between">
        <h2 className="min-w-fit font-primary text-4xl font-semibold  text-black">
          Nos services <br /> Food<span className="text-primary">Point</span>
        </h2>
        <p className="text-textSecondary my-8 md:my-0 max-w-sm">
          Bien plus qu’un site de Click&Collect, FoodPoint vous accompagne dans
          la gestion des commandes, le suivi de votre activité{" "}
        </p>
        <div className="md:flex md:flex-col">
          <Link
            href="/subscribe"
            className="hover:border-1 btn rounded-3xl border-none bg-primary font-semibold text-white hover:bg-white hover:text-primary mb-2 w-full"
          >
            Essayez maintenant
          </Link>
          <div className="hover:border-1 btn mr-4 rounded-3xl border-primary bg-transparent font-semibold text-primary hover:bg-primary hover:text-white w-full">
            <Link
              href="/plans"
              className="flex justify-center  text-sm  font-semibold  group-hover:text-white"
            >
              Voir les plans
            </Link>
          </div>
        </div>
      </div>
      <div className="gap-10 font-semibold md:flex md:text-xl">
        <HoverEffect items={projects} />
      </div>
      <BlurBackground/>
    </section>
  );
};

export default Features;
