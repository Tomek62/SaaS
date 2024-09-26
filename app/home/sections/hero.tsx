import IphoneMockup from "@/components/iphone-mockup";
import { Youtube } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative isolate px-6  pb-32 lg:px-32 lg:pt-32">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="max-w-screen mx-auto pt-28 lg:flex  lg:items-center  lg:justify-between lg:pt-0">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold font-primary tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-primary">Boostez</span> votre business de
            Fast-food en <span className="text-primary">quelques clics.</span>
          </h1>
          <p className="font-secondary mt-6 text-lg leading-8 text-gray-600">
            Avec FoodPoint, transformez votre restaurant en quelques clics.
            <br />
            Créez facilement un site de commande en ligne, de livraison, et de
            click & collect. Attirez une nouvelle clientèle et augmentez vos
            ventes en offrant un service moderne et pratique.
          </p>
          <div className="mt-10 flex items-center  justify-center gap-x-6 lg:justify-start text-sm font-primary">
            <a
              href="#"
              className="btn rounded-3xl bg-primary text-white font-semibold  "
            >
              Essayez maintenant
            </a>
            <a
              href="#"
              className="flex items-center text-sm font-semibold  text-gray-900"
            >
              <Youtube className="mr-2"/>
              Voir la démo
            </a>
          </div>
        </div>
        <div className="mt-16 flex">
          <IphoneMockup>
            <h1>Hi</h1>
          </IphoneMockup>
        </div>
      </div>
      <div className="py-32">
        <h3 className="text-3xl font-bold text-center mb-10">Un projet propulsé à l'aide de</h3>
        <div className="lg:flex">
          <Image  src="/euratechnologies.png" width={500} height={100} alt="Euratechnologies"/>
          <Image  src="/Pepite-Logo-bleu.png" width={500} height={90} alt="Pépite Lille" />
          <Image  src="/chez_martinus.png" width={500} height={90} alt="Chez Martinus" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
