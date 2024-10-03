import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ProcessSection = () => {
  return (
    <div className="px-6 lg:px-36 py-32 bg-bgSecondary z-10 text-black">
      <h2 className="font-primary font-bold text-center text-3xl mb-2">
        Crée ton service en moins d'<span className="text-primary">1 heure</span>
      </h2>
      <p className="text-center text-xl text-secondary">
        Pas besoin de vous inquiéter pour le code. <br />
        Vous n’avez qu’à glisser votre menu et le tour est joué !
      </p>
      <div className="md:flex my-16 justify-around">
        {/* image a gauche */}
        <Image src="/processSection.png" width={500} height={500} alt="App designs" className="mb-16 md:mb-0"/>
       {/* partie de droite */}
       <div>
        {/* 1er element */}
        <div className="flex flex-col items-center md:flex-row mb-6">
          <div className="flex justify-center items-center rounded-full  w-8 h-8 bg-primary opacity-75">
            <p  className="text-white">1</p>
          </div>
          <div className="text-center md:text-left md:ml-4 max-w-xs">
            <h3 className="font-primary font-bold text-lg">Remplis le formulaire</h3>
            <p className="font-secondary text-textSecondary text-base">Saisis tes informations pour qu'elles apparaissent sur ton site final.</p>
          </div>
        </div>
        {/* 2eme element */}
        <div className="flex flex-col items-center md:flex-row mb-6">
          <div className="flex justify-center items-center rounded-full  w-8 h-8 bg-primary opacity-75">
            <p className="text-white">2</p>
          </div>
          <div className="text-center md:text-left md:ml-4 max-w-xs">
            <h3 className="font-primary font-bold text-lg">Importe et personnalise</h3>
            <p className="font-secondary text-textSecondary text-base">Glisse ton menu et ton logo, choisis ensuite tes paramètres de personnalisation.</p>
          </div>
        </div>
        {/* 3eme element */}
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex justify-center items-center rounded-full  w-8 h-8 bg-primary opacity-75">
            <p className="text-white">3</p>
          </div>
          <div className="text-center md:text-left md:ml-4 max-w-xs">
            <h3 className="font-primary font-bold text-lg">Ton site est prêt !</h3>
            <p className="font-secondary text-textSecondary text-base">En quelques instants, tout sera prêt à l'utilisation. Il ne te reste plus qu'à suivre le tuto pour la gestion des commandes.</p>
          </div>
        </div>
       </div>
      </div>
      <div className="flex justify-center">
        <button className="btn border-none rounded-3xl bg-primary font-semibold text-white hover:bg-white hover:text-primary hover:border-1">
          <Link
            href="#"
            className="flex items-center text-sm font-semibold"
          >
            <Youtube className="mr-2" />
            Voir la démo
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProcessSection;