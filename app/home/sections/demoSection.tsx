import React from "react";

const Demo = () => {
  return (
    <section className="px-10  py-48 lg:px-40 lg:py-56" id="demo">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Partie Gauche */}
        <div className="flex h-64 w-full flex-col justify-between md:h-80 md:w-1/2 md:pr-10 lg:h-96">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-black">
              Découvrez nos sites
            </h2>
            <p className=" text-gray-600">
              Découvrez comment vous pouvez facilement créer et gérer votre site
              de commande en ligne, de livraison, et de click & collect. Attirez
              une nouvelle clientèle et augmentez vos ventes en offrant un
              service moderne et pratique.
            </p>
            <div className="my-6">
              <div className="bg-light-brand-inverted badge badge-lg 	text-primary">
                default
              </div>
              <div className="bg-light-brand-inverted badge badge-lg	 text-primary">
                default
              </div>
              <div className="bg-light-brand-inverted badge badge-lg	  text-primary">
                default
              </div>
            </div>
            <button className="text-light-brand-inverted btn  btn-primary bg-primary">
              Découvrir nos sites
            </button>
          </div>
        </div>

        {/* Partie Droite */}
        <div className="mt-10 w-full md:mt-0 md:w-1/2">
          <div className="relative">
            <iframe
              className="h-64 w-full md:h-80 lg:h-96"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Processus de Création"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
