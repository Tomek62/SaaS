import IphoneMockup from "@/components/iphone-mockup";
import BlurBackground from "@/components/ui/blur-background";
import {
  Youtube,
  Wifi,
  BatteryMedium,
  Home,
  ShoppingCart,
  UtensilsCrossed,
  User,
} from "lucide-react";
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
            Crée facilement un site de commande en ligne, de livraison, et de
            click & collect. Attirez une nouvelle clientèle et augmentez vos
            ventes en offrant un service moderne et pratique.
          </p>
          <div className="mt-10 flex items-center  justify-center gap-x-6 font-primary text-sm lg:justify-start">
            <a
              href="/subscribe"
              className="hover:border-1 btn rounded-3xl border-none bg-primary font-semibold text-white hover:bg-white hover:text-primary"
            >
              Devenez bêta-testeur 
              {/* Essayez maintenant */}
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
            <div className="relative h-full w-full bg-white text-black">
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
                      src="/Logo-chezmartinus.png"
                      width={500}
                      height={100}
                      alt="FoodPoint"
                    />
                  </div>
                  <h2 className="ml-4 font-appPrimary text-lg">
                    Chez Martinus
                  </h2>
                </div>
                {/* Card info */}
                <div className="my-8 rounded-md bg-bgCardApp p-2 ">
                  <div className="flex flex-row justify-between">
                    <div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <h3 className="ml-2 font-appPrimary text-lg">Ouvert</h3>
                      </div>
                      <p className="ml-5 font-secondary text-xs">Jusqu'à 23h</p>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-1 text-center">
                      <h3 className="font-appPrimary">Points fidélités</h3>
                      <p className="font-secondary">38</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-evenly">
                    <button className="rounded-md border-none bg-white px-6 py-1 font-semibold hover:bg-white">
                      <p className="text-xs text-black">Plus d'infos</p>
                    </button>
                    <button className="rounded-md border-none bg-gradient-to-r from-red-300 to-red-500 px-6 py-1 font-semibold">
                      <p className="text-xs text-white">Commander</p>
                    </button>
                  </div>
                </div>
                <h3 className="font-appPrimary">Nos Menus</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-bgCardApp">
                    <Image
                      src="/Smash-burger.png"
                      width={500}
                      height={100}
                      alt="Smash burger"
                    />
                    <p className="text-center font-secondary text-base font-black">
                      Burgers
                    </p>
                  </div>
                  <div className="rounded- bg-bgCardApp">
                    <Image
                      src="/Sandwich.png"
                      width={500}
                      height={100}
                      alt="Euratechnologies"
                    />
                    <p className="text-center font-secondary text-base font-black">
                      Sandwichs
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-appPrimary">Nos sides</h3>
                </div>
              </div>
              <div className="absolute bottom-0 flex w-full justify-around bg-bgCardApp py-2">
                <Home width={20} />
                <UtensilsCrossed width={20} />
                <ShoppingCart width={20} />
                <User width={20} />
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
          {/* <div className="w-1/2 lg:w-1/6">
            <Link href="https://pepite-nord.pepitizy.fr/">
              <Image
                src="/Pepite-Logo-bleu.png"
                width={500}
                height={90}
                alt="Pépite Lille"
                className="transition duration-300 hover:scale-110"
              />
            </Link>
          </div> */}
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
      <BlurBackground/>
    </div>
  );
};

export default Hero;
