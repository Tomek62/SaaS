import Image from "next/image";
import heroImage from "../../../public/Take Away-pana.png";
import { Play } from "lucide-react";
import IphoneMockup from "@/components/iphone-mockup";

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 pb-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="max-w-screen mx-auto pt-28 lg:flex  lg:items-center  lg:justify-between lg:pt-0">
        <div className="text-center lg:w-1/2 lg:text-left">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-light-brand-emphasis">Boostez</span> votre
            business de Fast-food en{" "}
            <span className="text-light-brand-emphasis">quelques clics.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Avec FoodPoint, transformez votre restaurant en quelques clics.
              <br />
             Créez facilement un site de commande en ligne, de livraison, et de
             click & collect. Attirez une nouvelle clientèle et augmentez vos
             ventes en offrant un service moderne et pratique.
          </p>
          <div className="mt-10 flex items-center  justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-16 flex lg:w-1/3">
          <IphoneMockup children={<h1>Hi</h1>} />
        </div>
      </div>
    </div>
    // <section className="px-10 lg:px-40">
    //   <div className="flex items-center flex-col md:flex-row ">
    //     <div className="lg:max-w-xlg lg:pr-32">
    //       <h1 className="text-4xl font-bold  text-black lg:text-5xl">
    //         <span className="text-light-brand-emphasis">Boostez</span> votre
    //         business de Fast-food en{" "}
    //         <span className="text-light-brand-emphasis">quelques clics.</span>
    //       </h1>
    //       <p className="py-6 text-light-content-strong">
    //         Avec FoodPoint, transformez votre restaurant en quelques clics.
    //         <br />
    //         Créez facilement un site de commande en ligne, de livraison, et de
    //         click & collect. Attirez une nouvelle clientèle et augmentez vos
    //         ventes en offrant un service moderne et pratique.
    //       </p>
    //       <button className="btn btn-primary bg-light-brand-emphasis text-light-brand-inverted">
    //         Essayez maintenant
    //       </button>
    //       <button className="btn btn-primary ml-6 bg-light-brand-emphasis text-light-brand-inverted">
    //         Demo
    //       </button>
    //     </div>
    //     <Image
    //       src={heroImage}
    //       alt="Hero"
    //       className="w-full max-w-sm lg:max-w-lg "
    //       layout="responsive"
    //       draggable={false}
    //     />
    //   </div>
    // </section>
  );
};

export default Hero;
