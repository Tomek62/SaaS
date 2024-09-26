import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CheckCheck, TrendingUp, Clock } from "lucide-react";
export const projects = [
  {
    title: "Simple d'utilisation",
    description:
      "Il n'est pas nécessaire d'être développeur. En quelques clics, vous pouvez créer votre site.",
    icon: <CheckCheck className="mr-4 h-6 w-6" />,
    link: "https://stripe.com",
  },
  {
    title: "Boostez votre activité",
    description:
      "Le site est accompagné d'un suivi des commandes permettant d'avoir un œil sur votre business.",
    icon: <TrendingUp className="mr-4 h-6 w-6" />,
    link: "https://netflix.com",
  },
  {
    title: "Service opérationnel 24/7",
    description:
      "Il est possible de changer son site à tout moment. La maintenance du site est faite par nos soins, et il est possible d'appeler à tout moment.",
    icon: <Clock className="mr-4 h-6 w-6" />,
    link: "https://google.com",
  }
];
const Features = () => {
  return (
    <section className="bg-light-brand-faint  py-10 px-10 lg:px-40">
      <h1 className="text-3xl font-bold text-center mb-10">Pourquoi nous ?</h1>
      <div className="gap-10 font-semibold md:flex md:text-xl">
      <HoverEffect items={projects}/>
        
      </div>
    </section>
  );
};

export default Features;
