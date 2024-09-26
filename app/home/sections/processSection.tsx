import { Youtube } from "lucide-react";
import Link from "next/link";
const ProcessSection = () => {
  return (
    <div className="lg:px-36 py-32 bg-bgSecondary z-10">
      <h2 className="font-primary font-bold text-black text-center text-3xl mb-2">
        Créer ton service en moins d'<span className="text-primary">1 heure</span>
      </h2>
      <p className="text-center text-xl text-secondary">
        Pas besoin de vous inquiéter pour le code ! <br />
        Vous n’avez qu’à glisser votre menu et le tour est joué !
      </p>
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