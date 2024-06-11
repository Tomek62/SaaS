import { CheckCheck, TrendingUp, Clock } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-light-brand-faint  py-20 px-10 lg:px-40">
      <div className="gap-10 font-semibold md:flex md:text-xl">
        {/* Feature 1 */}
        <div className="card card-body flex flex-col items-center mb-5 bg-white md:mb-0  md:w-1/5">
          <h3 className="mb-4 flex items-center font-bold text-black">
            <CheckCheck className="mr-4 h-6 w-6" />
            Simple d'utilisation
          </h3>
          <p className="mb-4 text-center">
            Il n'est pas nécessaire d'être développeur. En quelques clics, vous
            pouvez créer votre site.
          </p>
          <button className="btn btn-primary bg-light-brand-emphasis text-light-brand-inverted">
            Voir la démo
          </button>
        </div>

        {/* Feature 2 */}
        <div className="card card-body flex flex-col items-center  bg-white md:mb-0  md:w-1/5">
          <h3 className="mb-4 flex items-center font-bold text-black">
            <TrendingUp className="mr-4 h-6 w-6" />
            Suivi de votre activité
          </h3>
          <p className="mb-4 text-center">
            Le site est accompagné d'un suivi des commandes permettant d'avoir
            un œil sur votre business.
          </p>
          <button className="btn btn-primary bg-light-brand-emphasis text-light-brand-inverted">
            En savoir plus
          </button>
        </div>

        {/* Feature 3 */}
        <div className="card card-body flex flex-col items-center mt-5 lg:mt-0 bg-white md:mb-0  md:w-1/5">
          <h3 className="mb-4 flex items-center font-bold text-black">
            <Clock className="mr-4 h-6 w-6" />
            Service opérationnel 24/7
          </h3>
          <p className="mb-4 text-center">
            Il est possible de changer son site à tout moment. La maintenance du
            site est faite par nos soins, et il est possible d'appeler à tout
            moment.
          </p>
          <button className="btn btn-primary bg-light-brand-emphasis text-light-brand-inverted">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
