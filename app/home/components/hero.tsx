import Image from "next/image";
import heroImage from "../../../public/Take Away-pana.png";
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="px-10 lg:px-40">
      <div className="flex items-center flex-col md:flex-row ">
        <div className="lg:max-w-xlg lg:pr-32">
          <h1 className="text-4xl font-bold  text-black lg:text-5xl">
            <span className="text-light-brand-emphasis">Boostez</span> votre
            business de Fast-food en{" "}
            <span className="text-light-brand-emphasis">quelques clics.</span>
          </h1>
          <p className="py-6 text-light-content-strong">
            Avec FoodPoint, transformez votre restaurant en quelques clics.
            <br />
            Créez facilement un site de commande en ligne, de livraison, et de
            click & collect. Attirez une nouvelle clientèle et augmentez vos
            ventes en offrant un service moderne et pratique.
          </p>
          <button className="btn btn-primary bg-light-brand-emphasis text-light-brand-inverted">
            Essayez maintenant
          </button>
          <button className="btn btn-primary ml-6 bg-light-brand-emphasis text-light-brand-inverted">
            Demo
          </button>
        </div>
        <Image
          src={heroImage}
          alt="Hero"
          className="w-full max-w-sm lg:max-w-lg "
          layout="responsive"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Hero;
