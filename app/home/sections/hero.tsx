import IphoneMockup from "@/components/iphone-mockup";
import { Youtube, Wifi, BatteryMedium } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative isolate px-6  pb-32 lg:px-32 lg:pt-32 ">
      <div className="max-w-screen mx-auto pt-28 lg:flex  lg:items-center  lg:justify-between lg:pt-0">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="font-primary text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-primary">Boostez</span> votre business de
            Fast-food en <span className="text-primary">quelques clics.</span>
          </h1>
          <p className="mt-6 font-secondary text-lg leading-8 text-gray-600">
            Avec FoodPoint, transformez votre restaurant en quelques clics.
            <br />
            Créez facilement un site de commande en ligne, de livraison, et de
            click & collect. Attirez une nouvelle clientèle et augmentez vos
            ventes en offrant un service moderne et pratique.
          </p>
          <div className="mt-10 flex items-center  justify-center gap-x-6 font-primary text-sm lg:justify-start">
            <a
              href="#"
              className="hover:border-1 btn rounded-3xl border-none bg-primary font-semibold text-white hover:bg-white hover:text-primary"
            >
              Essayez maintenant
            </a>
            <a
              href="#"
              className="flex items-center text-sm font-semibold  text-gray-900"
            >
              <Youtube className="mr-2" />
              Voir la démo
            </a>
          </div>
        </div>
        <div className="mt-16 flex ">
          <IphoneMockup>
            <div className="h-full w-full bg-white text-black">
              {/* HEADER IPHONE */}
              <div className="header flex justify-between">
                <p className="ml-8">20:32</p>
                <div className="mr-8 flex items-center">
                  <Wifi width={20} height={20} className="stroke-black" />
                  <BatteryMedium
                    width={20}
                    height={20}
                    className="ml-2 stroke-black"
                  />
                </div>
              </div>
              {/* BODY APPLICATION */}
              <div className="px-4 pt-5">
              {/* HEADER APPLICATION */}
              <div className="flex flex-row items-center">
                <div className="w-10">
                  <Image
                    src="/logo.png"
                    width={500}
                    height={100}
                    alt="FoodPoint"
                  />
                </div>
                <h2 className="ml-4 text-lg font-appPrimary">Chez Martinus</h2>
              </div>
              
              </div>
            </div>
          </IphoneMockup>
        </div>
      </div>
      <div className="pt-32">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Un projet propulsé à l'aide de
        </h3>
        <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:px-10">
          <div className=" lg:w-1/4">
            <Link href="https://www.euratechnologies.com/">
              <Image
                src="/euratechnologies.png"
                width={500}
                height={100}
                alt="Euratechnologies"
                className="transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
          <div className="w-1/2 lg:w-1/6">
            <Link href="https://pepite-nord.pepitizy.fr/">
              <Image
                src="/Pepite-Logo-bleu.png"
                width={500}
                height={90}
                alt="Pépite Lille"
                className="transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
          <div className="lg:w-1/4">
            <Link href="https://www.instagram.com/chez_martinus_friterie/">
              <Image
                src="/chez_martinus.png"
                width={500}
                height={90}
                alt="Chez Martinus"
                className="transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute -left-1/4 top-16 z-[-1] h-1/2 w-full scale-150 rounded-full bg-gradient-to-r from-primary to-white opacity-60 blur-3xl"></div>
      <div className="absolute -right-1/4 bottom-0 z-[-1] h-1/2 w-full scale-150 rounded-full bg-gradient-to-l from-primary to-white opacity-60 blur-3xl"></div>
      <div className="from-bgHeroPink absolute right-1 top-2.5 z-[-1] h-1/3 w-full scale-150 rounded-full bg-gradient-to-bl to-white opacity-70 blur-3xl"></div>
      <div className="absolute right-1/3 top-2/3 z-[-1] h-1/3 w-1/3  scale-150 rounded-full bg-white opacity-70 blur-3xl"></div>
    </div>
  );
};

export default Hero;
